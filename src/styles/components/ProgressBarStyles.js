import { StyleSheet } from 'react-native';
import { COLORS } from '../../../assets/styles/colors';

export const ProgressBarStyles = StyleSheet.create({
  container: {},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontSize: 13,
    color: COLORS.textSecondary,
    fontWeight: '600',
  },
  counter: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  track: {
    height: 7,
    backgroundColor: COLORS.border,
    borderRadius: 4,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    borderRadius: 4,
  },
});
