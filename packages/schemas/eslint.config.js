// @ts-check
import eslint from '@eslint/js'
import * as importPlugin from "eslint-plugin-import"
import tseslint from 'typescript-eslint'


export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    {
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

