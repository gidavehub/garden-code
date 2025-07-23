// A calm, focused green theme for studying.
export const Colors = {
    background: '#F5FBF7',    // Very light green
    card: '#FFFFFF',
    primary: '#2E8540',       // A strong, classic green
    accent: '#38A89D',        // A teal accent
    primaryText: '#0A2E1A',   // Dark, readable green
    secondaryText: '#4A6957',
    border: '#DCEADF',
    lightGray: '#E9F0EC',      // Light green-tinted gray
    white: '#FFFFFF',
    darkGray: '#4A6957',
    success: '#28A745',       // Success Green
    danger: '#E53E3E',        // Danger Red
    gold: '#D69E2E',          // Muted Gold
};

export const Spacing = { sm: 8, md: 16, lg: 24, xl: 32 };

export const Typography = {
    title: { 
        fontSize: 28, 
        fontWeight: 'bold' as 'bold', 
        color: Colors.primaryText 
    },
    subtitle: { 
        fontSize: 16, 
        color: Colors.secondaryText 
    },
};

// A vibrant, nature-inspired palette for subject tags
export const subjectColors = ['#48B_A_32', '#34D399', '#FBBF24', '#818CF8', '#F87171', '#60A5FA', '#F472B6'];