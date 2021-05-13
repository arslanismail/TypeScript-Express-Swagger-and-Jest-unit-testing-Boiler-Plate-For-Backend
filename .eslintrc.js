/*
 * Code from https://dev.to/robertcoopercode/using-eslint-and-prettier-in-a-typescript-project-53jb
 */

module.exports = {
	parser: '@typescript-eslint/parser', // Specifies the ESLint parser
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
	],
	parserOptions: {
		ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
		sourceType: 'module', // Allows for the use of imports
		project: './tsconfig.json',
	},
	rules: {
		// Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
		// e.g. "@typescript-eslint/explicit-function-return-type": "off",
		'comma-dangle': [
			'error',
			{
				arrays: 'always-multiline',
				objects: 'always-multiline',
				imports: 'always-multiline',
				exports: 'always-multiline',
				functions: 'never',
			},
		],
		// TODO: remove this rule and fix the route classes instead.
		'@typescript-eslint/unbound-method': ['off'],
		// 0 = 'off', 1 = 'warn', 2 = 'error'
		'@typescript-eslint/semi': ['error', 'always'],
		'@typescript-eslint/quotes': ['error', 'single'],
		'@typescript-eslint/no-explicit-any': ['off'],
		'@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
		'@typescript-eslint/interface-name-prefix': [
			'warn',
			{ prefixWithI: 'always' },
		],
		'@typescript-eslint/member-delimiter-style': [
			'error',
			{
				multiline: {
					delimiter: 'semi',
				},
			},
		],
	},
};
