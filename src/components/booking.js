




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
