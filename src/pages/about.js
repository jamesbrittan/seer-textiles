import React, { Component } from 'react';
import styled from 'styled-components';
import theme from '../utils/theme';

const Article = styled.article`
  margin: 0 auto;
  max-width: ${theme.maxWidths.md};
  min-height: calc(100vh - 375px);
  /* padding: 1.45rem; */
  h2 {
    margin-top: 0;
  }
`;
export default class About extends Component {
  render() {
    return (
      <Article className="narrow-screen-padding">
        <h1>About Us</h1>
        <p>
          Beard roof party cardigan locavore you probably haven't heard of them squid artisan edison bulb whatever
          normcore jianbing succulents. Bitters kickstarter before they sold out 8-bit, af blue bottle DIY paleo iceland
          microdosing brooklyn vinyl fingerstache. Gentrify adaptogen raw denim heirloom. XOXO distillery try-hard, deep
          v gluten-free fanny pack adaptogen everyday carry VHS trust fund green juice twee cold-pressed jianbing.
          Readymade migas pitchfork pinterest cliche, keffiyeh asymmetrical hoodie lumbersexual subway tile man bun four
          loko drinking vinegar tofu. YOLO pinterest try-hard pok pok echo park tacos.
        </p>
      </Article>
    );
  }
}
