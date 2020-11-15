let btnRight = document.querySelector(".right-1");
let slider = document.querySelectorAll(" .main-photo img");
let i = 0;
let pl = document.querySelectorAll(".points li");
let btnLeft = document.querySelector(".left-1");

btnRight.addEventListener("click", function() {
    if (i <= 3) {
        slider[i].classList.remove("block");
        slider[i + 1].classList.add("block");
        pl[i].classList.remove("active");
        pl[i].classList.add("p");
        pl[i + 1].classList.add("active");
        pl[i + 1].classList.remove("p");
        i++;

    } else {
        i = 0;
        slider[i].classList.remove("block");
        slider[i + 1].classList.add("block");
        pl[i].classList.remove("active");
        pl[i].classList.add("p");

        pl[i + 1].classList.add("active");
        pl[i + 1].classList.remove("p");

    }


});


btnLeft.addEventListener("click", function() {
    if (i >= 0) {
        slider[i - 1].classList.add("block");
        slider[i].classList.remove("block");
        pl[i - 1].classList.add("active");
        pl[i - 1].classList.remove("p");
        pl[i].classList.remove("active");
        pl[i].classList.add("p");
        i--;


    } else {
        i = 4;
        slider[i - 1].classList.add("block");
        slider[i].classList.remove("block");
        pl[i - 1].classList.add("p");
        pl[i - 1].classList.remove("active");

        pl[i].classList.remove("p");
        pl[i].classList.add("active");

    }

});