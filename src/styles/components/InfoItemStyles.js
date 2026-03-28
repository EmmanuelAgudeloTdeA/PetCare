import { StyleSheet } from 'react-native';
import { COLORS } from '../../../assets/styles/colors';

export const InfoItemStyles = StyleSheet.create({
  container: {
    width: '46%',
    backgroundColor: COLORS.background,
    borderRadius: 12,
    padding: 12,
    margin: '2%',
  },
  icon: {
    marginBottom: 6,
  },
  label: {
    fontSize: 11,
    color: COLORS.textSecondary,
    fontWeight: '600',
    textTransform: 'uppercase',
    marginBottom: 2,
  },
  value: {
    fontSize: 15,
    fontWeight: 'bold',
    color: COLORS.text,
  },
});
