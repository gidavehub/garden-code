import { Colors, Typography } from '@/constants/theme';
import React from 'react';
import { Text, View } from 'react-native';

type Props = {
  text: string;
  term: string;
};

export function HighlightedText({ text = '', term }: Props) {
  if (!term?.trim() || !text) {
    return <Text style={Typography.body}>{text}</Text>;
  }

  const regex = new RegExp(`(${term})`, 'gi');
  // Split the text into paragraphs to apply paragraph-level highlighting
  const paragraphs = text.split('\n');

  return (
    <View>
      {paragraphs.map((paragraph, pIndex) => {
        // Check if the search term is in this paragraph
        if (paragraph.match(regex)) {
          const parts = paragraph.split(regex);
          return (
            // Apply a lighter background to the entire paragraph containing the match
            <Text key={pIndex} style={[Typography.body, { backgroundColor: Colors.primary + '15', paddingVertical: 4, marginVertical: 2 }]}>
              {parts.map((part, i) =>
                part.toLowerCase() === term.toLowerCase() ? (
                  // Apply a darker highlight to the exact search term
                  <Text key={i} style={{ backgroundColor: Colors.primary + '40', fontWeight: 'bold' }}>
                    {part}
                  </Text>
                ) : ( part )
              )}
              {/* Add a newline character if it wasn't the last paragraph */}
              {pIndex < paragraphs.length - 1 && '\n'}
            </Text>
          );
        }
        
        // Render normal paragraph if no match
        return (
          <Text key={pIndex} style={Typography.body}>
            {paragraph}
            {pIndex < paragraphs.length - 1 && '\n'}
          </Text>
        );
      })}
    </View>
  );
}