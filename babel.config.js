module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@app': './app',
          '@assets': './assets',
        },
      },
    ],
    'module:react-native-dotenv',
    'react-native-reanimated/plugin',
  ],
  env: {
    production: {
      plugins: [],
    },
  },
};
