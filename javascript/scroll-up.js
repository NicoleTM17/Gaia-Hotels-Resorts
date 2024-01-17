
// Button for scrolling back to top


function chevronScrollUp(){

  const chevronBtn = document.querySelector('.chevron-up');
  // console.log(chevronBtn);

  chevronBtn.addEventListener('click', event => {
    // console.log(event);

    window.scrollTo(0,0);
  })

}

chevronScrollUp();
