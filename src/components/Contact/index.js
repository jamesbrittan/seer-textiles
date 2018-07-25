import React, { Fragment } from 'react';
import styled from 'styled-components';
import email from '../../images/svg/email.svg';
import mail from '../../images/svg/mail.svg';
import telephone from '../../images/svg/telephone.svg';
import theme from '../../utils/theme';

const icons = {
  email,
  mail,
  telephone,
};

const details = {
  email: '<a href="ianrees@seertextiles.com">ianrees@seertextiles.com</a>',
  telephone: '<span>+44 (0) 7770 608922</span>',
  mail: '<address>Highbeech Lodge, Newport Road<br/> Chepstow, Monmouthshire <br/>NP16 5BB</address>',
};

const StyledContact = styled.div`
  background: ${theme.colors.lightBlue};
  width: 100%;
  img {
    width: 96px;
    height: 96px;
  }
  padding: 3rem 0;
`;

const InnerContact = styled.div`
  margin: 0 auto;
  max-width: ${theme.maxWidth};
  display: flex;
  justify-content: space-between;
  /* align-items: flex-end; */
`;

const StyledBlock = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: center;
  /* max-width: 300px; */
  a,
  span,
  address {
    color: white;
    text-align: center;
  }
  address {
    margin: 0;
    font-style: normal;
  }
  a {
    text-shadow: none;
    background-image: none;
    color: white;
  }
`;

const Block = ({ icon }) => (
  <StyledBlock>
    <img src={icons[icon]} alt={icon} />
    <div dangerouslySetInnerHTML={{ __html: details[icon] }} />
  </StyledBlock>
);

const Contact = () => (
  <StyledContact>
    <InnerContact>
      <Block icon="email" />
      <Block icon="mail" />
      <Block icon="telephone" />
    </InnerContact>
  </StyledContact>
);

export default Contact;
