module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    indent: [
      'error',
      2,
    ],
    semi: [
      'error',
      'always',
    ],
    'no-trailing-spaces': 0,
    'keyword-spacing': 0,
    'no-unused-vars': 1,
    'no-multiple-empty-lines': 0,
    'space-before-function-paren': 0,
    'eol-last': 0,
    'react/prop-types': 0,
    // 'react/jsx-props-no-spreading': 0
    // "react/jsx-props-no-spreading": [
    //   "error",
    //   {
    //     "explicitSpread": "enforce",
    //     "html": "ignore",
    //     "custom": "ignore",
    //     "exceptions": []
    //   }
    // ]
    // 'react/jsx-props-no-spreading': ['error', {
    //   html: "ignore",
    //   custom: "ignore",
    //   exceptions: [""],
    // }]
  },
};
