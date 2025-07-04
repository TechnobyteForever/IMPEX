/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                // 'Wall': 'url("./assets/Wall.jpg")'
            }
        },
        fontFamily: {
            'roboto': ['Roboto', 'sans-serif']
        },
        screens: {
            'navlim': '906px',
            'aboutUs': '980px',
            'footerlim': '1080px',
            'countlim': '1300px',
            'heading': '390px',
            'aboutUs2': '440px',
            'aboutUs3': '620px',
        },
    },
    plugins: [],
}