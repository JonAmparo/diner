import { css } from 'styled-components';

const sizes = {
  desktop: 1200,
  tabletEnd: 74.9375, //1199 px / 16
  tablet: 768,
  mobile: 767,
};

export const media = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label] / 16;

  accumulator[label] = (...args) => {
    if (label === 'desktop') {
      return css`
        @media (min-width: ${emSize}em) {
          ${css(...args)};
        }
      `;
    } else if (label === 'tablet') {
      return css`
        @media (min-width: ${emSize}em) and (max-width: ${sizes.tabletEnd}em) {
          ${css(...args)};
        }
      `;
    } else if (label === 'mobile') {
      return css`
        @media (max-width: ${emSize}em) {
          ${css(...args)};
        }
      `;
    }
  };
  return accumulator;
}, {});

export default media;
