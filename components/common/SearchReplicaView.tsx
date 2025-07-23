import { Section } from '@/types/textbook';
import { MotiView } from 'moti';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SectionDetail } from '../textbook/SectionDetail'; // We'll modify SectionDetail
import { FloatingCloseButton } from './FloatingCloseButton'; // Assumes this exists

type Props = {
    section: Section;
    searchTerm: string;
    onClose: () => void;
}

// THIS IS THE SECRET SAUCE. We create a new component that re-uses SectionDetail's logic
// but passes the necessary highlight prop.
export function SearchReplicaView({ section, searchTerm, onClose}: Props) {
    return (
        <MotiView
            style={styles.container}
            from={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring' }}
        >
            <SectionDetail
                section={section}
                onStartQuiz={() => {}} // Dummy function
                isReplica={true}
                highlightTerm={searchTerm}
            />
            <FloatingCloseButton onPress={onClose} />
        </MotiView>
    );
}   
const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'white',
        zIndex: 100, // Make sure it's on top of the search results
    }
});