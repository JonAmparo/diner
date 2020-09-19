import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { theme, media, mixins } from 'styles';
const { fonts, colors, fontSizes, screensize } = theme;

const SectionFooter = styled.footer`
  background-color: ${colors.codGray};

  ${media.mobile`
    padding: 4rem 2.5rem;
    background-color: yellow;
  `}

  ${media.tablet`
    padding: 4rem 2.5rem;
    background-color: pink;
  `}

  ${media.desktop`
    padding: 4.875rem 0;
    background-color: cyan;
  `}

  .container {
    ${media.tablet`
      max-width: 58.75rem;
      margin: 0 auto;
      display: flex;
    `}

    ${media.desktop`
      max-width: 69.375rem;
      margin: 0 auto;
      display: flex;
    `}
  }

  .information {
    ${media.tablet`
      margin-left: 8.125rem;
      display: flex;
      flex-flow: row wrap;
    `}

    ${media.desktop`
      margin-left: 12.03625rem;
    `}
  }

  .contact {
    ${media.mobile`
      margin-top: 2.5rem;
      margin-bottom: 2rem;
    `}

    ${media.tablet`
      margin-bottom: 2rem;
      margin-right: 3.875rem;
    `}

    ${media.desktop`
      margin-right: 7.75rem;
    `}
  }
`;

const Footer = () => {
  return (
    <SectionFooter>
      <div className='container'>
        <div className='footerLogo'>
          <svg xmlns='http://www.w3.org/2000/svg' width='103' height='40'>
            <path
              fill='#FFF'
              d='M11.46 40c1.622 0 3.137-.335 4.547-1.005 1.41-.67 2.63-1.605 3.66-2.808v3.082h6.981V0h-6.98v18.744c-.925-1.126-2.084-2.005-3.479-2.637-1.395-.631-2.91-.947-4.547-.947-2.26 0-4.264.544-6.015 1.632-1.75 1.089-3.126 2.565-4.126 4.43C.5 23.085 0 25.204 0 27.58c0 2.42.515 4.566 1.546 6.438 1.03 1.872 2.414 3.337 4.15 4.395C7.43 39.471 9.353 40 11.46 40zm2.091-5.959c-1.197 0-2.266-.278-3.206-.833a5.901 5.901 0 01-2.205-2.283c-.53-.967-.796-2.067-.796-3.3 0-1.248.273-2.362.819-3.344a6.135 6.135 0 012.217-2.318c.932-.563 1.997-.844 3.194-.844 1.213 0 2.29.281 3.229.844a6.045 6.045 0 012.217 2.306c.538.975.807 2.086.807 3.334 0 1.233-.27 2.336-.807 3.31a5.962 5.962 0 01-2.217 2.295c-.94.555-2.024.833-3.252.833zm24.216-23.014c.758 0 1.447-.186 2.069-.559a4.198 4.198 0 001.49-1.518c.37-.64.556-1.34.556-2.1 0-.762-.186-1.454-.557-2.078a4.256 4.256 0 00-1.49-1.496 3.945 3.945 0 00-2.068-.56c-.758 0-1.452.187-2.08.56a4.32 4.32 0 00-1.513 1.496 3.925 3.925 0 00-.568 2.077c0 .761.19 1.462.568 2.1a4.26 4.26 0 001.512 1.519c.63.373 1.323.56 2.08.56zm3.478 28.242V15.89h-6.98v23.38h6.98zm14.643 0V25.434c0-.913.201-1.732.603-2.455a4.36 4.36 0 011.728-1.712c.75-.418 1.64-.628 2.672-.628 1.515 0 2.709.468 3.58 1.404.872.936 1.308 2.242 1.308 3.916v13.31h6.98V24.475c0-1.857-.386-3.482-1.16-4.875a8.409 8.409 0 00-3.194-3.264c-1.356-.784-2.93-1.176-4.718-1.176-1.622 0-3.103.304-4.445.913-1.341.609-2.46 1.416-3.354 2.42V15.89h-6.98v23.38h6.98zM91.131 40c2.456 0 4.684-.533 6.685-1.598 2-1.066 3.547-2.542 4.638-4.43l-5.025-2.534c-.864 1.035-1.762 1.789-2.694 2.26-.932.472-2.005.708-3.217.708-1.289 0-2.418-.247-3.388-.742-.97-.494-1.724-1.183-2.263-2.066-.538-.883-.807-1.918-.807-3.105h17.85c.045-.396.071-.666.079-.81.007-.145.011-.316.011-.514 0-2.39-.512-4.483-1.535-6.279a10.908 10.908 0 00-4.274-4.212c-1.827-1.012-3.953-1.518-6.378-1.518-1.82 0-3.51.316-5.07.947a12.84 12.84 0 00-4.116 2.649 12.225 12.225 0 00-2.763 3.96c-.659 1.508-.989 3.129-.989 4.864 0 2.36.584 4.475 1.751 6.347 1.167 1.872 2.747 3.352 4.74 4.44C86.36 39.457 88.616 40 91.132 40zm5.002-15.388H85.31c.106-.898.394-1.674.864-2.329a4.562 4.562 0 011.865-1.507c.773-.35 1.667-.525 2.683-.525.955 0 1.811.175 2.57.525.757.35 1.382.853 1.875 1.507.493.655.815 1.43.966 2.329z'
            />
          </svg>
        </div>
        <div className='information'>
          <div className='contact'>
            <p className='text-footer'>
              Marthwaite, Sedbergh
              <br />
              Cumbria
              <br />
              +00 44 123 4567
            </p>
          </div>
          <div className='time'>
            <p className='text-footer'>
              Open Times
              <br />
              Mon - Fri: 09:00 AM - 10:00 PM
              <br />
              Sat - Sun: 09:00 AM - 11:30 PM
            </p>
          </div>
        </div>
      </div>
    </SectionFooter>
  );
};

export default Footer;
