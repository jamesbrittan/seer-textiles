import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Typography from 'typography';

import Header from '../components/Header';
import './index.css';

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

// // Or insert styles directly into the <head> (works well for client-only
// // JS web apps.
// typography.injectStyles();

const Layout = ({ children, data, location }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[{ name: 'description', content: 'Sample' }, { name: 'keywords', content: 'sample, something' }]}
    />
    <Header data={data} location={location} />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;
// TODO - don't load needlessly large background image
export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
    background: imageSharp(id: { regex: "/bg.jpeg/" }) {
      sizes(maxWidth: 1600) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
