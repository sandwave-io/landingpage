module.exports = {
    theme: {
        extend: {
            height: {
                half: '50vh'
            },
            minHeight: {
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
               'realhosting':{
                    50:  "rgb(246,245,255)",
                    100: "rgb(237,235,254)",
                    200: "rgb(220,215,254)",
                    300: "rgb(202,191,253)",
                    400: "rgb(172,148,250)",
                    500: "rgb(144, 97,249)",
                    600: "rgb(126, 58,242)",
                    700: "rgb(108, 43,217)",
                    800: "rgb( 85, 33,181)",
                    900: "rgb( 74, 29,150)",
               },
               'versio': {
                    50:  "rgb(237,250,250)",
                    100: "rgb(213,245,246)",
                    200: "rgb(175,236,239)",
                    300: "rgb(126,220,226)",
                    400: "rgb( 22,189,202)",
                    500: "rgb(  6,148,162)",
                    600: "rgb(  4,116,129)",
                    700: "rgb(  3,102,114)",
                    800: "rgb(  5, 80, 92)",
                    900: "rgb(  1, 68, 81)",    
               },
               'sandwave':{
                    50:  'rgb(235,245,255)',
                    100: 'rgb(225,239,254)',
                    200: 'rgb(195,221,253)',
                    300: 'rgb(164,202,254)',
                    400: 'rgb(118,169,250)',
                    500: 'rgb( 63,131,248)',
                    600: 'rgb( 28,100,242)',
                    700: 'rgb( 26, 86,219)',
                    800: 'rgb( 30, 66,159)',
                    900: 'rgb( 35, 56,118)',
               },
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
