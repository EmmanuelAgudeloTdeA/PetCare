import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../../assets/styles/colors';

const { width, height } = Dimensions.get('window');

export const SplashStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAF7',
  },
  topSection: {
    height: height * 0.56,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  topBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: height * 0.48,
    backgroundColor: COLORS.background,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
  },
  centralCircle: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.35,
    shadowRadius: 20,
    elevation: 12,
  },
  centralEmoji: {
    fontSize: 72,
  },
  floatingIcon: {
    position: 'absolute',
    width: 52,
    height: 52,
    borderRadius: 26,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 5,
  },
  floatingEmoji: {
    fontSize: 24,
  },
  iconTopLeft: {
    top: height * 0.04,
    left: width * 0.12,
    backgroundColor: '#FEF3C7',
  },
  iconTopRight: {
    top: height * 0.04,
    right: width * 0.12,
    backgroundColor: '#FCE7F3',
  },
  iconLeft: {
    top: height * 0.18,
    left: width * 0.06,
    backgroundColor: '#DBEAFE',
  },
  iconRight: {
    top: height * 0.18,
    right: width * 0.06,
    backgroundColor: '#D1FAE5',
  },
  iconBottomLeft: {
    top: height * 0.33,
    left: width * 0.15,
    backgroundColor: '#F3E8FF',
  },
  iconBottomRight: {
    top: height * 0.33,
    right: width * 0.15,
    backgroundColor: '#FEE2E2',
  },
  bottomSection: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 32,
    paddingTop: 8,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: COLORS.text,
    textAlign: 'center',
    marginBottom: 12,
    lineHeight: 38,
  },
  titleprimary: {
    color: COLORS.primary,
  },
  subtitle: {
    fontSize: 15,
    color: COLORS.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 36,
    paddingHorizontal: 8,
  },
  startButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 30,
    paddingVertical: 16,
    paddingHorizontal: 48,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 8,
  },
  startButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  dotsRow: {
    flexDirection: 'row',
    marginTop: 28,
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.border,
  },
  dotActive: {
    width: 24,
    backgroundColor: COLORS.primary,
  },
});
