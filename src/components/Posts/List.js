import React from 'react';
import styled from 'styled-components';
import ListItem from './ListItem';
import theme from '../../utils/theme';

const OuterList = styled.div`
  width: 100%;
  padding: 60px 0;
`;

const StyledList = styled.div`
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  /* padding: 3rem 0; */
  img {
    margin: 0;
  }
`;

const Title = styled.h2`
  /* align-self: center;
  width: 100%;
  margin: 0 auto; */
  text-align: center;
  color: ${theme.colors.darkBlue};
  margin-top: 0;
  /* font-size: 200%; */
`;

const List = ({ content, type, title }) => {
  const matchingContent = content.filter(({ node }) => node.frontmatter.tags === type);
  return (
    <OuterList>
      <Title>{title}</Title>
      <StyledList>{matchingContent.map(({ node }) => <ListItem key={node.id} post={node} />)}</StyledList>
    </OuterList>
  );
};

export default List;
