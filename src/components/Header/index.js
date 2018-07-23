import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Img from 'gatsby-image';

import logo from '../../images/logo.svg';
import logoLight from '../../images/logo-light.svg';

const HeaderWrapper = styled.div`
  background: ${({ isHome }) =>
    isHome ? '-moz-linear-gradient(top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 20%, rgba(58,71,78,0) 100%)' : 'none'};
  background: ${({ isHome }) =>
    isHome ? '-webkit-linear-gradient(top, rgba(0,0,0,1) 0%,rgba(0,0,0,0.8) 20%,rgba(58,71,78,0) 100%)' : 'none'};
  background: ${({ isHome }) =>
    isHome ? 'linear-gradient(to bottom, rgba(0,0,0,1) 0%,rgba(0,0,0,0.8) 20%,rgba(58,71,78,0) 100%)' : 'none'};
  filter: ${({ isHome }) =>
    isHome ? 'linear-gradient(to bottom, rgba(0,0,0,1) 0%,rgba(0,0,0,0.8) 20%,rgba(58,71,78,0) 100%)' : 'none'};

  margin-bottom: 1.45rem;
  overflow: hidden;
  position: relative;
  height: ${({ isHome }) => (isHome ? '70vh' : '20vh')};
  h1 {
    img {
      height: 80px;
    }
  }
  .bg-img {
    /* display: ${({ isHome }) => (isHome ? 'flex' : 'none')}; */
    opacity: ${({ isHome }) => (isHome ? '0.85' : '0')};
    transition: all 0.5s ease;
  }
  svg {
    fill: red;
  }
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
`;

export default class Header extends Component {
  componentDidUpdate = (prevProps, prevState) => {
    const { location } = this.props;
    if (location.pathname !== prevProps.location.pathname) {
      if (this.props.location.pathname === '/') {
        this.wrapper.animate([{ height: '20vh' }, { height: '70vh' }], {
          duration: 300,
          fill: 'forwards',
          easing: 'cubic-bezier(0.86, 0, 0.07, 1)',
          iterations: 1,
        });
      } else {
        this.wrapper.animate([{ height: '70vh' }, { height: '20vh' }], {
          duration: 300,
          fill: 'forwards',
          easing: 'cubic-bezier(0.86, 0, 0.07, 1)',
          iterations: 1,
        });
      }
    }
  };

  render() {
    const { data, location } = this.props;
    return (
      <HeaderWrapper isHome={location.pathname === '/'} ref={wrapper => (this.wrapper = ReactDOM.findDOMNode(wrapper))}>
        <HeaderContainer>
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              {location.pathname === '/' && <img src={logoLight} alt="Seers Logo" />}
              {location.pathname !== '/' && <img src={logo} alt="Seers Logo" />}
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
          className="bg-img"
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
  }
}
