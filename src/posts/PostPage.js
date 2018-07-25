import React, { Component } from 'react';
import Link from 'gatsby-link';

export default class PostPage extends Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        <Link to="/">{'<<'} Back </Link>
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
      </div>
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
