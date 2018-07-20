import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Img from 'gatsby-image';

import logo from '../../images/logo.svg';

const HeaderWrapper = styled.div`
  /* background: #524763; */
  margin-bottom: 1.45rem;
  h1 {
    img {
      height: 100px;
    }
  }
  overflow: hidden;
  position: relative;
  height: 70vh;
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  /* max-width: 960px; */
  padding: 1.5rem 1rem;
  z-index: 2;
  position: relative;
`;

const Header = ({ data }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          <img src={logo} alt="Seer Textiles Logo" />
        </Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
    <Img
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
      }}
      sizes={data.background.sizes}
    />
  </HeaderWrapper>
);

export default Header;
