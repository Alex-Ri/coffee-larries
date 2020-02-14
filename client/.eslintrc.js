
module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: [
		'plugin:vue/base'
	],
	'parser': 'vue-eslint-parser',
	parserOptions: {
		'parser': 'babel-eslint',
		ecmaVersion: 11,
		allowImportExportEverywhere: true
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		indent: [ 'error', 'tab', {
			'SwitchCase': 2
		} ],
		curly: [ 'error', 'all' ],
		semi: [ 'error', 'never' ],
		quotes: [ 'error', 'single' ],
		eqeqeq: [ 'error', 'smart' ],
		'vue/eqeqeq': [ 'error', 'smart' ],
		'vue/no-unused-vars': [ 'error' ],
		'key-spacing': [ 'error' ],
		'vue/key-spacing': [ 'error' ],
		'vue/no-v-html': [ 'error' ],
		'comma-spacing': [ 'error' ],
		'arrow-spacing': [ 'error' ],
		'vue/arrow-spacing': [ 'error' ],
		'block-spacing': [ 'error' ],
		'vue/block-spacing': [ 'error' ],
		'no-trailing-spaces': [ 'error' ],
		'eol-last': [ 'error', 'always' ],
		'keyword-spacing': [ 'error' ],
		'vue/keyword-spacing': [ 'error' ],
		'comma-style': [ 'error', 'last' ],
		'comma-dangle': [ 'error', 'never' ],
		'vue/comma-dangle': [ 'error', 'never' ],
		'spaced-comment': [ 'error', 'always' ],
		'space-in-parens': [ 'error', 'never' ],
		'vue/this-in-template': [ 'error', 'never' ],
		'vue/v-on-function-call': [ 'error', 'never' ],
		'array-bracket-spacing': [ 'error', 'always' ],
		'vue/array-bracket-spacing': [ 'error', 'always' ],
		'template-curly-spacing': [ 'error', 'always' ],
		'computed-property-spacing': [ 'error', 'never' ],
		'vue/attribute-hyphenation': [ 'error', 'always' ],
		'space-infix-ops': [ 'error', { 'int32Hint': false } ],
		'vue/object-curly-spacing': [ 'error', 'always' ],
		'object-curly-spacing': [ 'error', 'always', {
			arraysInObjects: true,
			objectsInObjects: true
		} ],
		'brace-style': [ 'error', '1tbs', {
			allowSingleLine: true
		} ],
		'vue/brace-style': [ 'error', '1tbs', {
			allowSingleLine: true
		} ],
		camelcase: [ 'error', {
			properties: 'never',
			ignoreDestructuring: true
		} ],
		'vue/camelcase': [ 'error', {
			properties: 'never',
			ignoreDestructuring: true
		} ],
		'vue/html-indent': [ 'error', 'tab', {
			attribute: 1,
			baseIndent: 1,
			closeBracket: 0,
			ignores: []
		} ],
		'vue/script-indent': [ 'error', 'tab', {
			baseIndent: 0
		} ],
		'vue/html-closing-bracket-spacing': [ 'error', {
			startTag: 'never',
			endTag: 'never',
			selfClosingTag: 'always'
		} ],
		'vue/html-closing-bracket-newline': [ 'error', {
			singleline: 'never',
			multiline: 'always'
		} ],
		'vue/no-multi-spaces': [ 'error', {
			ignoreProperties: false
		} ],
		'vue/v-slot-style': [ 'error', {
			atComponent: 'shorthand',
			default: 'shorthand',
			named: 'shorthand'
		} ],
		'vue/component-tags-order': [ 'error', {
			order: [ 'template', 'script', 'style' ]
		} ],
		'vue/order-in-components': [ 'error', {
			order: [
				'el',
				'name',
				'parent',
				'functional',
				[ 'delimiters', 'comments' ],
				[ 'components', 'directives', 'filters' ],
				'extends',
				'mixins',
				'inheritAttrs',
				'model',
				[ 'props', 'propsData' ],
				'fetch',
				'asyncData',
				'data',
				'validations',
				'computed',
				'watch',
				'LIFECYCLE_HOOKS',
				'methods',
				'head',
				[ 'template', 'render' ],
				'renderError'
			]
		} ]
	},
	overrides: [
		{
			files: [ '*.vue' ],
			rules: {
				'indent': 'off'
			}
		}
	]
}
