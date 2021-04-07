module.exports = {
  "lint-staged": {
    "src/**/*.html": [
      "prettier --write"
    ],
    "src/**/*.{js,vue}": [
      "prettier --write",
      "eslint --fix"
    ],
    "src/**/*.scss": [
      "prettier --write"
    ]
  },
}
