import React, { useState } from 'react';
import styled from 'styled-components';

import { theme, media } from 'styles';

import Logo from 'images/logo.svg';
import HeroBGMobile2x from 'images/booking/hero-bg-mobile@2x.jpg';
import HeroBGTablet2x from 'images/booking/hero-bg-tablet@2x.jpg';
import HeroBGDesktop2x from 'images/booking/hero-bg-desktop@2x.jpg';

import PatternCurveBottomRight from 'images/patterns/pattern-curve-bottom-right.svg';
import PatternLines from 'images/patterns/pattern-lines.svg';

const { colors } = theme;

const SectionReservation = styled.section`
  position: relative;

  .bg-1 {
    background-size: cover;
    background-repeat: no-repeat;
  }

  .bg-2 {
    background-color: ${colors.white};
  }

  ${media.mobile`
    .bg-1 {
        height: 60rem;
        background-image: url(${HeroBGMobile2x});
    }

    .bg-2 {
        height: 53.4rem;
    }
  `}

  ${media.tabletOnly`
    .bg-1 {
        height: 60rem;
        background-image: url(${HeroBGTablet2x});
    }

    .bg-2 {
        height: 43.5rem;
    }
  `}

  ${media.desktop`
    .bg-1 {
        height: 60rem;
        background-image: url(${HeroBGDesktop2x});
    }

    .bg-2 {
        height: 32rem;
        background-repeat: no-repeat;
        background-image: url(${PatternCurveBottomRight});
    }
  `}
`;

const Container = styled.div`
  position: absolute;
  top: 0;
  width: 100%;

  ${media.mobile`
    text-align: center;
    padding-top: 5.6rem;
    padding-left: 2.4rem;
    padding-right: 2.4rem;
  `}

  ${media.tabletOnly`
    padding: 5.6rem 4rem 0;
  `}

  ${media.desktop`
    padding-top: 6.5rem;
    width: 111rem;
    left: 50%;
    transform: translateX(-50%);
  `}
`;

const ReservationsContent = styled.div`
  ${media.mobile`
    margin-top: 4rem;
  `}

  ${media.tabletOnly`
    margin-top: 6.4rem;
    text-align: center;
    display: flex;
    flex-direction: column;
  `}

  ${media.desktop`
    margin-top: 15.3rem;
    display: flex;
    justify-content: space-between;
  `}

  .content-container {
    ${media.mobile`
      margin-bottom: 9.1rem;
    `}

    ${media.tabletOnly`
      margin-bottom: 4rem;
    `}

    ${media.desktop`
      max-width: 44.5rem;
    `}
  }

  .content-body {
    ${media.mobile`
      margin-top: 1.6rem;
      margin-right: auto;
      margin-bottom: 2.4rem;
      margin-left: auto;
      max-width: 50rem;
    `}

    ${media.tabletOnly`
      max-width: 57.3rem;
      margin-top: 1.6rem;
      margin-right: auto;
      margin-left: auto;
    `}

    ${media.desktop`
      margin-top: 2.4rem;
    `}
  }
`;

const ReservationsForm = styled.div`
  background-color: ${colors.white};
  box-shadow: ${theme.cardShadow};
  position: relative;

  ${media.desktop`
    &::after {
      content: ' ';
      left: 0;
      bottom: 0;
      z-index: -1;
      width: 16rem;
      height: 7.6rem;
      position: absolute;
      transform: translate(-8rem, 3.8rem);
      background-image: url(${PatternLines})
    }
  `}
`;

