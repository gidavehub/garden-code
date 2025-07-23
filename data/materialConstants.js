// A central place for constants related to Garden Materials.

export const LIGHT_GREEN_THEME = {
  background: '#F0F7F2',    // A very light, almost white-green
  card: '#FFFFFF',           // Clean white cards
  primaryText: '#0A2E1A',    // Dark, readable green for titles
  secondaryText: '#4A6957',  // Softer green for subtitles and descriptions
  accent: '#28A745',          // A vibrant green for buttons and highlights
  border: '#DCEADF',        // A subtle border color
  tabInactive: '#A4C3B2',    // Color for inactive tabs
};

// This is the object structure you expect from the Gemini API.
export const MOCK_TIMETABLE_DATA = {
  monday: [
    { subject: 'Botany', startTime: '09:00', endTime: '10:30', location: 'Lab 3' },
    { subject: 'Soil Chemistry', startTime: '11:00', endTime: '12:30', location: 'Room 201' },
    { subject: 'Lunch Break', startTime: '12:30', endTime: '13:30', location: 'Cafeteria' },
    { subject: 'Horticulture', startTime: '13:30', endTime: '15:00', location: 'Greenhouse A' },
  ],
  tuesday: [
    { subject: 'Mathematics', startTime: '09:00', endTime: '10:30', location: 'Room 105' },
    { subject: 'Plant Genetics', startTime: '11:00', endTime: '12:30', location: 'Lab 2' },
  ],
  wednesday: [
    { subject: 'Botany', startTime: '09:00', endTime: '10:30', location: 'Lab 3' },
    { subject: 'Pest Management', startTime: '11:00', endTime: '12:30', location: 'Room 202' },
    { subject: 'Lunch Break', startTime: '12:30', endTime: '13:30', location: 'Cafeteria' },
    { subject: 'Free Period', startTime: '13:30', endTime: '15:00', location: 'Library' },
  ],
  thursday: [
     { subject: 'Plant Genetics', startTime: '09:00', endTime: '10:30', location: 'Lab 2' },
     { subject: 'Horticulture', startTime: '11:00', endTime: '12:30', location: 'Greenhouse A' },
  ],
  friday: [
     { subject: 'Mathematics', startTime: '09:00', endTime: '10:30', location: 'Room 105' },
     { subject: 'Soil Chemistry', startTime: '11:00', endTime: '12:30', location: 'Room 201' },
  ],
};