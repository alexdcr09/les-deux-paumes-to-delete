module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors : {
        primary: '#F8C045',
        secondary: '#24836E',
        third : '#DF4D2A',
        blue : '#4D00FF',
        anime : '#03658B',
      },
      backgroundImage: {
        'design': "url('../assets/bg.png')",
    },
    variants: {
      fill: ['hover', 'focus'], // this line does the trick
      borderRadius: ['hover', 'focus'],
    },
    },
    fontFamily:{
      body: ['Quicksand']
    },
    
  },
  variants: {
    extend: {
      borderRadius: ['hover', 'focus'],
    },
  },
  plugins: [],
}
