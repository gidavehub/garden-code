import { FloatingHeaderWithSearch } from '@/components/common/FloatingHeaderWithSearch';
import { ChapterList } from '@/components/textbook/ChapterList';
import { EmptyState } from '@/components/textbook/EmptyState';
import { LoadingIndicator } from '@/components/textbook/LoadingIndicator';
import { NextUpInfo, QuizView } from '@/components/textbook/QuizView'; // Import the NextUpInfo type
import { SectionDetail } from '@/components/textbook/SectionDetail';
import { SectionList } from '@/components/textbook/SectionList';
import { Colors } from '@/constants/theme';
import { getTextbookById } from '@/data/allTextBooks';
import { useTextbookState } from '@/hooks/useTextbookState';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';

export default function TextbookViewer() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const navigation = useNavigation();

  // The hook that drives the internal UI state. Import all functions.
  const {
    viewState,
    selectChapter,
    selectSection,
    startQuiz,
    finishQuiz,
    goBack,
    goToNextSection,
    goToNextChapter,
    resetToChapters,
  } = useTextbookState();
  
  // Use a memoized value to find the textbook once, preventing re-renders
  const textbook = useMemo(() => {
    if (!id) return undefined;
    return getTextbookById(id);
  }, [id]);

  // This is the single, smart back-press handler that we pass down.
  // It calls the hook's goBack function with the main navigation object.
  const handleBackPress = () => {
    goBack(navigation);
  };
  
  if (!textbook) {
    // A clean state for when the textbook isn't found
    return (
      <View style={styles.container}>
        <EmptyState message={`Textbook with ID "${id}" not found.`} />
      </View>
    );
  }

  // This is the core rendering logic that decides which component to show
  // based on the state from our custom hook.
  const renderContent = () => {
    const { type, chapterIndex, sectionIndex } = viewState;
    const { data } = textbook;

    switch (type) {
      case 'chapters':
        return (
          <ChapterList
            textbook={textbook}
            onSelectChapter={selectChapter}
          />
        );

      case 'sections':
        if (chapterIndex == null) return <LoadingIndicator />;
        return (
          <SectionList
            chapter={data.chapters[chapterIndex]}
            onSelectSection={selectSection}
          />
        );

      case 'content':
        if (chapterIndex == null || sectionIndex == null) return <LoadingIndicator />;
        return (
          <SectionDetail
            section={data.chapters[chapterIndex].sections[sectionIndex]}
            onStartQuiz={startQuiz}
          />
        );

      case 'mcq':
        if (chapterIndex == null || sectionIndex == null) return <EmptyState message="Quiz not available." />;
        
        const currentChapter = data.chapters[chapterIndex];
        const sectionForQuiz = currentChapter.sections[sectionIndex];

        // --- THIS LOGIC DETERMINES WHAT HAPPENS AFTER THE QUIZ ---
        let nextUp: NextUpInfo;
        const isLastSection = sectionIndex === currentChapter.sections.length - 1;
        const isLastChapter = chapterIndex === data.chapters.length - 1;
  
        if (!isLastSection) {
          nextUp = {
            type: 'section',
            label: `Next: ${currentChapter.sections[sectionIndex + 1].title}`,
            action: goToNextSection,
          };
        } else if (!isLastChapter) {
          nextUp = {
            type: 'chapter',
            label: `Next: ${data.chapters[chapterIndex + 1].name}`,
            action: goToNextChapter,
          };
        } else {
          nextUp = {
            type: 'end',
            label: 'You finished the textbook!',
            action: resetToChapters,
          };
        }
        
        return <QuizView section={sectionForQuiz} onQuizFinish={finishQuiz} nextUp={nextUp} />;

      default:
        return <EmptyState message="Something went wrong." iconName="alert-decagram" />;
    }
  };

  return (
    <View style={styles.container}>
      {/* 
        The main content (ChapterList, SectionList, etc.) is rendered here.
        It will fill the entire screen, and the header will float on top.
      */}
      {renderContent()}

      {/*
        THIS IS THE FLOATING HEADER.
        - We pass it our smart `handleBackPress` function.
        - We hide it during the quiz for a more focused experience.
      */}
      {viewState.type !== 'mcq' && (
         <FloatingHeaderWithSearch onPress={handleBackPress} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});