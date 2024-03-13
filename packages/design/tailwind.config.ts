/** @type {import('tailwindcss').Config} */


export default {
    content: [
        './src/**/*.{js,tsx,ts,tsx}'
    ],
    theme: {
        screens: {
            sm: '320px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
        },
        colors: {
            transparent: "transparent",
            background: "#FAFAFA",
            white: "#FFFFFF",
            primary: {
                DEFAULT: "#953737",
                light: "#ebe3e3",
                dark: "#953737"
            },
            neutral: {
                DEFAULT: "#1F292E",
            },
            success: {
                DEFAULT: "#34B234",
                light: "#c4eec4",
            },
            error: {
                DEFAULT: "#C91D1D",
                light: "#f5bcbc",
            },
            warning: {
                DEFAULT: "#E8B130",
                light: "#f7e5ba"
            },
            information: {
                DEFAULT: "#309be8",
                light: "#badef7",
            }
        },
        fontFamily: {
            sans: ['Graphik', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
            switzer: ['Switzer'],
        },
        extend: {
            borderRadius: {
                DEFAULT: "0.25rem",
                xs: "0.125rem",
                sm: "0.25rem",
                md: "0.5rem"
            },
            zIndex: {
                9999: "9999"
            },
            minWidth: {
                sm: '320px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
                fit: "min-content"
            },
            maxWidth: {
                sm: '320px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
            },
            keyframes: {
                pulse: {
                    "0%, 100%": { opacity: "1" },
                    "50%": { opacity: "0.1" }
                },
                "accordion-down": {
                    from: { height: 0 },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: 0 },
                },
                "collapsible-down": {
                    from: { height: 0 },
                    to: { height: "var(--radix-collapsible-content-height)" },
                },
                "collapsible-up": {
                    from: { height: "var(--radix-collapsible-content-height)" },
                    to: { height: 0 },
                },
            },
            animation: {
                'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                "collapsible-down": "collapsible-down 0.2s ease-out",
                "collapsible-up": "collapsible-up 0.2s ease-out",
            },
            fontSize: {
                "inherit": "inherit"
            },
            aria: {
                current: 'current="true"'
            },
            boxShadow: {
                "button": "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"
            },
            backdropBlur: {
                xs: ".5px"
            },
            strokeWidth: {
                '1.5': '1.5px',
            }
        }
    },
    plugins: [
        import("tailwindcss-animate"),
    ]
}
