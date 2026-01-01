import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  commonEn,
  homePageEn,
  commonJp,
  homePageJp,
  LANGUAGES,
  newsDetailPageEn,
  newsDetailPageJp,
  characterPageEn,
  characterPageJp,
  RankingSectionEn,
  RankingSectionJp,
  charactersSectionEn,
  charactersSectionJp,
  staffSectionEn,
  staffSectionJp,
  statisticsSectionJp,
  statisticsSectionEn,
  AnimeModalEn,
  AnimeModalJp,
  MainContentAreaEn,
  MainContentAreaJp,
  AnimeDetailEn,
  AnimeDetailJp,
} from '@umamusumeenjoyer/shared-logic';

export { LANGUAGES };

const DEFAULT_LANG = 'en';
const DEFAULT_NS = 'common';

// Load saved language từ AsyncStorage
const initI18n = async () => {
  let savedLanguage = DEFAULT_LANG;
  try {
    const storedLang = await AsyncStorage.getItem('language');
    if (storedLang) {
      savedLanguage = storedLang;
    }
  } catch (error) {
    console.log('Error loading language preference:', error);
  }

  i18n
    .use(initReactI18next)
    .init({
      compatibilityJSON: 'v4',
      resources: {
        en: {
          common: commonEn,
          HomePage: homePageEn,
          NewsDetailPage: newsDetailPageEn,
          CharacterPage: characterPageEn,
          RankingSection: RankingSectionEn,
          CharactersSection: charactersSectionEn,
          StaffSection: staffSectionEn,
          StatisticsSection: statisticsSectionEn,
          AnimeModal: AnimeModalEn,
          MainContentArea: MainContentAreaEn,
          AnimeDetail: AnimeDetailEn,
        },
        jp: {
          common: commonJp,
          HomePage: homePageJp,
          NewsDetailPage: newsDetailPageJp,
          CharacterPage: characterPageJp,
          RankingSection: RankingSectionJp,
          CharactersSection: charactersSectionJp,
          StaffSection: staffSectionJp,
          StatisticsSection: statisticsSectionJp,
          AnimeModal: AnimeModalJp,
          MainContentArea: MainContentAreaJp,
          AnimeDetail: AnimeDetailJp,
        },
      },
      lng: savedLanguage,
      fallbackLng: DEFAULT_LANG,
      defaultNS: DEFAULT_NS,
      ns: [
        'common',
        'HomePage',
        'NewsDetailPage',
        'CharacterPage',
        'RankingSection',
        'CharactersSection',
        'StaffSection',
        'StatisticsSection',
        'AnimeModal',
        'MainContentArea',
        'AnimeDetail',
      ],
      interpolation: {
        escapeValue: false,
      },
      react: {
        useSuspense: false,
      },
    });

  // Lưu language mỗi khi thay đổi
  i18n.on('languageChanged', async (lng) => {
    try {
      await AsyncStorage.setItem('language', lng);
    } catch (error) {
      console.log('Error saving language preference:', error);
    }
  });
};

// Khởi tạo i18n
initI18n();

export default i18n;