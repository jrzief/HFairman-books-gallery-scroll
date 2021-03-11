const losBoxes = document.querySelectorAll('.gallery-image');
const elGallery = document.querySelector('.gallery');

let options = {
  //rootMargin: '0px',
  // root: document.body,
  threshold: 0.25
}

let observer = new IntersectionObserver((entries) => {
  entries.forEach(({ 
    target,
    boundingClientRect,
    intersectionRatio 
   }) => {                          //target: destrcutured from entry
    console.log(target, boundingClientRect);

    target.dataset.visible = intersectionRatio > 0.25;

    let viewportPosition = 1;
    if (intersectionRatio > 0.24) {
      viewportPosition = 0;
    } else if ( boundingClientRect.y < 0 ) {
      viewportPosition = -1;
    }

    target.dataset.viewportPosition = viewportPosition;

    //target.dataset.visible = intersectionRatio > 0.5;
    target.style.setProperty('--ix-ratio', intersectionRatio);
  });
}, options);

//observer.observe(document.querySelector('.gallery'));
losBoxes.forEach( elBox => {
  observer.observe(elBox);
})