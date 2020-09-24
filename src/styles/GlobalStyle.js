import { createGlobalStyle } from 'styled-components';
import theme from './theme';
import media from './media';
import mixins from './mixins';
import FontFaces from './fonts';
const {
  colors,
  fontSizes,
  fonts,
  lineHeights,
  letterSpacings,
  fontWeight,
} = theme;

const GlobalStyle = createGlobalStyle`
  ${FontFaces};

  
  html {
    box-sizing: border-box;
    width: 100%;
    font-size: 62.5%;
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
    font-weight: 300;
    color: ${colors.mirage};

    ${media.desktop`
      font-size: ${fontSizes.h1};
      line-height: ${lineHeights.h1};
      letter-spacing: ${letterSpacings.h1};
    `}

    ${media.tabletOnly`
      font-size: 4.8rem;
      line-height: 1.333;
      letter-spacing: -0.6px;
    `}

    ${media.mobile`
      font-size: 3.2rem;
      line-height: 1.25;
      letter-spacing: -0.4px;
    `}
  }

  h2 {
    font-weight: 700;
    color: ${colors.ebonyClay};

    ${media.tablet`
      font-size: ${fontSizes.h2};
      line-height: ${lineHeights.h2};
      letter-spacing: ${letterSpacings.h2};
    `}

    ${media.mobile`
      font-size: 3.2rem;
      line-height: 1.25;
      letter-spacing: -0.4px;
    `}
  }

  h3 {
    font-weight: 700;
    color: ${colors.white};
    font-size: ${fontSizes.h3};
    line-height: ${lineHeights.h3};
    letter-spacing: ${letterSpacings.h3};
  }

  h4 {
    font-weight: 600;
    color: ${colors.darkGray};
    font-size: ${fontSizes.h4};
    line-height: ${lineHeights.h4};
    letter-spacing: ${letterSpacings.h4};
  }

  .h4 {
    font-weight: 600;
    color: ${colors.darkGray};
    font-size: ${fontSizes.h4};
    line-height: ${lineHeights.h4};
    letter-spacing: ${letterSpacings.h4};
  }

  p {
    font-weight: 400;
    line-height: ${lineHeights.body};

    ${media.tablet`
      font-size: ${fontSizes.body};
      letter-spacing: ${letterSpacings.body};
    `}

    ${media.mobile`
      font-size: 1.5rem;
      letter-spacing: -0.19px;
    `}
  }

  .small {
    font-weight: 400;
    color: ${colors.white};
    font-size: ${fontSizes.small};
    line-height: ${lineHeights.small};
    letter-spacing: ${letterSpacings.small};
  }

  .text-footer {
    font-weight: 400;
    color: ${colors.white};
    font-size: ${fontSizes.footer};
    line-height: ${lineHeights.footer};
    letter-spacing: ${letterSpacings.footer};
    text-transform: uppercase;

  }

  .text-white {
    color: ${colors.white};
  }

  .sr-only {
    padding: 0;
    width: 1px;
    height: 1px;
    position: absolute;
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(0px 0px 99.9% 99.9%);
    overflow: hidden;
    border: 0;
  }

  .btn {
    text-transform: uppercase;
    font-size: ${fontSizes.btn};
    line-height: ${lineHeights.btn};
    letter-spacing: ${letterSpacings.btn};
    padding: 2.3rem 5.3rem;
    cursor: pointer;
    display: inline-block;
    text-decoration: none;

    &:visited {
        text-decoration: none;
    }
  }

  .btnLg {
    ${media.desktop`
      margin-top: 4.2rem;
    `}

    ${media.tabletOnly`
      margin-top: 2.4rem;
    `}

    ${media.mobile`
      margin-top: 3.2rem;
    `}
  }

  .btnDark {
    color: ${colors.white};
    background-color: transparent;
    border: 1px solid ${colors.white};
    transition: ${theme.transition} background-color, ${
  theme.transition
} white, ${theme.transition} border-color;

    &:hover {
      color: ${colors.codGray};
      background-color: ${colors.white};
    }
  }

  .btnLight {
    background-color: ${colors.codGray};
    color: ${colors.white};
    border: 1px solid transparent;
    transition: ${theme.transition} background-color, ${
  theme.transition
} white, ${theme.transition} border-color;

    &:hover {
      color: ${colors.codGray};
      background-color: transparent;
      border-color: ${colors.codGray};
    }
  }

  .font-light {
    font-weight: ${fontWeight.light};
  }

  .font-regular {
    font-weight: ${fontWeight.regular};
  }

  .font-semiBold {
    font-weight: ${fontWeight.semiBold};
  }

  .font-bold {
    font-weight: ${fontWeight.bold};
  }

  .errorMsg {
    line-height: 1.2;
    margin-top: 1rem;
    font-size: 1rem;
    padding-left: 1.6rem;
    letter-spacing: -0.12px;
    color: ${colors.red};
    display: none;

    &.corner {
      padding-left: 0;
      margin-top: 0.1rem;
    }
  }
  
  .errorMsg.show {
    display: block;
  }

  .form {
    text-align: left;

    ${media.mobile`
      padding: 3.2rem;
    `}

    ${media.tablet`
      padding: 4.8rem;
    `}

    &.form {
      ${media.mobile`
        max-width: 40rem;
        margin: 0 auto;
      `}

      ${media.tablet`
        width: 54rem; 
      `}

      ${media.tabletOnly`
        margin: 0 auto;
      `}
    }

    .t-form {
      font-size: ${fontSizes.h3};
      line-height: ${lineHeights.h3};
      letter-spacing: ${letterSpacings.h3};
      color: ${colors.codGray};
    }

    .input-field {
      &.text-field {
        margin-bottom: 3.2rem;
      }
    }

    .datetime-field {
      margin-bottom: 3.2rem;
      display: flex;

      ${media.mobile`
        flex-direction: column;
      `}
        
      ${media.tablet`
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      `}
    }

    .number-picker {
      ${mixins.flexBetween};
        padding-bottom: 1.6rem;
        border-bottom: 1px solid ${colors.codGray};
        margin-bottom: 3.2rem;

      ${media.mobile`
        padding-left: 1rem;
        padding-right: 1rem;
      `}
        
      ${media.tablet`
        padding-left: 2.2rem;
        padding-right: 2.2rem;
      `}
    }

    .datetime-field-name {
      ${media.mobile`
        margin-bottom: 0.8rem;
      `}

      &.error {
        color: ${colors.red};
      }
    }

    .input-containers {
      display: flex;
      justify-content: space-between;

      ${media.tablet`
        width: 28.9rem;
      `}
    }

    .input-box {
      width: 100%;
      caret-color:  ${colors.beaver};
      font-weight: ${fontWeight.light};
      font-family: ${fonts.Spartan};
      opacity: 0.5;
      border: none;
      font-size: ${fontSizes.h3};
      line-height: ${lineHeights.h3};
      letter-spacing: ${letterSpacings.h3};
      color: ${colors.codGray};
      padding-left: 1.6rem;
      padding-bottom: 1.6rem;
      border-bottom: 1px solid #8E8E8E;
      transition: ${theme.transition} border-color, ${
  theme.transition
}  opacity;
      cursor: pointer;
      &:focus {
        opacity: 1;
        border-bottom: 1px solid ${colors.codGray};
        outline: none;
        &::placeholder {
          opacity: 1;
        }
      }
      &::placeholder {
        font-family: 'Spartan', sans-serif;
        color: ${colors.codGray};
        opacity: 0.5;
        font-size: ${fontSizes.h3};
        line-height: ${lineHeights.h3};
        letter-spacing: ${letterSpacings.h3};
        transition: ${theme.transition} opacity;
      }
    
      &.small {
        ${media.mobile`
          width: 7.3rem;
        `}

        ${media.tablet`
          width: 8rem;
        `}
      }

      &.large {
        ${media.mobile`
          width: 8.8rem;
        `}

        ${media.tablet`
          width: 9.7rem;
        `}
      }
    
      &.error {
        opacity: 1;
        border-bottom: 1px solid ${colors.red};
        &::placeholder {
          color: ${colors.red};
        }
      }
    }

    .dropdown-container {
      ${media.mobile`
        width: 8.8rem;
      `}

      ${media.tablet`
        width: 9.7rem;
      `}
    }

    .dropdown {
      opacity: 0.5;
      padding-left: 1.6rem;
      padding-bottom: 1.6rem;
      border-bottom: 1px solid ${colors.codGray};
      position: relative;
      cursor: pointer;
      display: flex;
      flex-direction: row;
      align-items: center;
      transition: ${theme.transition} opacity;
      &:hover {
        opacity: 1;
      }
    
      .selected {
        font-weight: ${fontWeight.light};
        font-size: ${fontSizes.h3};
        line-height: ${lineHeights.h3};
        letter-spacing: ${letterSpacings.h3};
        color: ${colors.codGray};
      }
      .arrow {
        transition: ${theme.transition} transform;

        ${media.mobile`
          margin-left: 0.6rem;
        `}
        
        ${media.tablet`
          margin-left: 1.5rem; 
        `}
        
        &.open {
          transform: scaleY(-1) translateY(0.4rem);
        }
      }
    
      &.items {
        display: none;
        position: absolute;
        background-color: ${colors.white};
        padding: 1.6rem;
        box-shadow: 0 1.5rem 2.5rem rgba(56, 66, 85, 0.25);
        transform: translate(-1.6rem, 9rem);
        &.open {
          display: block;
        }
      }
    
      .item {
        display: flex;
        align-items: center;
    
        &:not(:last-child) {
          margin-bottom: 1.6rem;
        }
        .checkmark {
          margin-right: 1.557rem;
          opacity: 0;

          &.checked {
            opacity: 1;
          }
        }
    
      }
    }

    .number-picker-button {
      ${mixins.flexCenter};
      background: none;
      border: none;
      cursor: pointer;
      width: 2.8rem;
      height: 2.8rem;
      transition: var(--transition) transform;
      &:hover {
        transform: scale(1.5);
      }
      &:focus {
        outline: none;
      }
    }

    .btnReservation {
      width: 100%;
      ${media.mobile`
        padding: 1.7rem 3.5rem;
        line-height: 2;
        margin-top: 3.2rem;
      `}
      }
    }
  }

  .reserve-place-button {
    ${media.tablet`
      display: none;
    `}
  }

  .gatheringSlide {
    width: 100%;
    animation: FadeIn ease-in-out 2s;
  }
`;

export default GlobalStyle;
