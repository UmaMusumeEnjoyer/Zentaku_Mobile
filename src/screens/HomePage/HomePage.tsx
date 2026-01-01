import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { useHomeLogic } from '@umamusumeenjoyer/shared-logic';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../context/ThemeContext';
import { createStyles } from './Homepage.styles';

const HomePage: React.FC = () => {
  const { trendingAnime, genres, latestNews, isLoading } = useHomeLogic();
  const { t, i18n } = useTranslation(['HomePage', 'common']);
  const { colors, toggleTheme } = useTheme();
  const styles = createStyles(colors);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'jp' : 'en';
    i18n.changeLanguage(newLang);
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={styles.loadingText}>{t('common:loading')}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Header Controls */}
      <View style={styles.headerControls}>
        <TouchableOpacity onPress={toggleLanguage} style={styles.languageButton}>
          <Text style={{ color: colors.text, fontSize: 16, fontWeight: '600' }}>
            {i18n.language === 'en' ? '🇬🇧 EN' : '🇯🇵 JP'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleTheme}>
          <Text style={{ color: colors.text, fontSize: 24 }}>🌓</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <Text style={styles.heroTitle}>{t('HomePage:hero.title')}</Text>
          <Text style={styles.heroSubtitle}>{t('HomePage:hero.subtitle')}</Text>
          <Image
            source={{ uri: 'https://via.placeholder.com/400x200/667eea/ffffff?text=Dashboard' }}
            style={styles.heroImage}
            resizeMode="cover"
          />
        </View>

        {/* Features Section */}
        <View style={styles.featuresSection}>
          <Text style={styles.featuresLabel}>{t('HomePage:features.label')}</Text>
          <Text style={styles.featuresTitle}>{t('HomePage:features.title')}</Text>
          <Text style={styles.featuresIntro}>{t('HomePage:features.intro')}</Text>

          {/* Feature 1: Exploration */}
          <View style={styles.featureItem}>
            <View style={styles.featureIcon}>
              <Text style={styles.featureIconText}>🛡️</Text>
            </View>
            <View style={styles.featureDetails}>
              <Text style={styles.featureDetailsTitle}>
                {t('HomePage:features.exploration.title')}
              </Text>
              <Text style={styles.featureDetailsDesc}>
                {t('HomePage:features.exploration.desc')}
              </Text>
            </View>
          </View>

          {/* Feature 2: Analytics */}
          <View style={styles.featureItem}>
            <View style={styles.featureIcon}>
              <Text style={styles.featureIconText}>📊</Text>
            </View>
            <View style={styles.featureDetails}>
              <Text style={styles.featureDetailsTitle}>
                {t('HomePage:features.analytics.title')}
              </Text>
              <Text style={styles.featureDetailsDesc}>
                {t('HomePage:features.analytics.desc')}
              </Text>
            </View>
          </View>

          <Image
            source={{ uri: 'https://via.placeholder.com/400x200/764ba2/ffffff?text=Analytics' }}
            style={styles.featuresImage}
            resizeMode="cover"
          />
        </View>

        {/* Trending Anime Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('HomePage:sections.popular')}</Text>
          <View style={styles.animeGrid}>
            {trendingAnime.map((anime) => (
              <TouchableOpacity key={anime.id} style={styles.animeCard}>
                <Image
                  source={{ uri: anime.img }}
                  style={styles.animeImage}
                  resizeMode="cover"
                />
                <Text style={styles.animeTitle} numberOfLines={2}>
                  {anime.title}
                </Text>
                <Text style={styles.animeDesc} numberOfLines={2}>
                  {anime.desc}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Genres Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('HomePage:sections.genres')}</Text>
          <View style={styles.genresContainer}>
            {genres.map((genre, index) => (
              <TouchableOpacity key={index} style={styles.genreChip}>
                <Text style={styles.genreText}>{genre}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Latest News Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('HomePage:sections.latest_news')}</Text>
          {latestNews.map((news) => (
            <TouchableOpacity key={news.id} style={styles.newsCard}>
              <Image
                source={{ uri: news.img }}
                style={styles.newsImage}
                resizeMode="cover"
              />
              <View style={styles.newsContent}>
                <Text style={styles.newsTitle} numberOfLines={2}>
                  {news.title}
                </Text>
                <Text style={styles.newsSnippet} numberOfLines={3}>
                  {news.snippet}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <View style={styles.footerLinks}>
            <TouchableOpacity>
              <Text style={styles.footerLink}>{t('common:footer.about_us')}</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.footerLink}>{t('common:footer.contact')}</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.footerLink}>{t('common:footer.privacy_policy')}</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.footerLink}>{t('common:footer.terms_of_service')}</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.footerCopyright}>
            {t('common:footer.copyright', { year: 2026 })}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomePage;