import React, { Fragment } from 'react';
import styled from 'styled-components';
import { theme, media, mixins } from 'styles';
import Button from './Button';

import Logo from 'images/logo.svg';
import HeroDesktop from 'images/homepage/hero-bg-desktop.jpg';
import HeroDesktop2x from 'images/homepage/hero-bg-desktop@2x.jpg';

import EnjoyablePlaceDesktop from 'images/homepage/enjoyable-place-desktop.jpg';
import EnjoyablePlaceDesktop2x from 'images/homepage/enjoyable-place-desktop@2x.jpg';

import LocallySourcedDesktop from 'images/homepage/locally-sourced-desktop.jpg';
import LocallySourcedDesktop2x from 'images/homepage/locally-sourced-desktop@2x.jpg';

import SalmonDesktop from 'images/homepage/salmon-desktop-tablet.jpg';
import SalmonDesktop2x from 'images/homepage/salmon-desktop-tablet@2x.jpg';

import BeefDesktop from 'images/homepage/beef-desktop-tablet.jpg';
import BeefDesktop2x from 'images/homepage/beef-desktop-tablet@2x.jpg';

import ChocolateDesktop from 'images/homepage/chocolate-desktop-tablet.jpg';
import ChocolateDesktop2x from 'images/homepage/chocolate-desktop-tablet@2x.jpg';

import FamilyGatheringDesktop from 'images/homepage/family-gathering-desktop.jpg';
import FamilyGatheringDesktop2x from 'images/homepage/family-gathering-desktop@2x.jpg';

import SocialEventsDesktop from 'images/homepage/social-events-desktop.jpg';
import SocialEventsDesktop2x from 'images/homepage/social-events-desktop@2x.jpg';

import SpecialEventsDesktop from 'images/homepage/special-events-desktop.jpg';
import SpecialEventsDesktop2x from 'images/homepage/special-events-desktop@2x.jpg';

import ReadyBGDesktop2x from 'images/homepage/ready-bg-desktop@2x.jpg';
import ReadyBGTablet2x from 'images/homepage/ready-bg-tablet@2x.jpg';
import ReadyBGMobile2x from 'images/homepage/ready-bg-mobile@2x.jpg';

import PatternLines from 'images/patterns/pattern-lines.svg';
import PatternCurveTop from 'images/patterns/pattern-curve-top-right.svg';

const { colors, fontSizes } = theme;

const HeroBackground = styled.section`
  background-image: url(${HeroDesktop2x});
  background-repeat: no-repeat;
  background-size: cover;
  height: 46.75rem;
  padding-top: 14.5rem;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  background-color: ${colors.black};
  color: ${colors.white};
  text-align: center;

  ${media.desktop`
    height: 51.25rem;
    padding-top: 4.0625em;
    padding-left: 10.3125rem;
    text-align: left;
  `}
`;

const HeroContainer = styled.h1`
  ${media.desktop`
    max-width: 90rem;
    margin: 0 auto;
  `}
`;

const HeroHeading = styled.h1`
  ${media.desktop`
   margin-top: 9.5625rem;
 `}
`;

const HeroP = styled.p`
  margin-top: 1.5rem;
  ${media.desktop`
    max-width: 27.8125rem;
 `}
`;

const SectionMiddle = styled.section`
  background-color: white;
`;

const MiddleContainer = styled.div`
  ${media.desktop`
    max-width: 69.375rem;
    margin: 0 auto;
  `}
`;

const MiddleFamily = styled.div`
  ${media.desktop`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: -1.8125rem;
  `}
`;

const MiddleSectionCard = styled.div`
  box-shadow: ${theme.cardShadow};
  ${media.desktop`
    transform: translateY(-7rem);
    min-width: 33.75rem;
    height: 45rem;
  `}
`;

const MiddleCardImage = styled.div`
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  ${media.desktop`
    min-height: 45rem;
    background-image: url(${EnjoyablePlaceDesktop2x});
  `}
`;

const MiddleContentFirst = styled.div`
  ${media.desktop`
    max-width: 27.8125rem;
    transform: translateY(-2.5rem);

    h2 {
      margin-top: 3rem;
    }
  `}

  h2 {
    margin-bottom: 1rem;
  }
`;

