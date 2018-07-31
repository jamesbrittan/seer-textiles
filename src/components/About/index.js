import React from 'react';
import styled from 'styled-components';
import theme from '../../utils/theme';
import scroll from '../../images/svg/scroll.svg';

const StyledAbout = styled.div`
  background: ${theme.colors.whiteTrans};
  padding: 1rem 0;
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 20vh;
  width: 100%;
  p {
    text-align: center;
    margin-bottom: 0;
  }
  .inner {
    max-width: ${theme.maxWidths.sm};
    margin: 0 auto;
  }

  img {
    height: 36px;
    width: 36px;
    margin: 18px 0 0 0;
    cursor: pointer;
  }
`;

const scrollDown = () => {
  console.log('scroll');
  const target = document.getElementById('exhibitions-list');
  target.scrollIntoView({ block: 'start', behavior: 'smooth' });
};

const About = () => (
  <StyledAbout>
    <div className="inner narrow-screen-padding">
      <p>
        Ian Rees founded Seer Textiles in 1997 and has over 20 years experience as a textiles agent in the UK. <br />
        We supply the domestic and commercial markets in upholstery, curtain & accessory fabrics.
      </p>
      {/* <span onClick={scrollDown} onKeyDown={scrollDown} role="presentation">
        vvvv
      </span> */}
    </div>
    <img onClick={scrollDown} onKeyDown={scrollDown} role="presentation" src={scroll} alt="scroll down" />
  </StyledAbout>
);

export default About;
