import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import theme from '../utils/theme';

const Article = styled.article`
  margin: 0 auto;
  max-width: ${theme.maxWidths.md};
  min-height: calc(100vh - 406px);
  /* padding: 1.45rem; */
  h2 {
    margin-top: 0;
  }
`;

export default class PostPage extends Component {
  render() {
    const { data } = this.props;
    return (
      <Article className="narrow-screen-padding">
        <h2>{data.markdownRemark.frontmatter.title}</h2>
        <h4>
          <a href={`http://${data.markdownRemark.frontmatter.link}`} target="_blank" rel="noopener noreferrer">
            {data.markdownRemark.frontmatter.link}
          </a>
        </h4>
        <div
          dangerouslySetInnerHTML={{
            __html: data.markdownRemark.html,
          }}
        />
        <Link to="/">{'<<'} Back </Link>
      </Article>
    );
  }
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      excerpt
      html
      frontmatter {
        title
        link
      }
    }
  }
`;
