import React, { useEffect } from 'react';
import styled from 'styled-components';
import { theme, mixins, media } from 'styles';

import Logo from 'images/logo.svg';

import HeroDesktop2x from 'images/homepage/hero-bg-desktop@2x.jpg';
import HeroTablet2x from 'images/homepage/hero-bg-tablet@2x.jpg';
import HeroMobile2x from 'images/homepage/hero-bg-mobile@2x.jpg';

import EnjoyablePlaceDesktop2x from 'images/homepage/enjoyable-place-desktop@2x.jpg';
import EnjoyablePlaceTablet2x from 'images/homepage/enjoyable-place-tablet@2x.jpg';
import EnjoyablePlaceMobile2x from 'images/homepage/enjoyable-place-mobile@2x.jpg';

import LocallySourcedDesktop2x from 'images/homepage/locally-sourced-desktop@2x.jpg';
import LocallySourcedTablet2x from 'images/homepage/locally-sourced-tablet@2x.jpg';
import LocallySourcedMobile2x from 'images/homepage/locally-sourced-mobile@2x.jpg';

import SalmonDesktop2x from 'images/homepage/salmon-desktop-tablet@2x.jpg';
import SalmonMobile2x from 'images/homepage/salmon-mobile@2x.jpg';

import BeefDesktop2x from 'images/homepage/beef-desktop-tablet@2x.jpg';
import BeefMobile2x from 'images/homepage/beef-mobile@2x.jpg';

import ChocolateDesktop2x from 'images/homepage/chocolate-desktop-tablet@2x.jpg';
import ChocolateMobile2x from 'images/homepage/chocolate-mobile@2x.jpg';

import FamilyGatheringDesktop2x from 'images/homepage/family-gathering-desktop@2x.jpg';
import FamilyGatheringTablet2x from 'images/homepage/family-gathering-tablet@2x.jpg';
import FamilyGatheringMobile2x from 'images/homepage/family-gathering-mobile@2x.jpg';

import SpecialEventsDesktop2x from 'images/homepage/special-events-desktop@2x.jpg';
import SpecialEventsTablet2x from 'images/homepage/special-events-tablet@2x.jpg';
import SpecialEventsMobile2x from 'images/homepage/special-events-mobile@2x.jpg';

import SocialEventsDesktop2x from 'images/homepage/social-events-desktop@2x.jpg';
import SocialEventsTablet2x from 'images/homepage/social-events-tablet@2x.jpg';
import SocialEventsMobile2x from 'images/homepage/social-events-mobile@2x.jpg';

import ReadyBGDesktop2x from 'images/homepage/ready-bg-desktop@2x.jpg';
import ReadyBGTablet2x from 'images/homepage/ready-bg-tablet@2x.jpg';
import ReadyBGMobile2x from 'images/homepage/ready-bg-mobile@2x.jpg';

import PatternLines from 'images/patterns/pattern-lines.svg';
import PatternCurveTopLeft from 'images/patterns/pattern-curve-top-left.svg';
import PatternCurveTopRight from 'images/patterns/pattern-curve-top-right.svg';

const { colors } = theme;

const HeroBackground = styled.section`
  background-repeat: no-repeat;
  background-size: cover;
  height: 74.8rem;
  padding-top: 23.2rem;
  padding-right: 2.4rem;
  padding-left: 2.4rem;
  background-color: ${colors.black};
  color: ${colors.white};
  text-align: center;

  ${media.mobile`
    background-image: url(${HeroMobile2x});
  `}

  @media (min-width: 435px) {
    padding-top: 28.2rem;
    height: 80rem;
  }

  @media (min-width: 555px) {
    padding-top: 33.2rem;
    height: 85rem;
  }

  @media (min-width: 655px) {
    padding-top: 38.2rem;
    height: 90rem;
  }

  @media (min-width: 755px) {
    padding-top: 43.2rem;
    height: 95rem;
  }

  ${media.tablet`
    height: 99.2rem;
    padding-top: 37.4rem;
    background-image: url(${HeroTablet2x});
  `}

  @media (min-width: 890px) {
    height: 106.2rem;
    padding-top: 44.4rem;
  }

  @media (min-width: 1060px) {
    height: 113.2rem;
    padding-top: 51.4rem;
  }

  ${media.desktop`
    height: 82rem;
    padding-top: 6.5rem;
    padding-left: 16.5rem;
    text-align: left;
    background-image: url(${HeroDesktop2x});
  `}
`;

