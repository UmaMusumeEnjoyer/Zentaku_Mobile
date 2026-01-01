# PBL5 Mobile - Anime Tracking App

React Native mobile application for anime tracking and discovery, built with Expo.

## 🚀 Features

- Browse trending anime
- Explore anime by genres
- View latest anime news
- Multi-language support (English & Japanese)
- Dark/Light theme
- Shared business logic with web version

## 🛠 Tech Stack

- **React Native** with Expo
- **TypeScript**
- **Shared Logic Package** - Reusable business logic
- **i18next** - Internationalization
- **React Native StyleSheet** - Styling

## 📦 Project Structure
pbl5_mobile/
├── src/
│ ├── screens/
│ │ └── HomePage/
│ ├── components/
│ ├── context/
│ │ └── ThemeContext.tsx
│ ├── i18n/
│ │ └── config.ts
│ └── App.tsx
├── package.json
└── tsconfig.json


## 🔧 Installation

```bash
# Install dependencies
npm install

# Install shared-logic package
npm install ../shared-logic

# Start Expo development server
npm start

# Run on Android
npm run android

# Run on iOS
npm run ios

# Run on Web
npm run web

📱 Testing on Physical Device
Install Expo Go app from Play Store (Android) or App Store (iOS)
Run npm start
Scan the QR code with Expo Go app
🔗 Related Projects
pbl5_webFE - Web version
shared-logic - Shared business logic package
📄 License
MIT