# FinWise 💰

A beautiful, production-ready **React Native template** for building expense tracking applications. FinWise comes with pre-made UI components, dynamic theming, and a robust architecture to kickstart your financial management app.

## ✨ Features

- 🎨 **Pre-made UI Components** - Ready-to-use components built with React Native Skia and Reanimated for smooth animations
- 🌓 **Dynamic Theming** - Light/Dark mode support with a flexible theming system
- 📊 **Chart Components** - Beautiful charts powered by react-native-skia for expense visualization
- 🧭 **Navigation** - Pre-configured React Navigation with bottom tabs and stack navigation
- 🔄 **State Management** - Redux Toolkit with Redux Persist for data persistence
- 📱 **Responsive Design** - Adaptive layouts using react-native-size-matters
- 🚀 **Performance Optimized** - Native splash screen and optimized rendering
- 💅 **Modern Stack** - TypeScript, ESLint, Prettier, and Husky pre-configured

## 🎯 Tech Stack

- **React Native 0.72.9**
- **TypeScript**
- **Redux Toolkit** - State management
- **React Navigation** - Routing and navigation
- **React Native Reanimated** - Smooth animations
- **React Native Skia** - Advanced graphics
- **React Native Linear Gradient** - Gradient backgrounds
- **Redux Persist** - State persistence

## 📦 Releases

[![GitHub release](https://img.shields.io/github/release/Jigar-Gadhia/finwise.svg)](https://github.com/Jigar-Gadhia/finwise/releases)
[![GitHub all releases](https://img.shields.io/github/downloads/Jigar-Gadhia/finwise/total.svg)](https://github.com/Jigar-Gadhia/finwise/releases)

Check out the [latest releases](https://github.com/Jigar-Gadhia/finwise/releases) for new features, improvements, and bug fixes.

**Latest Version:** See [Releases](https://github.com/Jigar-Gadhia/finwise/releases/latest)

## 🎨 Design

### Figma Design

🔗 **[View Figma Design](https://www.figma.com/design/Ukj3xkRHir1Mnzb0oEV4FB/Finance-Management-Mobile-App-UI-UX-Kit-for-Budget-Tracker-Financial-Prototype-Design--Community-?node-id=7388-3143&p=f&t=xPq9D7lqavUilQu6-0)**

### Work Samples

### Dark Mode

<p>
  <img src="https://github.com/user-attachments/assets/01a7cdc9-1a23-42c1-83de-c477d96f6c88" width="180" />
  <img src="https://github.com/user-attachments/assets/c679b007-0cb4-4dea-b751-a0ebf4b73145" width="180" />
  <img src="https://github.com/user-attachments/assets/8b94d546-f173-4d3d-a915-a4103c261c85" width="180" />
  <img src="https://github.com/user-attachments/assets/b8acbd2e-3144-40ec-8342-56307824fca8" width="180" />
</p>

### Light Mode

<p>
  <img width="180" alt="ios1" src="https://github.com/user-attachments/assets/98b6fd0d-a8fd-4c1d-b805-1ce66178a84d" />
  <img width="180" alt="ios2" src="https://github.com/user-attachments/assets/1d7e4002-9932-4d06-9134-6ad5eb277adb" />
  <img width="180" alt="ios4" src="https://github.com/user-attachments/assets/a220b2ac-42cb-442e-8f76-1a746887f7f8" />
  <img width="180" alt="ios3" src="https://github.com/user-attachments/assets/49f2d848-3d1e-4e91-a730-7a49cbe1a439" />
</p>


## 📋 Prerequisites

Before you begin, ensure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions up to "Creating a new application" step.

**Requirements:**
- Node.js >= 20
- Yarn or npm
- Xcode (for iOS development)
- Android Studio (for Android development)

## 🚀 Getting Started

### Step 1: Install Dependencies

```bash
# using Yarn (recommended)
yarn install

# OR using npm
npm install
```

### Step 2: Install iOS Pods (iOS only)

```bash
cd ios
pod install
cd ..
```

### Step 3: Start Metro Bundler

```bash
# using Yarn
yarn start

# OR using npm
npm start
```

### Step 4: Run the Application

Open a new terminal from the root of the project and run:

#### For Android

```bash
# using Yarn
yarn android

# OR using npm
npm run android
```

#### For iOS

```bash
# using Yarn
yarn ios

# OR using npm
npm run ios
```

If everything is set up correctly, you should see the FinWise app running on your emulator/simulator.

## 📚 Available Scripts

- `yarn start` - Start Metro bundler
- `yarn android` - Run Android app
- `yarn ios` - Run iOS app
- `yarn lint` - Run ESLint
- `yarn typecheck` - Run TypeScript type checking
- `yarn test` - Run tests

## 🏗️ Project Structure

```
finwise/
├── src/
│   ├── components/     # Reusable UI components
│   ├── screens/        # Screen components
│   ├── navigation/     # Navigation configuration
│   ├── store/          # Redux store and slices
│   ├── theme/          # Theme configuration
│   └── utils/          # Utility functions
├── android/            # Android native code
├── ios/                # iOS native code
└── App.tsx             # Root component
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

Built with ❤️ using React Native and modern development tools.

---

**Happy Coding!** 🚀
