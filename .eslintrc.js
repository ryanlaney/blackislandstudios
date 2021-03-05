module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "plugin:react/recommended",
        "airbnb",
    ],
    overrides: [{
        files: ["*.ts", "*.tsx"],
        parser: "@typescript-eslint/parser",
        parserOptions: {
            project: ["./tsconfig.json"],
        },
        plugins: ["@typescript-eslint"],
        extends: [
            "plugin:react/recommended",
            "plugin:@typescript-eslint/eslint-recommended",
            // 'plugin:prettier/recommended'
        ],
        rules: {
            "@typescript-eslint/array-type": ["error"],
            "@typescript-eslint/ban-ts-comment": [
                "error",
                {
                    "ts-ignore": "allow-with-description",
                },
            ],
            "@typescript-eslint/consistent-indexed-object-style": ["error", "index-signature"],
            "@typescript-eslint/consistent-type-assertions": ["error"],
            "@typescript-eslint/consistent-type-imports": ["error", {
                prefer: "type-imports",
                disallowTypeAnnotations: true,
            }],
            "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
            "@typescript-eslint/explicit-function-return-type": [0],
            "@typescript-eslint/explicit-member-accessibility": ["error", {
                accessibility: "explicit",
                overrides: {
                    methods: "off",
                    constructors: "off",
                },
            }],
            "@typescript-eslint/explicit-module-boundary-types": [
                "error",
                {
                    allowedNames: [
                        "componentDidMount",
                        "componentDidUpdate",
                        "componentWillUnmount",
                        "render",
                    ],
                },
            ],
            "@typescript-eslint/member-delimiter-style": ["error", {
                multiline: {
                    delimiter: "semi",
                    requireLast: true,
                },
                singleline: {
                    delimiter: "semi",
                    requireLast: false,
                },
            }],
            "@typescript-eslint/method-signature-style": ["error", "property"],
            "@typescript-eslint/no-base-to-string": ["error"],
            "@typescript-eslint/no-confusing-void-expression": ["error"],
            "@typescript-eslint/no-empty-interface": "off",
            "@typescript-eslint/no-non-null-assertion": "off",
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/no-extra-non-null-assertion": ["error"],
            "@typescript-eslint/no-extraneous-class": ["error"],
            "@typescript-eslint/no-implicit-any-catch": ["error"],
            "@typescript-eslint/no-invalid-void-type": ["error"],
            "@typescript-eslint/no-parameter-properties": ["error"],
            "@typescript-eslint/no-require-imports": ["error"],
            "@typescript-eslint/no-unnecessary-boolean-literal-compare": ["error"],
            "@typescript-eslint/no-unnecessary-condition": ["error"],
            "@typescript-eslint/no-unnecessary-qualifier": ["error"],
            "@typescript-eslint/no-unnecessary-type-arguments": ["error"],
            "@typescript-eslint/no-unnecessary-type-constraint": ["error"],
            "@typescript-eslint/non-nullable-type-assertion-style": ["error"],
            "@typescript-eslint/prefer-for-of": ["error"],
            "@typescript-eslint/prefer-includes": ["error"],
            "@typescript-eslint/prefer-nullish-coalescing": ["error", {
                ignoreConditionalTests: true,
                ignoreMixedLogicalExpressions: true,
            }],
            "@typescript-eslint/prefer-optional-chain": ["error"],
            "@typescript-eslint/prefer-readonly": ["error"],
            "@typescript-eslint/prefer-reduce-type-parameter": ["error"],
            "@typescript-eslint/prefer-string-starts-ends-with": ["error"],
            "@typescript-eslint/prefer-ts-expect-error": ["error"],
            "@typescript-eslint/promise-function-async": ["error"],
            "@typescript-eslint/sort-type-union-intersection-members": ["error"],
            "@typescript-eslint/switch-exhaustiveness-check": ["error"],
            "@typescript-eslint/type-annotation-spacing": ["error"],
            "@typescript-eslint/unified-signatures": ["error"],
            "dot-notation": "off",
            "no-unused-vars": "off",
            "no-use-before-define": [0],
        },
    }],
    parser: "babel-eslint",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
            experimentalObjectRestSpread: true,
            legacyDecorators: true,
        },
        ecmaVersion: 2021,
        sourceType: "module",
    },
    plugins: [
        "react",
        // "prettier"
    ],
    settings: {
        "import/resolver": {
            alias: {
                map: [
                    ["@src", "./src"],
                    ["@oages", "./pages"],
                ],
                extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
            },
        },
    },
    rules: {
        camelcase: [0],
        "class-methods-use-this": [1, {
            exceptMethods: ["setPageTitle", "componentDidMount", "componentWillUnmount"],
        }],
        indent: ["error", 4],
        "max-classes-per-file": ["error", 100],
        "max-len": ["error", { code: 200 }],
        "no-plusplus": ["error", {
            allowForLoopAfterthoughts: true,
        }],
        "no-underscore-dangle": [0],
        "no-restricted-syntax": [0],
        quotes: ["error", "double"],
        "import/order": [
            "error",
            {
                groups: ["builtin", "external", "internal"],
                pathGroups: [
                    {
                        pattern: "react",
                        group: "external",
                        position: "before",
                    },
                    {
                        pattern: "next/**",
                        group: "external",
                        position: "before",
                    },
                    {
                        pattern: "prop-types",
                        group: "external",
                        position: "before",
                    },
                    {
                        pattern: "react-router-dom",
                        group: "external",
                        position: "before",
                    },
                    {
                        pattern: "@material-ui/**",
                        group: "external",
                        position: "before",
                    },
                    {
                        pattern: "@pages/**",
                        group: "internal",
                        position: "before",
                    },
                    {
                        pattern: "@src/**",
                        group: "internal",
                        position: "before",
                    },
                ],
                pathGroupsExcludedImportTypes: ["react"],
                "newlines-between": "always",
                alphabetize: {
                    order: "asc",
                    caseInsensitive: true,
                },
            },
        ],
        "react/boolean-prop-naming": ["error"],
        "react/destructuring-assignment": [0],
        "react/function-component-definition": ["error", {
            namedComponents: "arrow-function",
            unnamedComponents: "arrow-function",
        }],
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        "react/jsx-no-bind": ["error", {
            ignoreDOMComponents: false,
            ignoreRefs: false,
            allowArrowFunctions: false,
            allowFunctions: false,
            allowBind: false,
        }],
        "react/jsx-filename-extension": 0,
        "react/jsx-no-duplicate-props": ["error", {
            ignoreCase: false,
        }],
        "react/jsx-pascal-case": ["error"],
        "react/jsx-props-no-multi-spaces": ["error"],
        "react/jsx-props-no-spreading": 0,
        "react/jsx-sort-props": ["error"],
        "react/jsx-wrap-multilines": 0,
        "react/no-access-state-in-setstate": ["error"],
        "react/no-did-update-set-state": 0,
        "react/no-state-in-constructor": 0,
        "react/no-unsafe": ["error"],
        "react/no-typos": 1,
        "react/no-unused-prop-types": ["error"],
        "react/prefer-es6-class": ["error", "always"],
        "react/prefer-stateless-function": 1,
        "react/prop-types": 0,
        "react/require-default-props": ["error"],
        "react/sort-prop-types": ["error"],
        "react/state-in-constructor": 0,
        "react/static-property-placement": [0],
        "react/style-prop-object": ["error"],
        "react/void-dom-elements-no-children": ["error"],
    },
};
