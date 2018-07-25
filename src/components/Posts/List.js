import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import ListItem from './ListItem';

const StyledList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
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
  return <StyledList>{matchingContent.map(({ node }) => <ListItem key={node.id} post={node} />)}</StyledList>;
};

export default List;
