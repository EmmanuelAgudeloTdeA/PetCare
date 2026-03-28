import { StyleSheet } from 'react-native';
import { COLORS } from '../../../assets/styles/colors';

export const PetDetailStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  heroSection: {
    backgroundColor: COLORS.primary,
    paddingTop: 24,
    paddingBottom: 44,
    alignItems: 'center',
  },
  heroEmojiContainer: {
    width: 104,
    height: 104,
    borderRadius: 52,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
  },
  heroEmoji: {
    fontSize: 58,
  },
  heroName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  heroSpecies: {
    fontSize: 15,
    color: 'rgba(255,255,255,0.8)',
  },
  content: {
    flex: 1,
    marginTop: -22,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: COLORS.background,
    paddingTop: 24,
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 18,
    padding: 20,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: COLORS.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: 1.2,
    marginBottom: 16,
  },
  infoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -6,
  },
  infoItem: {
    width: '46%',
    backgroundColor: COLORS.background,
    borderRadius: 12,
    padding: 12,
    margin: '2%',
  },
  infoEmoji: {
    fontSize: 22,
    marginBottom: 6,
  },
  infoLabel: {
    fontSize: 11,
    color: COLORS.textSecondary,
    fontWeight: '600',
    textTransform: 'uppercase',
    marginBottom: 2,
  },
  infoValue: {
    fontSize: 15,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  favoriteCard: {
    backgroundColor: COLORS.card,
    borderRadius: 18,
    padding: 16,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  favoriteLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  favoriteEmoji: {
    fontSize: 24,
    marginRight: 12,
  },
  favoriteLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: COLORS.text,
  },
  favoriteSubLabel: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginTop: 2,
  },
  favoriteButton: {
    width: 46,
    height: 46,
    borderRadius: 23,
    justifyContent: 'center',
    alignItems: 'center',
  },
  favoriteButtonActive: {
    backgroundColor: '#FEE2E2',
  },
  favoriteButtonInactive: {
    backgroundColor: COLORS.background,
    borderWidth: 1.5,
    borderColor: COLORS.border,
  },
  favoriteIcon: {
    fontSize: 22,
  },
  visitsCard: {
    padding: 16,
  },
  visitsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  visitsEmoji: {
    fontSize: 30,
    marginRight: 14,
  },
  visitsInfo: {
    flex: 1,
  },
  visitsLabel: {
    fontSize: 13,
    color: COLORS.textSecondary,
    marginBottom: 2,
  },
  visitsCount: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  backButton: {
    marginHorizontal: 20,
    marginBottom: 24,
  },
});
