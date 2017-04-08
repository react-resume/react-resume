module.exports = {
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2017,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
    },
  },
  "env": {
    "es6": true,
    "jest": true,
    "browser": true,
    "node": true,
  },
  "extends": [
    "eslint:recommended",
    "prettier",
    "prettier/react",
  ],
  "plugins": [
    "react",
    "prettier",
  ],
  "rules": {
    "prettier/prettier": ["error", {
      "trailingComma": "es5",
    }]
  }
};
