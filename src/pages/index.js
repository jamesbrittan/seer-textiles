import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
// import ListItem from '../components/Posts/ListItem';
import List from '../components/Posts/List';
import Contact from '../components/Contact';

const IndexPage = ({ data }) => (
  <div>
    <List type="exhibition" content={data.allMarkdownRemark.edges} />
    <Contact />
    <List type="mill" content={data.allMarkdownRemark.edges} />
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
