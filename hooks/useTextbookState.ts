import { NavigationProp } from '@react-navigation/native';
import { useCallback, useState } from 'react';

export type ViewType = 'chapters' | 'sections' | 'content' | 'mcq';
export interface ViewState {
  type: ViewType;
  chapterIndex?: number;
  sectionIndex?: number;
}

export const useTextbookState = () => {
  const [viewState, setViewState] = useState<ViewState>({ type: 'chapters' });

  // --- No changes to these functions ---
  const selectChapter = useCallback((index: number) => {
    setViewState({ type: 'sections', chapterIndex: index });
  }, []);

  const selectSection = useCallback((index: number) => {
    setViewState(prev => ({ ...prev, type: 'content', sectionIndex: index }));
  }, []);

  const startQuiz = useCallback(() => {
    setViewState(prev => ({ ...prev, type: 'mcq' }));
  }, []);
  
  const goBack = useCallback((navigation: NavigationProp<any>) => {
    setViewState(prev => {
        switch(prev.type) {
            case 'mcq':
                return { type: 'content', chapterIndex: prev.chapterIndex, sectionIndex: prev.sectionIndex };
            case 'content':
                return { type: 'sections', chapterIndex: prev.chapterIndex };
            case 'sections':
                return { type: 'chapters' };
            case 'chapters':
            default:
                if (navigation.canGoBack()) {
                    navigation.goBack();
                }
                return prev;
        }
    })
  }, []);
  // --- End of unchanged functions ---

  const finishQuiz = useCallback(() => {
    // This now simply navigates back to the content view of the *current* section.
    setViewState(prev => ({ ...prev, type: 'content' }));
  }, []);

  // --- NEW FUNCTIONS ---
  
  // Navigates to the content view of the next section in the current chapter
  const goToNextSection = useCallback(() => {
    setViewState(prev => {
      if (prev.type === 'mcq' && prev.sectionIndex !== undefined) {
        return {
          ...prev,
          type: 'content', // Go directly to the content view
          sectionIndex: prev.sectionIndex + 1,
        };
      }
      return prev;
    });
  }, []);
  
  // Navigates to the section list view of the next chapter
  const goToNextChapter = useCallback(() => {
    setViewState(prev => {
      if (prev.type === 'mcq' && prev.chapterIndex !== undefined) {
        return {
          type: 'sections', // Show the list of sections for the new chapter
          chapterIndex: prev.chapterIndex + 1,
          sectionIndex: undefined, // Reset the section index
        };
      }
      return prev;
    });
  }, []);

  // Resets the entire view back to the top-level chapter list
  const resetToChapters = useCallback(() => {
    setViewState({ type: 'chapters' });
  }, []);


  return { 
    viewState, 
    selectChapter, 
    selectSection, 
    startQuiz, 
    finishQuiz, 
    goBack,
    // --- EXPORT NEW FUNCTIONS ---
    goToNextSection,
    goToNextChapter,
    resetToChapters,
  };
};