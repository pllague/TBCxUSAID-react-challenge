module.exports = {
    'env': {
      'browser': true,
      'commonjs': true,
      'es2021': true,
    },
    'extends': 'google',
    'overrides': [
      {
        'env': {
          'node': true,
        },
        'files': [
          '.eslintrc.{js,cjs}',
        ],
        'parserOptions': {
          'sourceType': 'script',
        },
      },
    ],
    'parserOptions': {
      'ecmaVersion': 'latest',
    },
    'rules': {
    },
  };
  prettier.config.js
  module.exports = {
    plugins: ['prettier-plugin-tailwindcss'],
    htmlWhitespaceSensitivity: 'ignore',
    bracketSameLine: true,
    singleQuote: true,
    trailingComma: 'all',
    tabWidth: 2,
    semi: false,
    // svg single line
  };