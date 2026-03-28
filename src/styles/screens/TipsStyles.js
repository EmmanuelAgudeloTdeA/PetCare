import { StyleSheet } from 'react-native';
import { COLORS } from '../../../assets/styles/colors';

export const TipsStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
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
  content: {
    padding: 20,
    paddingBottom: 32,
  },
  progressCardPadding: {
    padding: 16,
  },
  tipCardPadding: {
    padding: 24,
  },
  tipEmojiContainer: {
    width: 76,
    height: 76,
    borderRadius: 38,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 18,
    alignSelf: 'center',
  },
  tipEmoji: {
    fontSize: 42,
  },
  categoryBadgeMargin: {
    marginBottom: 12,
  },
  tipTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 12,
    textAlign: 'center',
  },
  tipText: {
    fontSize: 15,
    lineHeight: 26,
    color: COLORS.textSecondary,
    textAlign: 'center',
  },
  autoIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 18,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  autoIndicatorDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.success,
    marginRight: 8,
  },
  autoIndicatorText: {
    fontSize: 12,
    color: COLORS.textSecondary,
    fontStyle: 'italic',
  },
  nextButton: {
    marginBottom: 16,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
    paddingBottom: 8,
  },
  dot: {
    height: 8,
    borderRadius: 4,
  },
  dotActive: {
    backgroundColor: COLORS.primary,
    width: 22,
  },
  dotInactive: {
    backgroundColor: COLORS.border,
    width: 8,
  },
});
