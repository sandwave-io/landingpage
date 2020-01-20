module.exports = {
    theme: {
        extend: {
            height: {
                half: '50vh'
            },
            fontFamily: {
                'display' : ['Source Sans Pro']
            },
            screens: {
               'sm': '640px',
               'md': '768px',
               'lg': '1024px',
               'xl': '1024px'
           },
           colors: {
               'white': '#ffffff',
               'gray-lightest': '#f9f8fa',
               'gray-lighter': '#e5e5e6',
               'gray-light': '#d1d1d3',
               'gray': '#bebec0',
               'gray-dark': '#979698',
               'gray-darker': '#6f6f70',
               'gray-darkest': '#48484a',
               'black': '#212122',

               'brand': '#2962FF',

               'cta-light': '#ffe0cd',
               'cta': '#fe813d',
               'cta-dark': '#784023',

               'info-light': '#dbf0ff',
               'info': '#45c3ff',
               'info-dark': '#2d5d77',

               'warning-light': '#feefd7',
               'warning': '#edc060',
               'warning-dark': '#705c32',

               'success-light': '#dbf4dc',
               'success': '#60d175',
               'success-dark': '#34633b',

               'danger-light': '#ffd3d7',
               'danger': '#ec3c69',
               'danger-dark': '#712635',
           }
       }
    },
    variants: {},
    plugins: []
}
