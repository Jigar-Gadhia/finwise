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

## 📋 Prerequisites

Before you begin, ensure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions up to "Creating a new application" step.

**Requirements:**
- Node.js >= 16
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

## 🎨 Design

### Figma Design

🔗 **[View Figma Design](https://www.figma.com/design/Ukj3xkRHir1Mnzb0oEV4FB/Finance-Management-Mobile-App-UI-UX-Kit-for-Budget-Tracker-Financial-Prototype-Design--Community-?node-id=7388-3143&p=f&t=xPq9D7lqavUilQu6-0)**

### Screenshots

_Screenshots will be added soon_

<!-- 
Add your screenshots here using:
![Home Screen](./screenshots/home.png)
![Expenses](./screenshots/expenses.png)
![Analytics](./screenshots/analytics.png)
-->

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