const MiddleLocally = styled.div`
  position: relative;

  ${media.desktop`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
  `}
`;

const PatternLinesDiv = styled.div`
  display: none;
  z-index: 1;
  position: absolute;

  ${media.desktop`
      display: block;
      right: 0;
      top: 22.5rem;
      transform: translateX(7.125rem);
    `}
`;

const MiddleSectionCardSecond = styled.div`
  box-shadow: ${theme.cardShadow};
  ${media.desktop`
    transform: translateY(5rem);
    min-width: 33.75rem;
    height: 45rem;
  `}
`;

const MiddleCardImageSecond = styled.div`
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;

  ${media.desktop`
    min-height: 45rem;
    background-image: url(${LocallySourcedDesktop2x});
  `}
`;

const MiddleContentSecond = styled.div`
  ${media.desktop`
    max-width: 27.8125rem;
    transform: translateY(-2.5rem);

    h2 {
      margin-top: 3rem;
    }
  `}

  h2 {
    margin-bottom: 1rem;
  }
`;

const SectionHighlights = styled.section`
  background-color: ${colors.codGray};

  ${media.desktop`
    padding-top: 15.9375rem;
    padding-bottom: 7.5rem;
  `}
`;

const HighlightContainer = styled.div`
  ${media.desktop`
    max-width: 69.375rem;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  `}
`;

const HighlightCopy = styled.div`
  ${media.desktop`
    max-width: 27.8125rem;
    transform: translateY(-3.4375rem);
  `}

  h2 {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
`;

const HighlightItems = styled.div`
  ${media.desktop`
    max-width: 33.75rem;
    margin: 0;
  `}

  ${media.tablet`
    display: flex;
    flex-direction: column;
  `}
`;

const HighlightItem = styled.div`
  &:not(:last-child) {
    margin-bottom: 1.5rem;
    border-bottom: 1px solid ${theme.borderColor};
    padding-bottom: 1.5rem;
  }

  ${media.tablet`
    display: flex;
    align-items: center;
  `}
`;

const ImageHighlightContainer = styled.div`
  margin: 0 auto;
  max-width: 20.4375rem;
`;

const ImageHighlightItem = styled.div`
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;

  ${media.tablet`
    width: 8rem;
    height: 6rem;

    &::after {
      content: ' ';
      width: 2rem;
      height: 1px;
      background-color: ${colors.beaver};
      position: absolute;
      right: 0;
      top: 1rem;
      transform: translateX(2rem);
    }
  `}
`;

const TextHighlightItem = styled.div`
  ${media.tablet`
    margin-left: 3.875rem;
  `}

  h3 {
    color: white;
    margin-bottom: 0.25rem;
  }

  p {
    color: white;
  }
`;

const SectionGathering = styled.section`
  background-color: white;

  ${media.desktop`
    padding: 10rem 0;
    background-repeat: no-repeat;
    background-image: url(${PatternCurveTop});
    background-positon-x: -21.875rem;
  `}
`;

const GatheringContainer = styled.div`
  ${media.desktop`
    max-width: 69.375rem;
    margin 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `}
`;

const GatheringSlider = styled.div`
  ${media.desktop`
    
  `}
`;

const GatheringSlide = styled.div`
  ${media.desktop`
    position: relative;
  `}
`;

const GatheringSlideFloatPattern = styled.div`
  display: none;
  z-index: 1;

  ${media.desktop`
    display: block;
    position: absolute;
    transform: translate(-2.5rem, -2.375rem);
  `}
`;

const GatheringSlideImageContainer = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: ${theme.cardShadow};

  ${media.desktop`
    height: 37.5rem;
    width: 33.75rem;
  `}
`;

const GatheringSlideImage = styled.img`
  width: 100%;
  animation: FadeIn ease-in-out 0.5s;
