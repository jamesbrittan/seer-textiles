import Typography from 'typography';

import fairyGatesTheme from 'typography-theme-fairy-gates';

fairyGatesTheme.overrideThemeStyles = () => ({
  'h1,h2,h3,p': {
    color: '#d81dc9',
  },
});

const typography = new Typography(fairyGatesTheme);

// const typography = new Typography(grandViewTheme);
// const typography = new Typography({
//   baseFontSize: '18px',
//   baseLineHeight: 1.45,
//   googleFonts: [
//     {
//       name: 'Arvo',
//       styles: ['700'],
//     },
//     {
//       name: 'Lato',
//       styles: ['400', '400i', '700', '700i'],
//     },
//   ],
//   headerFontFamily: ['Arvo', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
//   bodyFontFamily: ['Lato', 'Helvetica Neue', 'sans-serif'],
//   // See below for the full list of options.
// });

export default typography;
