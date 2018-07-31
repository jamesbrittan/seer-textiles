import React from 'react';
import List from '../components/Posts/List';
import Contact from '../components/Contact';
import About from '../components/About';

const IndexPage = ({ data }) => (
  <div>
    {/* <About /> */}
    <List type="exhibition" title="Exhibitions" content={data.allMarkdownRemark.edges} />
    <Contact />
    <List type="mill" title="Mills" content={data.allMarkdownRemark.edges} />
  </div>
);
export default IndexPage;

export const query = graphql`
  query SiteMeta {
    site {
      siteMetadata {
        title
        desc
      }
    }
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            link
            tags
            cover_image {
              publicURL
              childImageSharp {
                sizes(maxWidth: 300) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
          fields {
            slug
          }
          html
          excerpt
        }
      }
    }
  }
`;
