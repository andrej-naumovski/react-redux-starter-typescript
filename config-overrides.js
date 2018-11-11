const { override, useEslintRc } = require('customize-cra');

const useEslintTypescript = () => config => {
  const eslintRule = config.module.rules.filter(
    r => r.use && r.use.some(u => u.options && u.options.useEslintrc !== void 0)
  )[0];

  eslintRule.test = /\.[j,t]sx?/

  const rules = config.module.rules.map(
    r =>
      r.use && r.use.some(u => u.options && u.options.useEslintrc !== void 0)
        ? eslintRule
        : r
  );
  config.module.rules = rules;

  return config;
}

module.exports = override(useEslintRc(), useEslintTypescript());