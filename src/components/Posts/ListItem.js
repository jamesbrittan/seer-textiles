import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import styled from 'styled-components';

const StyledDiv = styled.div`
  padding: 20px 30px;
  max-width: 300px;
`;

const ListItem = ({ post }) => (
  <StyledDiv>
    <Link to={post.fields.slug}>
      <img srcSet={post.frontmatter.cover_image.childImageSharp.sizes.srcSet} />
    </Link>

    {/* <div
      dangerouslySetInnerHTML={{
        __html: post.html,
      }}
    /> */}
  </StyledDiv>
);

export default ListItem;
