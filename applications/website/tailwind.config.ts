/** @type {import('tailwindcss').Config} */

import tailwindConfig from "@coulba/design/tailwind.config"


export default {
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}',
        "../../packages/design/src/**/*.{js,ts,jsx,tsx}"
    ],
    presets: [tailwindConfig],
    plugins: [],
}
