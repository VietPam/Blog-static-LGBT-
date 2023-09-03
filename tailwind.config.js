const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
    experimental: {
        optimizeUniversalDefaults: true,
    },
    content: [
        './pages/**/*.js',
        './components/**/*.js',
        './layouts/**/*.js',
        './lib/**/*.js',
        './data/**/*.mdx',
    ],
    // darkMode: 'class',
    theme: {
        extend: {
            fontSize: {
                'xs': '0.5rem'
            },
            spacing: {
                '9/16': '56.25%',
            },
            lineHeight: {
                11: '2.75rem',
                12: '3rem',
                13: '3.25rem',
                14: '3.5rem',
            },
            fontFamily: {
                sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
                Montserrat: ['Montserrat', 'sans-serif'],
            },
            colors: {
                primary: colors.teal,
                gray: colors.neutral,
                dark_blue: '#1E1457'
            },
            backgroundImage: {
                gradient:
                    'linear-gradient(to right, #FF7AD2, #FF9194, #FF9B76, #F6CD73, #81DD79, #9DA7D8, #D886FF)',
                image: 'url("/static/images/mainpage.png")',
                webpage: 'linear-gradient(to right, #98BBFF, #C5AEFF ,#E88EF4, #FFB6B6)',
            },
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        color: theme('colors.gray.700'),
                        a: {
                            color: theme('colors.primary.500'),
                            '&:hover': {
                                color: `${theme('colors.primary.600')} !important`,
                            },
                            code: { color: theme('colors.primary.400') },
                        },
                        h1: {
                            fontWeight: '700',
                            letterSpacing: theme('letterSpacing.tight'),
                            color: theme('colors.gray.900'),
                        },
                        h2: {
                            fontWeight: '700',
                            letterSpacing: theme('letterSpacing.tight'),
                            color: theme('colors.gray.900'),
                        },
                        h3: {
                            fontWeight: '600',
                            color: theme('colors.gray.900'),
                        },
                        'h4,h5,h6': {
                            color: theme('colors.gray.900'),
                        },
                        pre: {
                            backgroundColor: theme('colors.gray.800'),
                        },
                        code: {
                            color: theme('colors.pink.500'),
                            backgroundColor: theme('colors.gray.100'),
                            paddingLeft: '4px',
                            paddingRight: '4px',
                            paddingTop: '2px',
                            paddingBottom: '2px',
                            borderRadius: '0.25rem',
                        },
                        'code::before': {
                            content: 'none',
                        },
                        'code::after': {
                            content: 'none',
                        },
                        details: {
                            backgroundColor: theme('colors.gray.100'),
                            paddingLeft: '4px',
                            paddingRight: '4px',
                            paddingTop: '2px',
                            paddingBottom: '2px',
                            borderRadius: '0.25rem',
                        },
                        hr: { borderColor: theme('colors.gray.200') },
                        'ol li::marker': {
                            fontWeight: '600',
                            color: theme('colors.gray.500'),
                        },
                        'ul li::marker': {
                            backgroundColor: theme('colors.gray.500'),
                        },
                        strong: { color: theme('colors.gray.600') },
                        blockquote: {
                            color: theme('colors.gray.900'),
                            borderLeftColor: theme('colors.gray.200'),
                        },
                    },
                },
                dark: {
                    css: {
                        color: theme('colors.gray.300'),
                        a: {
                            color: theme('colors.primary.500'),
                            '&:hover': {
                                color: `${theme('colors.primary.400')} !important`,
                            },
                            code: { color: theme('colors.primary.400') },
                        },
                        h1: {
                            fontWeight: '700',
                            letterSpacing: theme('letterSpacing.tight'),
                            color: theme('colors.gray.100'),
                        },
                        h2: {
                            fontWeight: '700',
                            letterSpacing: theme('letterSpacing.tight'),
                            color: theme('colors.gray.100'),
                        },
                        h3: {
                            fontWeight: '600',
                            color: theme('colors.gray.100'),
                        },
                        'h4,h5,h6': {
                            color: theme('colors.gray.100'),
                        },
                        pre: {
                            backgroundColor: theme('colors.gray.800'),
                        },
                        code: {
                            backgroundColor: theme('colors.gray.800'),
                        },
                        details: {
                            backgroundColor: theme('colors.gray.800'),
                        },
                        hr: { borderColor: theme('colors.gray.700') },
                        'ol li::marker': {
                            fontWeight: '600',
                            color: theme('colors.gray.400'),
                        },
                        'ul li::marker': {
                            backgroundColor: theme('colors.gray.400'),
                        },
                        strong: { color: theme('colors.gray.100') },
                        thead: {
                            th: {
                                color: theme('colors.gray.100'),
                            },
                        },
                        tbody: {
                            tr: {
                                borderBottomColor: theme('colors.gray.700'),
                            },
                        },
                        blockquote: {
                            color: theme('colors.gray.100'),
                            borderLeftColor: theme('colors.gray.700'),
                        },
                    },
                },
            }),
        },
    },
    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
