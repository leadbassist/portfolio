// arrange the slides next to one another
// when i click left or right, move slides accordingly
// when i click the nav indicators, move to that slide

const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;
// paste code right under this line...
// arrange the slides next to one another

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};

slides.forEach(setSlidePosition);
// or

// slides.forEach((slide, index) => {
//     slide.style.left = slideWidth * index + 'px';
// })

// or

// slides[0].style.left = slideWidth * 0 + 'px';
// slides[1].style.left = slideWidth * 1 + 'px';
// slides[2].style.left = slideWidth * 2 + 'px';

// ---------------------------------------------------------------------


// when I click left or right, the slide moves accordingly

const moveToSlide = (track, currentSlide, targetSlide) => {
    // move to the prev slide
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';

    // this will MOVE the "current-slide" class between the different <li> tags
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
};

// change the nav button color when we click on it or when we click the arrows
const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}

const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
    if (targetIndex === 0) {
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    } else if (targetIndex === slides.length - 1) {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');
    } else {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
}

// when i click left, move slides to the left
prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);

    moveToSlide(track, currentSlide, prevSlide);
    // update the nav button colors when we click on left arrow
    updateDots(currentDot, prevDot);

    // left arrow will disappear when we are at far left
    hideShowArrows(slides, prevButton, nextButton, prevIndex);
});

// when i click right, move slides to the right
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);

    moveToSlide(track, currentSlide, nextSlide);
    // update the nav button colors when we click on right arrow
    updateDots(currentDot, nextDot);

    // right arrow will disappear when we are at far right
    hideShowArrows(slides, prevButton, nextButton, nextIndex);
})

// OR

// // when i click left, move slides to the left
// prevButton.addEventListener('click', e => {
//     // find what the current slide is
//     const currentSlide = track.querySelector('.current-slide');
//     // find what the prev slide is
//     const prevSlide = currentSlide.previousElementSibling;
//     //move current slide by the following amount of the prev slide
//     const amountToMove = prevSlide.style.left;
    
//     // move to the prev slide
//     track.style.transform = 'translateX(-' + amountToMove + ')';

//     // this will MOVE the "current-slide" class between the different <li> tags
//     currentSlide.classList.remove('current-slide');
//     prevSlide.classList.add('current-slide');
// })

// // when i click right, move slides to the right
// nextButton.addEventListener('click', e => {
//     // find what the current slide is
//     const currentSlide = track.querySelector('.current-slide');
//     // find what the next slide is
//     const nextSlide = currentSlide.nextElementSibling;
//     //move current slide by the following amount of the next slide
//     const amountToMove = nextSlide.style.left;
    
//     // move to the next slide
//     track.style.transform = 'translateX(-' + amountToMove + ')';

//     // this will MOVE the "current-slide" class between the different <li> tags
//     currentSlide.classList.remove('current-slide');
//     nextSlide.classList.add('current-slide');
// })

// -----------------------------------------------------------------

// when i click the nav indicators, move to that slide

// what indicator was clicked on?
dotsNav.addEventListener('click', e => {
    const targetDot = e.target.closest('button');

    // if we click anywhere outside the nav buttons, stop and exit out of the function
    if (!targetDot) return;
    // otherwise, continue on with this function:
    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');

    // targetIndex will recognize WHICH nav button we clicked
    // these buttons are inside an array under "dots" variable
    // we will use the index position to recognize which nav button we clicked
    // findIndex will do that. its like a LOOP where it will bring out the index which matches
    // the targetDot, the button we clicked.
    const targetIndex = dots.findIndex(dot => dot === targetDot)

    // using that index, we get the slide
    const targetSlide = slides[targetIndex];
    moveToSlide(track, currentSlide, targetSlide);

    // update the nav button colors when we click on them
    updateDots(currentDot, targetDot);

    // left/right arrows will appear/disappear depending on which nav button we click
    hideShowArrows(slides, prevButton, nextButton, targetIndex);
})






// console.log(track);