const HeroContainer = styled.div`
  ${media.desktop`
    max-width: 144rem;
    margin: 0 auto;
  `}
`;

const HeroHeading = styled.h1`
  ${media.desktop`
    margin-top: 15.3rem;
  `}

  ${media.tabletMax`
    margin-top: 3.2rem;
  `}
`;

const HeroP = styled.p`
  margin-top: 2.4rem;

  ${media.desktop`
    max-width: 44.5rem;
  `}

  ${media.tabletOnly`
    max-width: 57.3rem;
  `}

  ${media.mobile`
    max-width: 40rem;
  `}

  ${media.tabletMax`
    margin-right: auto;
    margin-left: auto;
  `}
`;

const SectionMiddle = styled.section`
  background-color: ${colors.white};
  background-repeat: no-repeat;

  ${media.desktop`
    background-image: url(${PatternCurveTopRight}), url(${PatternCurveTopLeft});
    background-position-y: 24.2rem, bottom;
    background-position-x: left, right;
  `}

  ${media.tabletMax`
    text-align: center;
  `}

  ${media.tabletOnly`
    background-image: url(${PatternCurveTopRight}), url(${PatternCurveTopLeft});
    background-position-y: 10rem, bottom;
    background-position-x: -67vw, 52vw;
  `}
`;

const MiddleContainer = styled.div`
  ${media.desktop`
    max-width: 111rem;
    margin: 0 auto;
  `}

  ${media.tabletOnly`
    padding: 0 9.7rem 12rem;
  `}

  ${media.mobile`
    padding: 0 2.4rem 8rem;
  `}
`;

const MiddleFamily = styled.div`
  ${media.desktop`
    ${mixins.flexBetween};
    flex-direction: row;
    margin-bottom: -2.9rem;
  `}

  ${media.tabletOnly`
    margin-bottom: 2.4rem;
  `}

  ${media.mobile`
    margin-bottom: 0.8rem;
  `}
`;

const MiddleSectionCard = styled.div`
  box-shadow: ${theme.cardShadow};

  ${media.desktop`
    min-width: 54rem;
    height: 72rem;
  `}

  &.firstCard {
    ${media.desktop`
      transform: translateY(-7rem);
    `}

    ${media.tabletOnly`
      transform: translateY(-9.6rem);
    `}

    ${media.mobile`
      transform: translateY(-7.2rem);
    `}
  }

  &.secondCard {
    ${media.desktop`
      transform: translateY(8rem);
    `}
  }
`;

const MiddleCardImage = styled.div`
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;

  ${media.desktop`
    min-height: 72rem;
  `}

  ${media.tabletOnly`
    min-height: 36rem;
  `}

  ${media.mobile`
    min-height: 40rem;
    background-position: center center;
  `}

  &.firstImg {
    ${media.desktop`
      background-image: url(${EnjoyablePlaceDesktop2x});
    `}

    ${media.tabletOnly`
      background-image: url(${EnjoyablePlaceTablet2x});
    `}
  
    ${media.mobile`
      background-image: url(${EnjoyablePlaceMobile2x});
    `}
  }

  &.secondImg {
    ${media.desktop`
      background-image: url(${LocallySourcedDesktop2x});
    `}

    ${media.tabletOnly`
      background-image: url(${LocallySourcedTablet2x});
    `}

    ${media.mobile`
      background-image: url(${LocallySourcedMobile2x});
    `}
  }
`;

const MiddleContent = styled.div`
  ${media.desktop`
    max-width: 44.5rem;
  `}

  ${media.tabletOnly`
    margin-top: 5.6rem;
  `}

  ${media.mobile`
    margin-top: 4.8rem;
  `}

  &.firstContent {
    ${media.desktop`
      transform: translateY(-4rem);
    `}

    ${media.tabletOnly`
    transform: translateY(-9.6rem);
    `}

    ${media.mobile`
    transform: translateY(-7.2rem);
    `}
  }

  &.secondContent {
    ${media.desktop`
      margin-top: 11.5rem;
    `}
  }

  h2 {
    margin-bottom: 1.6rem;

    ${media.desktop`
      margin-top: 4.8rem;
    `}

    ${media.tabletMax`
      margin-top: 3.2rem;
    `}
  }

  p {
    ${media.tabletOnly`
      max-width: 45.7rem;
      margin: 0 auto;
    `}
  }
`;

const MiddleLocally = styled.div`
  position: relative;

  ${media.desktop`
    ${mixins.flexBetween};
    flex-direction: row-reverse;
  `}
`;

