import Typography from 'typography';

import fairyGatesTheme from 'typography-theme-fairy-gates';

import theme from './theme';

fairyGatesTheme.overrideThemeStyles = () => ({
  'h1,h2,h3,p': {
    color: `${theme.colors.grey}`,
  },
  a: {
    color: `${theme.colors.darkBlue}`,
    backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 1px, ${theme.colors.grey} 1px, ${
      theme.colors.grey
    } 2px, rgba(0, 0, 0, 0) 2px);`,
  },
  'a:hover': {
    color: `${theme.colors.lightBlue}`,
    backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 1px, ${theme.colors.lightBlue} 1px, ${
      theme.colors.lightBlue
    } 2px, rgba(0, 0, 0, 0) 2px);`,
    transition: 'all 0.2s ease',
  },
});

const typography = new Typography(fairyGatesTheme);

export default typography;
