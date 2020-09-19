import { createGlobalStyle } from 'styled-components';
import theme from './theme';
import media from './media';
// import mixins from './mixins';
import FontFaces from './fonts';
const { colors, fontSizes, fonts, lineHeights, letterSpacings } = theme;

const GlobalStyle = createGlobalStyle`
  ${FontFaces};

  
  html {
    box-sizing: border-box;
    width: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  * {
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    background-color: ${colors.white};
    color: ${colors.dark};
    font-family: ${fonts.Spartan};
    overflow-x: hidden;
  }

  h1 {
    font-size: ${fontSizes.h1};
    line-height: ${lineHeights.h1};
    letter-spacing: ${letterSpacings.h1};
    font-weight: 300;
    margin: 0;
  }

  h2 {
    font-size: ${fontSizes.h2};
    line-height: ${lineHeights.h2};
    letter-spacing: ${letterSpacings.h2};
    font-weight: 700;
    margin: 0;
  }

  h3 {
    font-size: ${fontSizes.h3};
    line-height: ${lineHeights.h3};
    letter-spacing: ${letterSpacings.h3};
    font-weight: 700;
  }

  h4 {
    font-size: ${fontSizes.h4};
    line-height: ${lineHeights.h4};
    letter-spacing: ${letterSpacings.h4};
    font-weight: 600;
  }

  .h4 {
    font-size: ${fontSizes.h4};
    line-height: ${lineHeights.h4};
    letter-spacing: ${letterSpacings.h4};
    font-weight: 600;
  }

  p {
    font-size: ${fontSizes.body};
    line-height: ${lineHeights.body};
    letter-spacing: ${letterSpacings.body};
    font-weight: 400;
  }

  .small {
    font-size: ${fontSizes.small};
    line-height: ${lineHeights.small};
    letter-spacing: ${letterSpacings.small};
    font-weight: 400;
  }

  .text-white {
    color: ${colors.white};
  }

  a.btn {
    text-transform: uppercase;
    font-size: ${fontSizes.btn};
    line-height: ${lineHeights.btn};
    letter-spacing: ${letterSpacings.btn};
    padding: 1.4375rem 3.3125rem;
    cursor: pointer;
    display: inline-block;
    text-decoration: none;

    &:visited {
        text-decoration: none;
    }
  }

  .btnLg {
    ${media.desktop`
      margin-top: 2.625rem;
    `}
  }

  .btnDark {
    color: white;
    background-color: transparent;
    border: 1px solid white;
    transition: ${theme.transition} background-color, ${theme.transition} white, ${theme.transition} border-color;

    &:hover {
      color: ${colors.codGray};
      background-color: white;
    }
  }

  .btnLight {
    background-color: ${colors.codGray};
    color: white;
    border: 1px solid transparent;
    transition: ${theme.transition} background-color, ${theme.transition} white, ${theme.transition} border-color;

    &:hover {
      color: ${colors.codGray};
      background-color: transparent;
      border-color: ${colors.codGray};
    }
  }
`;

export default GlobalStyle;
