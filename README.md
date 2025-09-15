# 🐱 Tinder Cats

A React Native app inspired by Tinder, but for cats.  
Swipe left/right on cat cards using data from [The Cat API](https://thecatapi.com/).



- iOS Prewiew: https://github.com/user-attachments/assets/8c195eab-1ad1-4150-b849-f5b287775887
- Android Prewiew: https://github.com/user-attachments/assets/210d7938-ac75-4ed8-8aa2-fc41653d1c65

---

## 🚀 Features

- Swipe left/right on cat cards with smooth animations (`react-native-reanimated`, `react-native-gesture-handler`)
- Fetch cat breeds and images from **The Cat API**
- Like action integrated with Cat API votes endpoint
- Loading state with dedicated `Loading` component
- Empty state with `NoMoreItems` component (with restart option)
- Navigation with **Bottom Tabs**
- Support for custom **SVG icons**
- Separation of concerns: hooks, services, components, utils
- Environment variables using `react-native-dotenv`

---

## 🛠️ Tech Stack

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [TypeScript](https://www.typescriptlang.org/) 
- [Axios](https://axios-http.com/) 
- [The Cat API](https://thecatapi.com/) 
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/) 
- [React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/)
- [React Navigation](https://reactnavigation.org/) 
- [react-native-svg](https://github.com/software-mansion/react-native-svg) & [react-native-svg-transformer](https://github.com/kristerkari/react-native-svg-transformer) 

---

## ⚙️ Setup

1. Clone the repo:
   ```bash
   git clone git@github.com:your-username/tinder-cats.git
   cd tinder-cats


2.	Install dependencies:
	  ```bash
      npm install
   

3.	Add your API key in .env.local:
	  ```bash
    - CAT_API_KEY=your_api_key_here

4. Run the app:
  ```bash
   - npm run start
   - npm run ios   # or npm run android
```

### 📌 TODO
  -	Improve test coverage
  -	Enhance error feedback UI
  -	Add persistence for liked cats
  -	Add chat/favorites flow
  - Implement caching strategy for cat fetches to reduce API calls 