const PatternLinesDiv = styled.div`
  display: none;
  z-index: 1;
  position: absolute;

  ${media.desktop`
    display: block;
    right: 0;
    top: 36rem;
    transform: translateX(11.4rem);
  `}

  ${media.tabletOnly`
    display: block;
    right: 0;
    top: 22.8rem;
    transform: translateX(5.8rem);
  `}
`;

const SectionHighlights = styled.section`
  background-color: ${colors.codGray};

  ${media.desktop`
    padding-top: 15.9375rem;
    padding-bottom: 7.5rem;
  `}

  ${media.tabletOnly`
    padding: 9.6rem 0;
  `}

  ${media.mobile`
    padding: 7.2rem 2.4rem;
  `}
`;

const HighlightContainer = styled.div`
  ${media.desktop`
    max-width: 111rem;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  `}
`;

const HighlightCopy = styled.div`
  ${media.desktop`
    max-width: 44.5rem;
    transform: translateY(-5.5rem);
  `}

  ${media.tabletOnly`
    text-align: center;
    max-width: 44.5rem;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 5.6rem;
  `}

  ${media.mobile`
    text-align: center;
    margin-bottom: 6.4rem;
  `}

  h2 {
    margin-top: 3.2rem;
    margin-bottom: 1.6rem;
  }
`;

const HighlightItems = styled.div`
  ${media.desktop`
    max-width: 54rem;
    margin: 0;
  `}

  ${media.tablet`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 57.3rem;
  `}
`;

const HighlightItem = styled.div`
  &:not(:last-child) {
    margin-bottom: 2.4rem;
    border-bottom: 1px solid ${theme.borderColor};
    padding-bottom: 2.4rem;
  }

  ${media.tablet`
    display: flex;
    align-items: center;
  `}

  ${media.mobile`
    text-align: center;
  `}
`;

const ImageHighlightContainer = styled.div`
  margin: 0 auto;
  max-width: 32.7rem;
`;

const ImageHighlightItem = styled.div`
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;

  ${media.tablet`
    width: 12.8rem;
    height: 9.6rem;

    &::after {
      content: ' ';
      width: 3.2rem;
      height: 1px;
      background-color: ${colors.beaver};
      position: absolute;
      right: 0;
      top: 1.6rem;
      transform: translateX(3.2rem);
    }
  `}

  ${media.mobile`
    width: 100%;
    height: 24.5rem;
  `}

  &.salmon {
    ${media.tablet`
      background-image: url(${SalmonDesktop2x});
    `}

    ${media.mobile`
      background-image: url(${SalmonMobile2x});
    `}
  }

  &.beef {
    ${media.tablet`
      background-image: url(${BeefDesktop2x});
    `}

    ${media.mobile`
      background-image: url(${BeefMobile2x});
    `}
  }

  &.chocolate {
    ${media.tablet`
      background-image: url(${ChocolateDesktop2x});
    `}

    ${media.mobile`
      background-image: url(${ChocolateMobile2x});
    `}
  }
`;

const TextHighlightItem = styled.div`
  ${media.tablet`
    margin-left: 6.2rem;
  `}

  ${media.mobile`
    margin-left: auto;
    margin-right: auto;
    margin-top 3.2rem;
    max-width: 40rem;
  `}

  h3 {
    color: ${colors.white};
    margin-bottom: 0.4rem;
  }

  p {
    color: ${colors.white};
  }
`;

const SectionGathering = styled.section`
  background-color: ${colors.white};

  ${media.desktop`
    padding: 16rem 0;
    background-repeat: no-repeat;
    background-image: url(${PatternCurveTopRight});
    background-position-x: -35rem;
  `}

  ${media.tabletOnly`
    padding: 12rem 0;
    background-repeat: no-repeat;
    background-image: url(${PatternCurveTopRight});
    background-positon-x: -69vw;
  `}

  ${media.tabletMax`
    text-align: center;
  `}

  ${media.mobile`
    padding: 8rem 2.4rem 12.4rem;
  `}
`;

const GatheringContainer = styled.div`
  ${media.desktop`
    ${mixins.flexBetween};
    max-width: 111rem;
    margin 0 auto;
    flex-direction: row;
  `}
`;

const GatheringSlider = styled.div`
  ${media.mobile`
    max-width: 32.6rem;
    margin: 0 auto;
  `}
`;

