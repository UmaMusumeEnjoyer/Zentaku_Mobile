import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from './src/context/ThemeContext';
import HomePage from './src/screens/HomePage/HomePage';
import './src/i18n/config';
// Import thư viện (bạn đã có dòng này rồi)
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    // 1. SafeAreaProvider phải nằm ở cấp cao nhất (root)
    <SafeAreaProvider>
      <ThemeProvider>
        {/* 2. SafeAreaView bọc lấy nội dung hiển thị */}
        {/* Quan trọng: Phải có style flex: 1 để nó chiếm toàn bộ màn hình */}
        <SafeAreaView style={{ flex: 1, backgroundColor: 'rgba(0, 102, 255, 0.7)' }}>
          
          <HomePage />
          <StatusBar style="auto" />
          
        </SafeAreaView>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}