import { css } from 'styled-components';

import SpartanBlack from '../fonts/Spartan/Spartan-Black.ttf';
import SpartanBold from '../fonts/Spartan/Spartan-Bold.ttf';
import SpartanExtraBold from '../fonts/Spartan/Spartan-ExtraBold.ttf';
import SpartanExtraLight from '../fonts/Spartan/Spartan-ExtraLight.ttf';
import SpartanLight from '../fonts/Spartan/Spartan-Light.ttf';
import SpartanMedium from '../fonts/Spartan/Spartan-Medium.ttf';
import SpartanRegular from '../fonts/Spartan/Spartan-Regular.ttf';
import SpartanSemiBold from '../fonts/Spartan/Spartan-SemiBold.ttf';
import SpartanThin from '../fonts/Spartan/Spartan-Thin.ttf';

const FontFaces = css`
  @font-face {
    font-family: 'Spartan';
    src: url(${SpartanBlack}) format('truetype');
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: 'Spartan';
    src: url(${SpartanBold}) format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Spartan';
    src: url(${SpartanExtraBold}) format('truetype');
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: 'Spartan';
    src: url(${SpartanExtraLight}) format('truetype');
    font-weight: 200;
    font-style: normal;
  }

  @font-face {
    font-family: 'Spartan';
    src: url(${SpartanLight}) format('truetype');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Spartan';
    src: url(${SpartanMedium}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Spartan';
    src: url(${SpartanRegular}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Spartan';
    src: url(${SpartanSemiBold}) format('truetype');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Spartan';
    src: url(${SpartanThin}) format('truetype');
    font-weight: 100;
    font-style: normal;
  }
`;

export default FontFaces;