`;

const GatheringContent = styled.div`
  ${media.desktop`
    display: flex;
    flex-direction: column-reverse;
    max-width: 27.8125rem;
  `}

  ul {
    list-style-type: none;
    ${media.desktop`
      margin-top: 4.875rem;
    `}
    li {
      cursor: pointer;
      text-transform: uppercase;
      opacity: 0.5;
      transition: ${theme.transition} opacity;

      :hover {
        opacity: 1;
      }

      &:not(:last-child) {
        margin-bottom: 0.9375rem;
      }

      ${media.desktop`
        position: relative;
      `}

      div {
        ${media.desktop`
          top: 50%;
          height: 1px;
          width: 5.9375rem;
          position: absolute;
          transform: translate(-7.8125rem, -0.125rem);
          transition: ${theme.transition} background-color;
          background-color: ${colors.codGray};
        `}
      }
    }
  }
`;

const GatheringText = styled.div`
  ${media.desktop`
  `}

  p {
    margin-top: 1rem;
    margin-bottom: 2rem;
  }

  a {
    margin-top: 0;
  }
`;

const SectionCTA = styled.section`
  text-align: center;
  background-repeat: no-repeat;
  background-size: cover;

  ${media.mobile`
     background-image: url(${ReadyBGMobile2x});
     padding: 5rem 1.5rem;
   `}

  ${media.tablet`
     background-image: url(${ReadyBGTablet2x});
     padding: 4.0625rem 0;
   `}

  ${media.desktop`
     background-image: url(${ReadyBGDesktop2x});
     padding: 5.5rem 0;
   `}

  h2 {
    color: white;
    margin-bottom: 0;

    ${media.tablet`
      margin-bottom: 1.5rem;
    `}
  }
`;

const ContainerCTA = styled.div`
  ${media.desktop`
    max-width: 69.375rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `}
`;

const EMPTY1 = styled.div`
  ${media.desktop`
    
  `}
