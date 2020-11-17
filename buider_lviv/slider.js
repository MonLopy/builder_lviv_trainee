$('.b-slider-main-photo').slick({
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    arrow: true,
    prevArrow: '.arrows-left-1',
    nextArrow: '.arrows-right-1',
    responsive: [{
            breakpoint: 1275,
            settings: {
                dots: true
            }
        },
        {
            breakpoint: 790,
            settings: {
                dots: true
            }
        }
    ]



});
let btnRight = document.querySelector(".arrows-right-1");
let i = 0;
let pl = document.querySelectorAll(".slide-choose-next-photo-points li");
let btnLeft = document.querySelector(".arrows-left-1");
btnRight.addEventListener("click", function() {
    if (i < 3) {

        pl[i].classList.remove("points-active");
        pl[i].classList.add("points-simple-point");
        pl[i + 1].classList.add("points-active");
        pl[i + 1].classList.remove("points-simple-point");
        i++;

    } else {

        pl[i].classList.remove("points-active");
        pl[i].classList.add("points-simple-point");

        pl[0].classList.add("points-active");
        pl[0].classList.remove("points-simple-point");
        i = 0;

    }


})


btnLeft.addEventListener("click", function() {
    if (i > 0) {

        pl[i - 1].classList.add("points-active");
        pl[i - 1].classList.remove("points-simple-point");
        pl[i].classList.remove("points-active");
        pl[i].classList.add("points-simple-point");
        i--;


    } else {
        i = 3;

        pl[0].classList.add("points-simple-point");
        pl[0].classList.remove("points-active");

        pl[i].classList.remove("points-simple-point");
        pl[i].classList.add("points-active");

    }

})