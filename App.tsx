import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { initSharedLogic } from '@umamusumeenjoyer/shared-logic';
import { ThemeProvider } from './src/context/ThemeContext';
import HomePage from './src/screens/HomePage/HomePage';
import './src/i18n/config';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

// Cấu hình API Base URL
const API_BASE_URL = process.env.EXPO_PUBLIC_API_BASE_URL || 'https://doannguyen.pythonanywhere.com/api';

// Log để debug
console.log('API Base URL:', API_BASE_URL);

export default function App() {
  useEffect(() => {
    // Khởi tạo shared-logic với AsyncStorage và API base URL
    initSharedLogic({
      storage: AsyncStorage,
      apiBaseUrl: API_BASE_URL
    });
    
    console.log('Shared logic initialized successfully');
  }, []);

  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: 'rgba(0, 102, 255, 0.7)' }}>
          <HomePage />
          <StatusBar style="auto" />
        </SafeAreaView>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}