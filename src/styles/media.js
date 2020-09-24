import { css } from 'styled-components';

const sizes = {
  desktop: 1200,
  tabletOnly: 1199,
  tabletMax: 1199,
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
    } else if (label === 'tabletOnly') {
      const tabletMin = sizes.tablet / 16;
      return css`
        @media (min-width: ${tabletMin}em) and (max-width: ${emSize}em) {
          ${css(...args)};
        }
      `;
    } else if (label === 'tabletMax') {
      return css`
        @media (max-width: ${emSize}em) {
          ${css(...args)};
        }
      `;
    } else if (label === 'tablet') {
      return css`
        @media (min-width: ${emSize}em) {
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
