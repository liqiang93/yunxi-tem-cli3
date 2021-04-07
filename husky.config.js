module.exports = {
  "hooks": {
    "pre-commit": "eslint src/**/*{.js,.vue}",
    "prepare-commit-msg": "exec < /dev/tty && git cz --hook || true",
  }
}
