import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import logo from '../../images/logo.svg';

const HeaderWrapper = styled.div`
  /* background: #524763; */
  margin-bottom: 1.45rem;
  h1 {
    img {
      height: 100px;
    }
  }
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  /* max-width: 960px; */
  padding: 1.5rem 1rem;
  border: 1px solid red;
`;

const Header = () => (
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
  </HeaderWrapper>
);

export default Header;
