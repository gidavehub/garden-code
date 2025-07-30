import { ALL_TEXTBOOKS } from '@/data/allTextBooks';
import React, { createContext, useContext, useMemo, useState } from 'react';
// Define the shape of a search result
export type SearchResult = {
  textbookId: string;
  chapterIndex: number;
  sectionIndex: number;
  sectionTitle: string;
  snippet: string; // A small piece of content showing the match
};

// Define the context's value shape
type SearchContextType = {
  isSearchActive: boolean;
  query: string;
  results: SearchResult[];
  selectedResult: SearchResult | null;
  openSearch: () => void;
  closeSearch: () => void;
  setQuery: (query: string) => void;
  selectResult: (result: SearchResult | null) => void;
};

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedResult, setSelectedResult] = useState<SearchResult | null>(null);

  const performSearch = (currentQuery: string) => {
    if (currentQuery.length < 3) {
      setResults([]);
      return;
    }

    const searchResults: SearchResult[] = [];
    const regex = new RegExp(currentQuery, 'gi');

    ALL_TEXTBOOKS.forEach(textbook => {
      textbook.data.chapters.forEach((chapter, chapterIndex) => {
        chapter.sections.forEach((section, sectionIndex) => {
          const contentMatch = section.content?.match(regex);
          if (contentMatch) {
            const matchIndex = section.content.search(regex);
            const start = Math.max(0, matchIndex - 30);
            const end = Math.min(section.content.length, matchIndex + currentQuery.length + 30);
            const snippet = `...${section.content.substring(start, end)}...`;

            searchResults.push({
              textbookId: textbook.id,
              chapterIndex,
              sectionIndex,
              sectionTitle: section.title,
              snippet,
            });
          }
        });
      });
    });
    setResults(searchResults);
  };

  const handleSetQuery = (newQuery: string) => {
    setQuery(newQuery);
    performSearch(newQuery);
  };

  const openSearch = () => setIsSearchActive(true);
  
  const closeSearch = () => {
    setIsSearchActive(false);
    setQuery('');
    setResults([]);
    setSelectedResult(null);
  };
  
  const selectResult = (result: SearchResult | null) => {
    setSelectedResult(result);
  }

  const value = useMemo(() => ({
    isSearchActive,
    query,
    results,
    selectedResult,
    openSearch,
    closeSearch,
    setQuery: handleSetQuery,
    selectResult,
  }), [isSearchActive, query, results, selectedResult]);

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};