const GatheringSlide = styled.div`
  ${media.desktop`
    position: relative;
  `}

  ${media.tabletOnly`
    width: 74.609%;
    margin: 0 auto;
    position: relative;
  `}
`;

const GatheringSlideFloatPattern = styled.div`
  display: none;
  z-index: 1;

  ${media.desktop`
    display: block;
    position: absolute;
    transform: translate(-4rem, -3.8rem);
  `}

  ${media.tabletOnly`
    display: block;
    position: absolute;
    transform: translate(-5.8rem, -3.8rem);
  `}
`;

const GatheringSlideImageContainer = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: ${theme.cardShadow};

  ${media.desktop`
    height: 60rem;
    width: 54rem;
  `}

  ${media.tabletOnly`
    height: 36rem;
    width: 57.3rem;
    margin: 0 auto;
  `}

  ${media.mobile`
    height: 40rem;
  `}
`;

const GatheringContent = styled.div`
  ${media.desktop`
    display: flex;
    flex-direction: column-reverse;
    max-width: 44.5rem;
  `}

  ${media.tabletOnly`
    margin-top: 5.6rem;
  `}

  ${media.mobile`
    margin-top: 4.8rem;
  `}

  ul {
    list-style-type: none;

    ${media.desktop`
      margin-top: 7.8rem;
    `}

    ${media.tabletOnly`
      display: flex;
      justify-content: space-around;
      max-width: 68.9rem;
      margin: 0 auto;
    `}

  li {
      cursor: pointer;
      text-transform: uppercase;
      opacity: 0.5;
      transition: ${theme.transition} opacity;

      &:hover {
        opacity: 1;
      }

      &.active {
        opacity: 1;
      }

      &:not(:last-child) {
        margin-bottom: 1.5rem;
      }

      ${media.desktop`
        position: relative;
      `}

      ${media.tabletMax`
      .GatheringEventUnderline {
        width: 4.8rem;
        margin: 0 auto;
        border: 1px solid transparent;
        transition: ${theme.transition} border-color;

        &.active {
          border-color: ${colors.beaver};
        }

        &:hover {
          border-color: ${colors.beaver};
        }
      }

      &:hover {
        border-color: ${colors.beaver};
      }
    `}

    ${media.desktop`
      position: relative;
      .GatheringEventUnderline {
        top: 50%;
        height: 1px;
        width: 9.5rem;
        position: absolute;
        transform: translate(-12.5rem, -0.2rem);
        background-color: transparent;
        transition: ${theme.transition} background-color;
        &.active {
          background-color: ${colors.beaver};
        }
      }
      
      &:hover &.liney{
        background-color: ${colors.beaver};
      } 
    `}
    }
  }
`;

const GatheringText = styled.div`
  ${media.tabletOnly`
    margin-top: 4rem;
  `}

  ${media.mobile`
    margin-top: 2.4rem;
  `}

  p {
    margin-top: 1.6rem;
    margin-bottom: 3.2rem;

    ${media.tabletOnly`
      margin-left: auto;
      margin-right: auto;
      max-width: 47.5rem;
    `}
  }

  a {
    margin-top: 0;
  }
`;

const SectionCTA = styled.section`
  text-align: center;
  background-repeat: no-repeat;
  background-size: cover;

  ${media.desktop`
     background-image: url(${ReadyBGDesktop2x});
     padding: 8.8rem 0;
   `}

  ${media.tabletOnly`
     background-image: url(${ReadyBGTablet2x});
     padding: 6.5rem 0;
   `}


  ${media.mobile`
     background-image: url(${ReadyBGMobile2x});
     padding: 8rem 2.4rem;
   `}


  h2 {
    color: ${colors.white};
    margin-bottom: 0;

    ${media.tabletMax`
      margin-bottom: 2.4rem;
    `}
  }
`;

const ContainerCTA = styled.div`
  ${media.desktop`
    max-width: 111rem;
    margin: 0 auto;
    ${mixins.flexBetween};
  `}
