module.exports = {
  env: {
    'browser': true,
    'es2021': true
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.app.json',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'simple-import-sort',
    'react-refresh',
  ],
  rules: {
    'no-console': ["error", { allow: ["warn", "error"] }],
    '@typescript-eslint/member-delimiter-style': 'error',
    'simple-import-sort/imports': ['error', {
      'groups': [
        ['^react', 'vite', '^@?\\w'],
        [
          '@/shared(.*)',
          '@/entities(.*)',
          '@/features(.*)',
          '@/widgets(.*)',
          '@/pages(.*)',
          '@/app(.*)'
        ],
        ['^../'],
        ['^./'],
        ['(.*).s?css']
      ]
    }],
    'simple-import-sort/exports': 'error',
    'react/function-component-definition': ['error', {
      'namedComponents': ['arrow-function'],
      'unnamedComponents': 'arrow-function'
    }],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-newline': ['error', {
      prevent: false,
    }],
    'react/require-default-props': 'off',
    'react/jsx-max-props-per-line': ['error', {
      maximum: {
        single: 3,
        multi: 1
      },
    }],
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': ['error', 'never', {
      ts: 'never',
      tsx: 'never',
      svg: 'always',
      json: 'always',
      scss: 'always'
    }],
    'no-plusplus': ['error', {
      allowForLoopAfterthoughts: true,
    }],
    'max-len': ["error", 120, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: false
    }],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-props-no-spreading': 'off',
    'no-param-reassign': ['error', {
      'props': true,
      'ignorePropertyModificationsFor': [
        'state' // for Redux Toolkit reducers
      ]
    }],
    'react-hooks/exhaustive-deps': 'off', // Disable the rule globally
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off' // Disable this rule globally
  },
  "overrides": [
    {
      "files": ["vite.config.ts"],
      "rules": {
        // Disable rules for this file if needed
        "no-unused-vars": "off"
      }
    }
  ]
}
