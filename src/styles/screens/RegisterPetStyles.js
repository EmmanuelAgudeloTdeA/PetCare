import { StyleSheet } from 'react-native';
import { COLORS } from '../../../assets/styles/colors';

export const RegisterPetStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  keyboardView: {
    flex: 1,
  },
  header: {
    backgroundColor: COLORS.primary,
    paddingTop: 20,
    paddingBottom: 28,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  headerEmoji: {
    fontSize: 28,
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  headerSubtitle: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.75)',
    marginTop: 2,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 48,
  },
  progressCardPadding: {
    padding: 16,
  },
  fieldWrapper: {
    marginBottom: 16,
  },
  fieldLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 7,
  },
  fieldIcon: {
    marginRight: 7,
  },
  fieldLabelText: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.text,
  },
  required: {
    color: COLORS.danger,
  },
  input: {
    backgroundColor: COLORS.inputBg,
    borderWidth: 1.5,
    borderColor: COLORS.border,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 13,
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 15,
    color: COLORS.text,
  },
  inputFocused: {
    borderColor: COLORS.primary,
    backgroundColor: '#F0F9F4',
  },
  inputValid: {
    borderColor: COLORS.success,
    backgroundColor: '#F0FFF4',
  },
  inputRow: {
    flexDirection: 'row',
    gap: 12,
  },
  inputHalf: {
    flex: 1,
  },
  validationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  validationText: {
    fontSize: 12,
    color: COLORS.success,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 4,
  },
  clearButtonFlex: {
    flex: 1,
  },
  registerButtonFlex: {
    flex: 2,
  },
  dateText: {
    flex: 1,
    fontSize: 15,
    color: COLORS.text,
  },
  datePlaceholder: {
    flex: 1,
    fontSize: 15,
    color: '#B0A99F',
  },
});
