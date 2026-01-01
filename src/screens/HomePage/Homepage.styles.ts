import { StyleSheet } from 'react-native';

export const createStyles = (colors: any) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollView: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  loadingText: {
    color: colors.text,
    fontSize: 18,
    marginTop: 10,
  },
  headerControls: {
    position: 'absolute',
    top: 50,
    right: 20,
    zIndex: 1000,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  languageButton: {
    backgroundColor: colors.card,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.border,
  },
  
  // Hero Section
  heroSection: {
    padding: 20,
    backgroundColor: colors.card,
    borderRadius: 12,
    margin: 20,
    marginTop: 80,
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 10,
  },
  heroSubtitle: {
    fontSize: 16,
    color: colors.text,
    opacity: 0.8,
    marginBottom: 20,
  },
  heroImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginTop: 15,
  },
  
  // Features Section
  featuresSection: {
    padding: 20,
    backgroundColor: colors.card,
    margin: 20,
    borderRadius: 12,
  },
  featuresLabel: {
    backgroundColor: colors.primary,
    color: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    fontSize: 12,
    fontWeight: '600',
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  featuresTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 15,
  },
  featuresIntro: {
    fontSize: 16,
    color: colors.text,
    opacity: 0.7,
    marginBottom: 20,
  },
  featureItem: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'flex-start',
  },
  featureIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  featureIconText: {
    fontSize: 24,
    color: '#fff',
  },
  featureDetails: {
    flex: 1,
  },
  featureDetailsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 5,
  },
  featureDetailsDesc: {
    fontSize: 14,
    color: colors.text,
    opacity: 0.7,
  },
  featuresImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginTop: 20,
  },
  
  // General Section
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 15,
  },
  
  // Anime Grid
  animeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  animeCard: {
    width: '48%',
    backgroundColor: colors.card,
    borderRadius: 8,
    marginBottom: 15,
    overflow: 'hidden',
  },
  animeImage: {
    width: '100%',
    height: 150,
  },
  animeTitle: {
    padding: 10,
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
  },
  animeDesc: {
    padding: 10,
    paddingTop: 0,
    fontSize: 12,
    color: colors.text,
    opacity: 0.7,
  },
  
  // Genres
  genresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  genreChip: {
    backgroundColor: colors.primary,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  genreText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  
  // News
  newsCard: {
    backgroundColor: colors.card,
    borderRadius: 8,
    marginBottom: 15,
    overflow: 'hidden',
  },
  newsImage: {
    width: '100%',
    height: 180,
  },
  newsContent: {
    padding: 15,
  },
  newsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 8,
  },
  newsSnippet: {
    fontSize: 14,
    color: colors.text,
    opacity: 0.7,
  },
  
  // Footer
  footer: {
    padding: 30,
    backgroundColor: colors.card,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    marginTop: 20,
  },
  footerLinks: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
    gap: 15,
  },
  footerLink: {
    fontSize: 14,
    color: colors.text,
    opacity: 0.7,
  },
  footerCopyright: {
    fontSize: 12,
    color: colors.text,
    opacity: 0.5,
    textAlign: 'center',
  },
});