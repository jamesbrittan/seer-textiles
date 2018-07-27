import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import theme from '../utils/theme';

const Article = styled.article`
  margin: 0 auto;
  max-width: ${theme.maxWidths.md};
  min-height: calc(100vh - 375px);
  h1 {
    margin-top: 0;
  }
  ul {
    margin-left: 0;
    li {
      list-style-type: none;
    }
  }
  .title-section {
    font-weight: bolder;
  }
`;

const PostPage = props => {
  const { data } = props;
  const { html } = data.markdownRemark;
  const { title, start, end, location, link } = data.markdownRemark.frontmatter;

  return (
    <Article className="narrow-screen-padding">
      <div className="title-section">
        <h1>{title}</h1>
        <ul>
          <li>
            {start} {end && `- ${end}`}
          </li>
          <li>{location}</li>
          <li>
            <a href={`http://${link}`} target="_blank" rel="noopener noreferrer">
              {link}
            </a>
          </li>
        </ul>
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />
      <Link to="/">{'<<'} Back </Link>
    </Article>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      excerpt
      html
      frontmatter {
        title
        link
        start
        end
        location
      }
    }
  }
`;

export default PostPage;
