// @ts-check
import eslint from '@eslint/js'
import * as importPlugin from "eslint-plugin-import"
import globals from "globals"
import tseslint from 'typescript-eslint'


export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
        plugins: {
            import: importPlugin
        },
        rules: {
            "no-unused-vars": "warn",
            "no-undef": "warn",
            "import/extensions": [
                "error",
                "ignorePackages"
            ]
        }
    }
)

