// @/components/textbook/YouTubePlayer.tsx
import { Colors } from '@/constants/theme';
import React from 'react';
import { View } from 'react-native';
import YoutubeIframe from 'react-native-youtube-iframe';

const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
};

export const YouTubePlayer = ({ videoUrl }: { videoUrl: string }) => {
    const videoId = getYouTubeId(videoUrl);
    if (!videoId) return null;
    return (
        <View style={{ borderRadius: 12, overflow: 'hidden', marginBottom: 20, borderWidth: 1, borderColor: Colors.lightGray }}>
            <YoutubeIframe height={210} play={false} videoId={videoId} webViewStyle={{ opacity: 0.99 }} />
        </View>
    );
};