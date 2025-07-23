// constants/Styles.ts
import { StyleSheet } from 'react-native';
import { Colors } from './Colors';

export const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.darkGray,
    marginBottom: 20,
  },
  card: {
    backgroundColor: Colors.cardBackground,
    borderRadius: 16,
    padding: 16,
    marginBottom: 15,
    elevation: 4, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 15,
    lineHeight: 30,
  },
  bodyText: {
    fontSize: 17,
    color: Colors.darkGray,
    lineHeight: 25,
  },

  shadow: {
    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 }, // A slightly larger shadow for more "pop"
    shadowOpacity: 0.1,
    shadowRadius: 6,
    // Android shadow
    elevation: 5,
  },
});

