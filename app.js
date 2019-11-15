let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    // dots[slideIndex - 1].className += " active";

    setTimeout(showSlides, 5000);
}
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}

// let myIndex = 0;
// carousel();

// function carousel() {
//     let i;
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }

//     myIndex++;
//     if (myIndex > slides.length) {
//         myIndex = 1
//     }
//     slides[myIndex - 1].style.display = "block";

//     setTimeout(carousel, 5000);
// }


/// - NAV BAR Functionlity 
function scanDocument() {
    let sectionList = document.querySelectorAll(".hidden");
    sectionList.forEach(function (section) {
        if (isVisible(section)) {
            section.classList.remove('hidden');
        };
    });
}

document.addEventListener("scroll", _.throttle(scanDocument, 200));

var scrollPositionY = window.scrollY;

window.addEventListener('scroll', function () {
    var navBar = document.querySelector(".navigation");
    scrollPositionY = window.scrollY;
    if (scrollPositionY >= 700) {
        navBar.classList.add('sticky');
    } else {
        navBar.classList.remove('sticky');
    }
});



//************ON LOAD Spinner */

let spinnerWrapper = document.getElementById("spinner-wrapper");
let body = document.querySelector('body');

// body.style.height = '0px';
window.addEventListener('load', function(){
    
    spinnerWrapper.style.display = 'none';
});