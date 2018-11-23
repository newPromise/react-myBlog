module.exports = {
    root: true,
    parserOptions: {
      parser: 'babel-eslint'
    },
    // to fix error in eslint-plugin-react
    "settings": {
      "react": {
        "version": "16.4.2"
      },
    },
    env: {
      browser: true,
    },
    extends: [
      // https://github.com/standard/standard/blob/master/docs/RULES-en.md
      'react-app'
    ],
    // required to lint *.vue files
    // add your custom rules here
    rules: {
      // allow async-await
      'generator-star-spacing': 'off',
      // allow debugger during development
    }
  }
  