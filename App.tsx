import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from './src/context/ThemeContext';
import HomePage from './src/screens/HomePage/HomePage';
import './src/i18n/config';

export default function App() {
  return (
    <ThemeProvider>
      <HomePage />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}