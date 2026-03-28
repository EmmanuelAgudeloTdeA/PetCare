import { StyleSheet } from 'react-native';
import { COLORS } from '../../../assets/styles/colors';

export const OutlineButtonStyles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.card,
    borderRadius: 14,
    paddingVertical: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: COLORS.border,
  },
  icon: {
    marginRight: 7,
  },
  label: {
    color: COLORS.textSecondary,
    fontSize: 16,
    fontWeight: '600',
  },
});
