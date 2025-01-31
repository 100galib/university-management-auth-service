import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import prettier from 'eslint-plugin-prettier'

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      globals: globals.node, // Node.js environment
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    ignores: ['node_modules/', 'dist/', '.env'], // Correct ignore paths
  },
  {
    rules: {
      'no-console': 'warn', // Warn on console.log
      'react/react-in-jsx-scope': 'off', // Not needed for React 17+
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' }, // Ignore unused variables starting with "_"
      ],
      'prettier/prettier': 'error', // Enforce Prettier formatting
    },
  },
  prettier.configs.recommended, // Prettier recommended config
]
