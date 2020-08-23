import { createGlobalStyle } from 'styled-components';
import theme from './theme';
import media from './media';
import mixins from './mixins';
import FontFaces from './fonts';
const { colors, fontSizes, fonts } = theme;

const GlobalStyle = createGlobalStyle`
  ${FontFaces};

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    background-color: ${colors.white};
    color: ${colors.dark};
    line-height: 1.3;
    font-family: ${fonts.Spartan};
  }

  h1 {
      font-family: ${fonts.Spartan};
      font-size: ${fontSizes.display4};
  }

  p {
    font-family: ${fonts.Spartan};
    font-size: ${fontSizes.title};
}




`;

export default GlobalStyle;
