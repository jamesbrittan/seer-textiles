import React from 'react';
import styled from 'styled-components';
import theme from '../../utils/theme';
import send from '../../images/svg/send.svg';
import mail from '../../images/svg/mail.svg';
import telephone from '../../images/svg/telephone.svg';

const InnerFooter = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;

  div {
    text-align: center;
    padding: 4px 0;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  img {
    height: 24px;
    width: 24px;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 6px;
  }
`;

const OuterFooter = styled.div`
  width: 100%;
  background-color: ${theme.colors.grey};
  color: white;
  min-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px 0;
`;

const Footer = () => (
  <OuterFooter>
    <InnerFooter>
      <div>
        <img src={telephone} alt="phone number" />
        <small>+44 (0) 7770 608922 </small>
      </div>
      <div>
        <img src={send} alt="email" />
        <small>
          <a className="no-shadow" href="mailto:ianrees@seertextiles.com">
            ianrees@seertextiles.com
          </a>
        </small>
      </div>
    </InnerFooter>
  </OuterFooter>
);

export default Footer;
