import { createGlobalStyle } from 'styled-components';
import { theme, mixins, media } from 'styles';
// import theme from './theme';
// import media from './media';
// import mixins from './mixins';
import FontFaces from './fonts';
const { colors, fontSizes, fonts, lineHeights, letterSpacings } = theme;

const GlobalStyle = createGlobalStyle`
  ${FontFaces};

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    background-color: ${colors.white};
    color: ${colors.dark};
    font-family: ${fonts.Spartan};
  }

  h1 {
    font-size: ${fontSizes.h1};
    line-height: ${lineHeights.h1};
    letter-spacing: ${letterSpacings.h1};
    font-weight: 300;
  }

  h2 {
    font-size: ${fontSizes.h2};
    line-height: ${lineHeights.h2};
    letter-spacing: ${letterSpacings.h2};
    font-weight: 700;
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

  .lead {
    font-size: ${fontSizes.lead};
    line-height: ${lineHeights.lead};
    letter-spacing: ${letterSpacings.lead};
    font-weight: 400;
  }

  p {
    font-size: ${fontSizes.body};
    line-height: ${lineHeights.body};
    letter-spacing: ${letterSpacings.body};
    font-weight: 400;
  }




`;

export default GlobalStyle;
