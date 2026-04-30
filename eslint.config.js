// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const prettierConfig = require('eslint-config-prettier');
const prettierPlugin = require('eslint-plugin-prettier');

module.exports = defineConfig([
  expoConfig,
  prettierConfig,
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'warn',
    },
  },
  {
    // ✅ 修复：配置 import/no-unresolved 忽略 @env 等 RN 特殊模块
    rules: {
      'import/no-unresolved': [
        'error',
        {
          ignore: [
            '^@env$',         // react-native-dotenv 的环境变量模块
            '^@/',            // 路径别名 @/xxx
          ],
        },
      ],
    },
  },
  {
    ignores: ['dist/*'],
  },
]);