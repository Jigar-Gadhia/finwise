module.exports = {
  root: true,
  extends: '@react-native',
  plugins: [...(module.exports?.plugins || []), 'unused-imports'],

  rules: {
    // 🔥 REMOVE unused imports automatically
    'unused-imports/no-unused-imports': 'error',

    // 🔧 Handle unused vars (ignore `_var`)
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
      },
    ],

    // ❌ Disable default rules to avoid conflicts
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
  },
};