`;

const Home = () => {
  return (
    <main>
      <HeroBackground>
        <HeroContainer>
          <div className='floatingRight'>
            <img srcSet={Logo} alt='Dine Logo' />
          </div>
          <HeroHeading>
            Exquisite dining
            <br />
            since 1989
          </HeroHeading>
          <HeroP>
            Experience our seasonal menu in beautiful country surroundings. Eat
            the freshest produce from the comfort of our farmhouse.
          </HeroP>
        </HeroContainer>
        <a className='btn btnDark btnLg'>Book a table</a>
      </HeroBackground>

      <SectionMiddle>
        <MiddleContainer>
          <MiddleFamily>
            <MiddleSectionCard>
              <MiddleCardImage></MiddleCardImage>
            </MiddleSectionCard>
            <MiddleContentFirst>
              <svg xmlns='http://www.w3.org/2000/svg' width='71' height='7'>
                <g fill='none' fill-rule='evenodd'>
                  <path fill='#9E7F66' d='M15 3h56v1H15z' />
                  <circle cx='3.5' cy='3.5' r='3' stroke='#9E7F66' />
                </g>
              </svg>
              <h2>Enjoyable place for all the family</h2>
              <p>
                Our relaxed surroundings make dining with us a great experience
                for everyone. We can even arrange a tour of the farm before your
                meal.
              </p>
            </MiddleContentFirst>
          </MiddleFamily>

          <MiddleLocally>
            <PatternLinesDiv>
              <img alt='Pattern Lines' srcset={PatternLines} />
            </PatternLinesDiv>
            <MiddleSectionCardSecond>
              <MiddleCardImageSecond></MiddleCardImageSecond>
            </MiddleSectionCardSecond>
            <MiddleContentSecond>
              <svg xmlns='http://www.w3.org/2000/svg' width='71' height='7'>
                <g fill='none' fill-rule='evenodd'>
                  <path fill='#9E7F66' d='M15 3h56v1H15z' />
                  <circle cx='3.5' cy='3.5' r='3' stroke='#9E7F66' />
                </g>
              </svg>
              <h2>The most locally sourced food</h2>
              <p>
                All our ingredients come directly from our farm or local
                fishery. So you can be sure that you’re eating the freshest,
                most sustainable food.
              </p>
            </MiddleContentSecond>
          </MiddleLocally>
        </MiddleContainer>
      </SectionMiddle>

      <SectionHighlights>
        <HighlightContainer>
          <HighlightCopy>
            <svg xmlns='http://www.w3.org/2000/svg' width='71' height='7'>
              <g fill='none' fill-rule='evenodd'>
                <path fill='#9E7F66' d='M15 3h56v1H15z' />
                <circle cx='3.5' cy='3.5' r='3' stroke='#9E7F66' />
              </g>
            </svg>
            <h2 className='text-white'>A few highlights from our menu</h2>
            <p className='text-white'>
              We cater for all dietary requirements, but here’s a glimpse at
              some of our diner’s favourites. Our menu is revamped every season.
            </p>
          </HighlightCopy>
          <HighlightItems>
            <HighlightItem>
              <ImageHighlightContainer>
                <ImageHighlightItem
                  style={{ backgroundImage: `url(${SalmonDesktop})` }}
                ></ImageHighlightItem>
              </ImageHighlightContainer>
              <TextHighlightItem>
                <h3>Seared Salmon Fillet</h3>
                <p className='small'>
                  Our locally sourced salmon served with a refreshing buckwheat
                  summer salad.
                </p>
              </TextHighlightItem>
            </HighlightItem>

            <HighlightItem>
              <ImageHighlightContainer>
                <ImageHighlightItem
                  style={{ backgroundImage: `url(${BeefDesktop})` }}
                ></ImageHighlightItem>
              </ImageHighlightContainer>
              <TextHighlightItem>
                <h3>Rosemary Filet Mignon</h3>
                <p className='small'>
                  Our prime beef served to your taste with a delicious choice of
                  seasonal sides.
                </p>
              </TextHighlightItem>
            </HighlightItem>

            <HighlightItem>
              <ImageHighlightContainer>
                <ImageHighlightItem
                  style={{ backgroundImage: `url(${ChocolateDesktop})` }}
                ></ImageHighlightItem>
              </ImageHighlightContainer>
              <TextHighlightItem>
                <h3>Summer Fruit Chocolate Mousse</h3>
                <p className='small'>
                  Creamy mousse combined with summer fruits and dark chocolate
                  shavings.
                </p>
              </TextHighlightItem>
            </HighlightItem>
          </HighlightItems>
        </HighlightContainer>
      </SectionHighlights>

      <SectionGathering>
        <GatheringContainer>
          <GatheringSlider>
            <GatheringSlide>
              <GatheringSlideFloatPattern>
                <img alt='Pattern Lines' srcset={PatternLines} />
              </GatheringSlideFloatPattern>

              <GatheringSlideImageContainer id='slide-image'>
                <GatheringSlideImage
                  srcSet={FamilyGatheringDesktop2x}
                ></GatheringSlideImage>
                {/* <GatheringSlideImage
                  srcSet={SocialEventsDesktop2x}
                ></GatheringSlideImage>
                  <GatheringSlideImage
                  srcSet={SpecialEventsDesktop2x}
                ></GatheringSlideImage> */}
              </GatheringSlideImageContainer>
            </GatheringSlide>
          </GatheringSlider>
          <GatheringContent>
            <ul>
              <li>
                <p className='h4'>Family gathering</p>
                <div></div>
              </li>
              <li>
                <p className='h4'>Special events</p>
                <div></div>
              </li>
              <li>
                <p className='h4'>Social events</p>
                <div></div>
              </li>
            </ul>
            <GatheringText id='slide-body'>
              <h2>Special Events</h2>
              <p>
                Are you looking to have a larger social event? No problem! We’re
                more than happy to cater for big parties. We’ll work with you to
                make your event a hit with everyone.
              </p>
              <a className='btn btnLight btnLg'>Book a table</a>
            </GatheringText>
          </GatheringContent>
        </GatheringContainer>
      </SectionGathering>

      <SectionCTA>
        <ContainerCTA>
          <h2>Ready to make a reservation?</h2>
          <a className='btn btnDark'>Book a table</a>
        </ContainerCTA>
      </SectionCTA>
    </main>
  );
};

export default Home;
