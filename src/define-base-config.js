import antfu from '@antfu/eslint-config';
import prettierOptions from '@qtqtart/prettier-config';
import i18nextPlugin from 'eslint-plugin-i18next';
import jestDomPlugin from 'eslint-plugin-jest-dom';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import playwrightPlugin from 'eslint-plugin-playwright';
import storybookPlugin from 'eslint-plugin-storybook';
import testingLibraryPlugin from 'eslint-plugin-testing-library';

export default (config = []) =>
  antfu(
    {
      react: true,
      typescript: true,
      javascript: true,
      stylistic: false,
      formatters: {
        prettierOptions
      },
      ignores: ['dist', 'node_modules']
    },
    {
      plugins: {
        'jsx-a11y': jsxA11yPlugin,
        '18next': i18nextPlugin,
        storybook: storybookPlugin
      },
      rules: {
        'no-var': 'off',
        'no-undef': 'off',
        'no-unused-vars': 'off',
        //
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
        //
        'react-hooks-extra/no-unnecessary-use-prefix': 'off'
      }
    },
    {
      files: ['**/*.test.ts?(x)'],
      ...testingLibraryPlugin.configs['flat/react']
    },
    {
      files: ['**/*.test.ts?(x)'],
      ...jestDomPlugin.configs['flat/recommended']
    },
    {
      files: ['**/*.e2e.ts', '**/*.test.e2e.ts'],
      ...playwrightPlugin.configs['flat/recommended']
    },
    ...config
  );
