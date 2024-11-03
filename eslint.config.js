import js from "@eslint/js"
import globals from "globals"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import tseslint from "typescript-eslint"
import { plugin as reactQueryPlugin } from "@tanstack/eslint-plugin-query"

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      reactQueryPlugin.configs.recommended,
    ],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "@tanstack/eslint-plugin-query": {
        rules: reactQueryPlugin.rules,
        configs: reactQueryPlugin.configs,
      },
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "no-console": "error",
      "no-duplicate-imports": "error",
      "no-multiple-empty-lines": "error",
      "@tanstack/query/exhaustive-deps": "error",
      "@tanstack/query/no-deprecated-options": "error",
      "@tanstack/query/prefer-query-object-syntax": "error",
      "@tanstack/query/stable-query-client": "error",
    },
  }
)
