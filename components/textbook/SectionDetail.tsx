import { Colors, Spacing } from '@/constants/theme';
import { Section } from '@/types/textbook';
import { MotiView } from 'moti';
import React, { useState } from 'react';
import { Dimensions, Image, LayoutChangeEvent, ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import YoutubeIframe from 'react-native-youtube-iframe';
import { FloatingCloseButton } from '../common/FloatingCloseButton';
import { PrimaryButton } from './Button';
import { ModeToggle } from './content/ModeToggle';
import { PaginatedContent } from './content/PaginatedContent';
import { ScrollableContent } from './content/ScrollableContent';

const getYouTubeId = (url: string) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const YouTubePlayer = ({ videoUrl }: { videoUrl: string }) => {
  const videoId = getYouTubeId(videoUrl);
  if (!videoId) return null;
  return (
    <View style={styles.videoContainer}>
      <YoutubeIframe height={210} play={false} videoId={videoId} webViewStyle={{ opacity: 0.99 }} />
    </View>
  );
};

type Props = {
  section: Section;
  onStartQuiz: () => void;
  isReplica?: boolean;
  highlightTerm?: string;
};
type ContentMode = 'scroll' | 'page';

export function SectionDetail({ section, onStartQuiz, isReplica = false, highlightTerm = '' }: Props) {
  const [contentMode, setContentMode] = useState<ContentMode>('scroll');
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [containerWidth, setContainerWidth] = useState(screenWidth - Spacing.md * 2);

  const hasMcq = Array.isArray(section.mcq) && section.mcq.length > 0;
  const sectionVideos = section.video ? (Array.isArray(section.video) ? section.video : [section.video]) : [];

  const handleLayout = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout;
    setContainerWidth(width);
  };
  const handleEnterFullScreen = () => {
    StatusBar.setHidden(true, 'slide');
    setIsFullScreen(true);
  };
  const handleExitFullScreen = () => {
    StatusBar.setHidden(false, 'slide');
    setIsFullScreen(false);
  };

  const renderContent = (isForFullScreen: boolean) => {
    if (contentMode === 'scroll') {
      return (
        <ScrollableContent
          title={section.title}
          content={section.content || ''}
          isFullScreen={isForFullScreen}
          onPress={handleEnterFullScreen}
          highlightTerm={highlightTerm}
        />
      );
    }
    return (
      <PaginatedContent
        title={section.title}
        content={section.content || ''}
        containerWidth={isForFullScreen ? screenWidth : containerWidth}
        isFullScreen={isForFullScreen}
        onPress={handleEnterFullScreen}
      />
    );
  };

  return (
    <View style={styles.container}>
      {/* Conditionally render the header. It won't show on search replica screens. */}

      <ScrollView
        scrollEnabled={!isFullScreen}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        <MotiView from={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Image source={{ uri: section.image }} style={styles.mainImage} />
          {sectionVideos.map((url, i) => <YouTubePlayer key={i} videoUrl={url} />)}

          <View style={styles.contentSection}>
            <ModeToggle mode={contentMode} onToggle={setContentMode} />
            <View onLayout={handleLayout} style={{ opacity: isFullScreen ? 0 : 1 }}>
              {renderContent(false)}
            </View>
          </View>

          {hasMcq && !isReplica && (
            <MotiView style={{ marginTop: Spacing.xl, opacity: isFullScreen ? 0 : 1 }}>
              <PrimaryButton title="Test Your Knowledge" onPress={onStartQuiz} />
            </MotiView>
          )}
        </MotiView>
      </ScrollView>

      {isFullScreen && (
        <MotiView
          style={styles.fullscreenContainer}
          from={{ translateY: screenHeight }}
          animate={{ translateY: 0 }}
          transition={{ type: 'spring', damping: 20, stiffness: 120 }}
        >
          {renderContent(true)}
          <FloatingCloseButton onPress={handleExitFullScreen} />
        </MotiView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollViewContent: {
    paddingHorizontal: Spacing.md,
    paddingTop: 90, // Crucial: This pushes content down below the floating header.
    paddingBottom: Spacing.xl,
  },
  videoContainer: {
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: Spacing.lg,
    borderWidth: 1,
    borderColor: Colors.lightGray,
  },
  mainImage: {
    width: '100%',
    height: 220,
    borderRadius: 16,
    marginBottom: Spacing.lg,
    backgroundColor: Colors.lightGray,
  },
  contentSection: {
    marginTop: Spacing.md,
  },
  fullscreenContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Colors.white,
    zIndex: 50,
  },
});