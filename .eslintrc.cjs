module.exports = {
	env: {
		es2021: true,
		jest: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:react/jsx-runtime'
	],
	overrides: [],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: './tsconfig.json',
	},
	plugins: ['react', 'react-hooks', '@typescript-eslint'],
	root: true,
	rules: {
		camelcase: 'warn',
		'spaced-comment': 'warn',
		'no-duplicate-imports': 'error',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'off',
		'@typescript-eslint/no-unused-vars': ['error', {
			'vars': 'all',
			'args': 'none',
			'ignoreRestSiblings': false,
		}],
		'no-multiple-empty-lines': ['error', {'max': 1,}],
		'indent': ['error', 'tab', {SwitchCase: 1,}],
		'quotes': ['error', 'single'],
		'semi': ['error', 'always'],
		'comma-dangle': ['error', {
			'arrays': 'never',
			'objects': 'always',
			'imports': 'always',
			'exports': 'always',
			'functions': 'never',
		}],
		'eqeqeq': ['error', 'always'],
		'no-var': ['error'],
		'prefer-arrow-callback': ['error'],
		'no-useless-return': ['error'],
		'max-len': ['warn', {
			'code': 240,
			'tabWidth': 4,
			'ignoreUrls': true,
			'ignoreTrailingComments': true,
			'ignoreStrings': true,
			'ignoreTemplateLiterals': true,
			'ignoreRegExpLiterals': true,
		}],
		'no-console': ['error'],
		'no-case-declarations': 'off',
		'no-mixed-spaces-and-tabs': ['error'],
		'key-spacing': ['error', {'afterColon': true, 'mode': 'strict',}],
		'object-curly-spacing': ['error', 'never'],
		// React rules
		'react/button-has-type': ['error'],
		'react/destructuring-assignment': ['error', 'always'],
		'react/no-deprecated': ['error'],
		'react/no-direct-mutation-state': ['error'],
		'react/no-redundant-should-component-update': ['error'],
		'react/no-typos': ['error'],
		'react/no-unescaped-entities': ['error'],
		'react/no-unsafe': ['error'],
		'react/no-unused-state': ['error'],
		'react/prefer-es6-class': ['warn'],
		'react/prefer-read-only-props': ['error'],
		'react/react-in-jsx-scope': ['error'],
		'react/require-render-return': ['error'],
		'react/state-in-constructor': ['error'],
		'react/jsx-curly-spacing': [2, {
			'when': 'always',
			'spacing': {
				'objectLiterals': 'never',
			},
		}],
		'react/jsx-indent': ['error', 'tab'],
		'react/jsx-key': ['error'],
		'react/jsx-no-bind': ['error'],
		'react/jsx-no-duplicate-props': ['error'],
		'react/jsx-no-target-blank': ['error'],
		'react/jsx-no-undef': ['error'],
		'react/jsx-no-useless-fragment': ['error'],
		'react/jsx-props-no-multi-spaces': ['error'],
		'react/prop-types': ['off'],
		'react/jsx-first-prop-new-line': ['error', 'multiline'],
		'react/jsx-max-props-per-line': ['error', {'maximum': 1,}],
		'react/jsx-no-comment-textnodes': ['error'],
		'react/jsx-newline': ['error', {
			'prevent': true,
		}],
		'arrow-parens': ['error', 'as-needed'],
		'react/jsx-indent-props': ['error', 'tab'],
		'react/jsx-space-before-closing': ['error', 'never'],
		// 'import/no-extraneous-dependencies': [
		// 	'error',
		// 	{
		// 		devDependencies: [
		// 			'test.{ts,tsx}', // repos with a single test file
		// 			'test-*.{ts,tsx}', // repos with multiple top-level test files
		// 			'**/*{.,_}{test,spec}.{ts,tsx}', // tests where the extension or filename suffix denotes that it is a test
		// 			'**/vite.config.ts', // vite config
		// 			'**/setupTests.ts' // vitest setup
		// 		],
		// 		optionalDependencies: false,
		// 	}
		// ],
	},
	settings: {
		'import/resolver': {
			typescript: {},
		},
		react: {
			version: 'detect',
		},
	},
};