const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');

const config = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    assetExts: [
      'png',
      'jpg',
      'jpeg',
      'gif',
      'bmp',
      'webp',
      'mp4',
      'mov',
      'avi',
      'mkv',
      'wmv',
      'flv',
      'webm',
      'mp3',
      'wav',
      'aac',
      'ogg',
      'flac',
      'm4a',
      'wma',
      'opus',
      'ttf',
      'otf',
      'woff',
      'woff2',
      'eot',
    ],
    sourceExts: ['js', 'jsx', 'ts', 'tsx', 'json', 'svg'],
  },
};

module.exports = wrapWithReanimatedMetroConfig(
  mergeConfig(getDefaultConfig(__dirname), config),
);
