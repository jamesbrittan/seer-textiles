import React from 'react';
import styled from 'styled-components';
import ListItem from './ListItem';
import theme from '../../utils/theme';

const OuterList = styled.div`
  width: 100%;
`;

const StyledList = styled.div`
  max-width: ${theme.maxWidth};
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 3rem 0;
  a {
    text-shadow: none;
    background-image: none;
  }
  img {
    margin: 0;
  }
`;

const List = ({ content, type }) => {
  const matchingContent = content.filter(({ node }) => node.frontmatter.tags === type);
  return (
    <OuterList>
      <StyledList>{matchingContent.map(({ node }) => <ListItem key={node.id} post={node} />)}</StyledList>
    </OuterList>
  );
};

export default List;
