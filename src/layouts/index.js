import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Typography from 'typography';
import Header from '../components/Header';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import './index.css';

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
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
    <Footer />
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
