const { override, useEslintRc, enableEslintTypescript } = require('customize-cra');

module.exports = override(useEslintRc(), enableEslintTypescript());