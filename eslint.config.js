import eslintPluginAstro from 'eslint-plugin-astro';
export default [
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      'comma-dangle': ['error', 'always-multiline'],
			semi: ['error', 'always'],
			quotes: ['error', 'single'],
    },
  },
];