`;

const Home = () => {
  useEffect(() => {
    const slideImage = document.getElementById('slide-image');
    const slideTitle = document.getElementById('slide-title');
    const slideContent = document.getElementById('slide-content');
    const events = document.querySelectorAll('li.GatheringEvent');
    const underlines = document.querySelectorAll(
      'div.GatheringEventUnderline'
    );
    const breakPoints = [767, 1200];

    const slides = [
      {
        name: 'Family Gathering',
        content:
          "We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We'll provide a memorable experience for all.",
        image: 'FamilyGathering',
      },
      {
        name: 'Special Events',
        content:
          "Whether it's a romantic dinner or special date you're celebrating with others we'll look after you. We'll be sure to mark your special date with an unforgettable meal.",
        image: 'SpecialEvents',
      },
      {
        name: 'Social Events',
        content:
          "Are you looking to have a larger social event? No problem! We're more than happy to cater for big parties. We'll work with you to make your event a hit with everyone.",
        image: 'SocialEvents',
      },
    ];
    const imageUrlSuffixes = ['Mobile2x', 'Tablet2x', 'Desktop2x'];

    let suffix = 0;
    let windowSize = window.innerWidth;

    if (windowSize > breakPoints[0] && windowSize < breakPoints[1]) {
      suffix = 1;
    } else if (windowSize > breakPoints[1]) {
      suffix = 2;
    }

    slideImage.innerHTML = '';
    slideImage.appendChild(generateImageComponent(0, suffix));
    events[0].classList.add('active');
    underlines[0].classList.add('active');

    let slide = 1;
    // changing image url
    setInterval(() => {
      let windowSize = window.innerWidth;

      if (windowSize > breakPoints[0] && windowSize < breakPoints[1]) {
        suffix = 1;
      } else if (windowSize > breakPoints[1]) {
        suffix = 2;
      }

      slideImage.innerHTML = '';
      slideImage.appendChild(generateImageComponent(slide, suffix));
      changeInnerText(slide);
      events[slide].classList.add('active');
      underlines[slide].classList.add('active');
      events.forEach((event, i) => {
        if (i !== slide) event.classList.remove('active');
      });
      underlines.forEach((underline, i) => {
        if (i !== slide) underline.classList.remove('active');
      });
      if (slide === slides.length - 1) slide = 0;
      else slide++; // reset slide number
    }, 5000);

    function generateImageComponent(slide, suffix) {
      let newImage = document.createElement('img');
      let concattedImage = slides[slide].image.concat(imageUrlSuffixes[suffix]);

      newImage.setAttribute('class', 'gatheringSlide');
      newImage.setAttribute('alt', 'Dine restaurant');

      // Images in all sizes (Slide 1)
      if (concattedImage === 'FamilyGatheringDesktop2x') {
        newImage.setAttribute('src', FamilyGatheringDesktop2x);
      } else if (concattedImage === 'FamilyGatheringTablet2x') {
        newImage.setAttribute('src', FamilyGatheringTablet2x);
      } else if (concattedImage === 'FamilyGatheringMobile2x') {
        newImage.setAttribute('src', FamilyGatheringMobile2x);
      }

      // Images in all sizes (Slide 2)
      if (concattedImage === 'SpecialEventsDesktop2x') {
        newImage.setAttribute('src', SpecialEventsDesktop2x);
      } else if (concattedImage === 'SpecialEventsTablet2x') {
        newImage.setAttribute('src', SpecialEventsTablet2x);
      } else if (concattedImage === 'SpecialEventsMobile2x') {
        newImage.setAttribute('src', SpecialEventsMobile2x);
      }

      // Images in all sizes (Slide 3)
      if (concattedImage === 'SocialEventsDesktop2x') {
        newImage.setAttribute('src', SocialEventsDesktop2x);
      } else if (concattedImage === 'SocialEventsTablet2x') {
        newImage.setAttribute('src', SocialEventsTablet2x);
      } else if (concattedImage === 'SocialEventsMobile2x') {
        newImage.setAttribute('src', SocialEventsMobile2x);
      }

      return newImage;
    }

    function changeInnerText(slide) {
      slideTitle.textContent = slides[slide].name;
      slideContent.textContent = slides[slide].content;
    }
  });

  return (
    <main>
      <HeroBackground>
        <HeroContainer>
          <div className='floatingRight'>
            <a href='/'>
              <img srcSet={Logo} alt='Dine Logo' />
            </a>
          </div>
          <HeroHeading className='text-white'>
            Exquisite dining
            <br />
            since 1989
          </HeroHeading>
          <HeroP>
            Experience our seasonal menu in beautiful country surroundings. Eat
            the freshest produce from the comfort of our farmhouse.
          </HeroP>
          <a className='btn btnDark btnLg' href='/reservation'>
            Book a table
          </a>
        </HeroContainer>
      </HeroBackground>

      <SectionMiddle>
        <MiddleContainer>
          <MiddleFamily>
            <MiddleSectionCard className='firstCard'>
              <MiddleCardImage className='firstImg'></MiddleCardImage>
            </MiddleSectionCard>
            <MiddleContent className='firstContent'>
              <svg xmlns='http://www.w3.org/2000/svg' width='71' height='7'>
                <g fill='none' fillRule='evenodd'>
                  <path fill='#9E7F66' d='M15 3h56v1H15z' />
                  <circle cx='3.5' cy='3.5' r='3' stroke='#9E7F66' />
                </g>
              </svg>
              <h2>
                Enjoyable place <br />
                for all the family
              </h2>
              <p>
                Our relaxed surroundings make dining with us a great experience
                for everyone. We can even arrange a tour of the farm before your
                meal.
              </p>
            </MiddleContent>
          </MiddleFamily>

          <MiddleLocally>
            <PatternLinesDiv>
              <img alt='Pattern Lines' srcSet={PatternLines} />
            </PatternLinesDiv>
            <MiddleSectionCard className='secondCard'>
              <MiddleCardImage className='secondImg'></MiddleCardImage>
            </MiddleSectionCard>
            <MiddleContent className='secondContent'>
              <svg xmlns='http://www.w3.org/2000/svg' width='71' height='7'>
                <g fill='none' fillRule='evenodd'>
                  <path fill='#9E7F66' d='M15 3h56v1H15z' />
                  <circle cx='3.5' cy='3.5' r='3' stroke='#9E7F66' />
                </g>
              </svg>
              <h2>
                The most locally <br />
                sourced food
              </h2>
              <p>
                All our ingredients come directly from our farm or local
                fishery. So you can be sure that you’re eating the freshest,
                most sustainable food.
              </p>
            </MiddleContent>
          </MiddleLocally>
        </MiddleContainer>
      </SectionMiddle>

      <SectionHighlights>
        <HighlightContainer>
          <HighlightCopy>
            <svg xmlns='http://www.w3.org/2000/svg' width='71' height='7'>
              <g fill='none' fillRule='evenodd'>
                <path fill='#9E7F66' d='M15 3h56v1H15z' />
                <circle cx='3.5' cy='3.5' r='3' stroke='#9E7F66' />
              </g>
            </svg>
            <h2 className='text-white'>
              A few highlights <br /> from our menu
            </h2>
            <p className='text-white'>
              We cater for all dietary requirements, but here’s a glimpse at
              some of our diner’s favourites. Our menu is revamped every season.
            </p>
          </HighlightCopy>
          <HighlightItems>
            <HighlightItem>
              <ImageHighlightContainer>
                <ImageHighlightItem className='salmon'></ImageHighlightItem>
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
                <ImageHighlightItem className='beef'></ImageHighlightItem>
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
                <ImageHighlightItem className='chocolate'></ImageHighlightItem>
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
                <img alt='Pattern Lines' srcSet={PatternLines} />
              </GatheringSlideFloatPattern>
              <GatheringSlideImageContainer id='slide-image'>
                <img
                  className='gatheringSlide'
                  srcSet=''
                  alt='Dine restaurant'
                ></img>
              </GatheringSlideImageContainer>
            </GatheringSlide>
          </GatheringSlider>
          <GatheringContent id='slide-text-body'>
            <ul>
              <li className='GatheringEvent'>
                <p className='h4'>Family gathering</p>
                <div className='GatheringEventUnderline active'></div>
              </li>
              <li className='GatheringEvent'>
                <p className='h4'>Special events</p>
                <div className='GatheringEventUnderline liney'></div>
              </li>
              <li className='GatheringEvent '>
                <p className='h4'>Social events</p>
                <div className='GatheringEventUnderline liney'></div>
              </li>
            </ul>
            <GatheringText id='slide-body'>
              <h2 id='slide-title'>Special Events</h2>
              <p id='slide-content'>
                Are you looking to have a larger social event? No problem! We’re
                more than happy to cater for big parties. We’ll work with you to
                make your event a hit with everyone.
              </p>
              <a className='btn btnLight btnLg' href='/reservation'>
                Book a table
              </a>
            </GatheringText>
          </GatheringContent>
        </GatheringContainer>
      </SectionGathering>

      <SectionCTA>
        <ContainerCTA>
          <h2>Ready to make a reservation?</h2>
          <a className='btn btnDark' href='/reservation'>
            Book a table
          </a>
        </ContainerCTA>
      </SectionCTA>
    </main>
  );
};

export default Home;