const Reservation = () => {
  const [count, setCount] = useState(4);

  const minusButton = () => setCount(count - 1);
  const plusButton = () => setCount(count + 1);

  const dropdownTrigger = () => {
    const dropdownMenu = document.getElementById('dropdown-menu');
    const dropdownArrow = document.getElementById('dropdown-arrow');
    const dropdownItems = document.querySelectorAll('.item');
    const selectedMeridiem = document.getElementById('selected-meridiem');

    dropdownMenu.classList.toggle('open');
    dropdownArrow.classList.toggle('open');

    dropdownItems.forEach((item) => {
      item.onclick = () => {
        selectedMeridiem.textContent = item.children[1].textContent;
        // remove the old checked class
        dropdownItems.forEach((oldItem) => {
          oldItem.children[0].classList.remove('checked');
        });
        // add the checked class to current clicked item
        item.children[0].classList.add('checked');
      };
    });
  };

  function formValidate() {
    //vars for form elements
    const name = document.querySelector("input[name='name']");
    const email = document.querySelector("input[name='email']");
    const month = document.querySelector("input[name='month']");
    const day = document.querySelector("input[name='day']");
    const year = document.querySelector("input[name='year']");
    const hour = document.querySelector("input[name='hour']");
    const minute = document.querySelector("input[name='minute']");
    const errors = document.querySelectorAll('p.errorMsg');
    const inputboxes = document.querySelectorAll('input.input-box');
    const datetimeFields = document.querySelectorAll('p.datetime-field-name');

    if (name.value === '') {
      errors[0].classList.add('show');
      inputboxes[0].classList.add('error');
    }
    if (email.value === '') {
      errors[1].classList.add('show');
      inputboxes[1].classList.add('error');
    }
    if (month.value === '' || day.value === '' || year.value === '') {
      errors[2].classList.add('show');
      datetimeFields[0].classList.add('error');
      if (month.value === '') {
        inputboxes[2].classList.add('error');
      }
      if (day.value === '') {
        inputboxes[3].classList.add('error');
      }
      if (year.value === '') {
        inputboxes[4].classList.add('error');
      }
    }
    if (hour.value === '' || minute.value === '') {
      errors[3].classList.add('show');
      datetimeFields[1].classList.add('error');
      if (hour.value === '') {
        inputboxes[5].classList.add('error');
      }
      if (minute.value === '') {
        inputboxes[6].classList.add('error');
      }
    }

    inputboxes.forEach((box, i) => {
      // remove error status when focus
      box.onfocus = () => {
        box.classList.remove('error');
        if (i === 0) {
          errors[0].classList.remove('show');
        } else if (i === 1) {
          errors[1].classList.remove('show');
        } else if (i > 1 && i < 5) {
          errors[2].classList.remove('show');
          datetimeFields[0].classList.remove('error');
        } else {
          errors[3].classList.remove('show');
          datetimeFields[1].classList.remove('error');
        }
      };
    });
  }

  const ReserveTable = () => {
    formValidate();
  };

  return (
    <main>
      <SectionReservation>
        <div className='bg-1'></div>
        <div className='bg-2'></div>
        <Container>
          <div className='logo'>
            <a href='/'>
              <img srcSet={Logo} alt='Dine Logo' />
            </a>
          </div>
          <ReservationsContent>
            <div className='content-container'>
              <h1 className='text-white'>Reservations</h1>
              <p className='text-white content-body'>
                We can't wait to host you. If you have any special requirements
                please feel free to call on the phone number below. We'll be
                happy to accommodate you.
              </p>
              <a className='btn btnDark reserve-place-button' href='#!'>
                Reserve Place
              </a>
            </div>

            <ReservationsForm className='form'>
              <div className='form-group input-field text-field'>
                <label className='sr-only' htmlFor='name'>
                  Name
                </label>
                <input
                  className='input-box'
                  type='text'
                  name='name'
                  id='name'
                  placeholder='Name'
                />
                <p className='errorMsg'>This field is required</p>
              </div>

              <div className='form-group input-field text-field'>
                <label className='sr-only' htmlFor=''>
                  Email
                </label>
                <input
                  className='input-box'
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Email'
                />
                <p className='errorMsg'>This field is required</p>
              </div>

              <div className='datetime-field'>
                <div className='datetime-container'>
                  <p className='t-form font-light datetime-field-name'>
                    Pick a date
                  </p>
                  <p className='errorMsg corner'>This field is incomplete</p>
                </div>
                <div className='input-containers'>
                  <div className='input-container'>
                    <label className='sr-only' htmlFor='month'>
                      Month
                    </label>
                    <input
                      className='input-box small'
                      type='text'
                      name='month'
                      id='month'
                      placeholder='MM'
                      maxLength='2'
                    />
                  </div>

                  <div className='input-container'>
                    <label className='sr-only' htmlFor='day'>
                      Day
                    </label>
                    <input
                      className='input-box small'
                      type='text'
                      name='day'
                      id='day'
                      placeholder='DD'
                      maxLength='2'
                    />
                  </div>

                  <div className='input-container'>
                    <label className='sr-only' htmlFor='year'>
                      Year
                    </label>
                    <input
                      className='input-box large'
                      type='text'
                      name='year'
                      id='year'
                      placeholder='YYYY'
                      maxLength='4'
                    />
                  </div>
                </div>
              </div>

              <div className='datetime-field'>
                <div className='datetime-container'>
                  <p className='t-form font-light datetime-field-name'>
                    Pick a time
                  </p>
                  <p className='errorMsg corner'>This field is incomplete</p>
                </div>
                <div className='input-containers'>
                  <div className='input-container'>
                    <label className='sr-only' htmlFor='hour'>
                      Hour
                    </label>
                    <input
                      className='input-box small'
                      type='text'
                      name='hour'
                      id='hour'
                      placeholder='10'
                      maxLength='2'
                    />
                  </div>

                  <div className='input-container'>
                    <label className='sr-only' htmlFor='minute'>
                      Minute
                    </label>
                    <input
                      className='input-box small'
                      type='text'
                      name='minute'
                      id='minute'
                      placeholder='00'
                      maxLength='2'
                    />
                  </div>

                  <div className='dropdown-container'>
                    <div
                      className='dropdown'
                      id='dropdown-trigger'
                      onClick={dropdownTrigger}
                    >
                      <div className='selected' id='selected-meridiem'>
                        AM
                      </div>
                      <div className='arrow' id='dropdown-arrow'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='18'
                          height='11'
                        >
                          <path
                            fill='none'
                            stroke='#9E7F66'
                            strokeWidth='2'
                            d='M1 1l8 8 8-8'
                          />
                        </svg>
                      </div>
                      <div className='dropdown items' id='dropdown-menu'>
                        <div className='item'>
                          <svg
                            className='dropdown-item checkmark checked'
                            xmlns='http://www.w3.org/2000/svg'
                            width='13'
                            height='11'
                          >
                            <path
                              fill='none'
                              stroke='#9E7F66'
                              strokeWidth='2'
                              d='M1 5.897l2.767 2.767L11.432 1'
                            />
                          </svg>
                          <p className='t-form font-regular'>AM</p>
                        </div>
                        <div className='item'>
                          <svg
                            className='dropdown-item checkmark'
                            xmlns='http://www.w3.org/2000/svg'
                            width='13'
                            height='11'
                          >
                            <path
                              fill='none'
                              stroke='#9E7F66'
                              strokeWidth='2'
                              d='M1 5.897l2.767 2.767L11.432 1'
                            />
                          </svg>
                          <p className='t-form font-regular'>PM</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='number-picker'>
                <button
                  className='number-picker-button'
                  id='minus'
                  onClick={minusButton}
                >
                  <span className='sr-only'>minus</span>
                  <svg xmlns='http://www.w3.org/2000/svg' width='7' height='3'>
                    <path fill='#9E7F66' d='M6.425 2.977V.601H.629v2.376z' />
                  </svg>
                </button>
                <p className='t-form font-bold'>
                  <span id='number-of-people'>{count}</span> people
                </p>
                <button
                  className='number-picker-button'
                  id='plus'
                  onClick={plusButton}
                >
                  <span className='sr-only'>plus</span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='10'
                    height='11'
                  >
                    <path
                      fill='#9E7F66'
                      d='M6.227 10.156V6.727h3.429V4.342H6.227V.913H3.842v3.429H.413v2.385h3.429v3.429z'
                    />
                  </svg>
                </button>
              </div>
              <button
                className='btn btnLight btnReservation'
                id='btn-reservation'
                onClick={ReserveTable}
              >
                Make Reservation
              </button>
            </ReservationsForm>
          </ReservationsContent>
        </Container>
      </SectionReservation>
    </main>
  );
};

export default Reservation;
