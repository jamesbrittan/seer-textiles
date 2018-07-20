import React from 'react';
import Link from 'gatsby-link';

const IndexPage = ({ data }) => (
  <div>
    {data.allMarkdownRemark.edges.map(({ node }) => <PostListing post={node} />)}
    <Link to="/page-2/">Go to page 2</Link>
  </div>
);

const PostListing = () => <div>hello</div>;

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
          frontmatter {
            title
          }
          html
        }
      }
    }
  }
`;
