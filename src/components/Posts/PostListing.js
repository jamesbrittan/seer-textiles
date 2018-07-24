import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import styled from 'styled-components';

const Article = styled.article`
  .gatsby-image-outer-wrapper {
    max-width: 425px;
  }
`;

// const StyledLink = styled(Link)`
//   transition: all 0.6s ease;
// `;

const PostListing = ({ post }) => (
  <Article>
    <h3>
      <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
    </h3>
    <Img sizes={post.frontmatter.cover_image.childImageSharp.sizes} />
    <div
      dangerouslySetInnerHTML={{
        __html: post.html,
      }}
    />
  </Article>
);

export default PostListing;
