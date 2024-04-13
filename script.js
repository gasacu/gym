// Slider //
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlides(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("MySlides");
    var dots = document.getElementsByClassName("Dot");
    if (n > slides.length) { slideIndex = 1 }
    if(n < 1) { slideIndex = slides.length }
    for( i = 0; i < slides.length; i++ ) {
        slides[i].style.display = "none";
    }
    for ( i = 0; i < dots.length; i++ ) {
        dots[i].className = dots[i].className.replace(" active", "");
    } 
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

/*
// Auto Slide //
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("MySlides");
    for ( i = 0; i< slides.length; i ++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if(slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000);
    // change image every 3 seconds
}
*/

// Accordion Menu List //
const Accordion = document.getElementsByClassName('ContentBx');

for(i = 0; i<Accordion.length; i++) {
    Accordion[i].addEventListener('click', function(){
        this.classList.toggle('Active1')
    })
}

//MOBILE MENU TRIGGER BUTTON//
let $navTrigger = document.getElementById('navTrigger');
let $navMenu = document.getElementById('navMenu');

$navTrigger.addEventListener('click' , () => {
    $navMenu.classList.toggle('Active');
}, true);

// Desktop Second Menu Active //

document.querySelectorAll('.MainMenuLink').forEach(item => {
    item.addEventListener('click', function() {
        // Toogle active class to show or hide the sublist
        var sublist = this.nextElementSibling;
        if (sublist.classList.contains('Active')) {
            sublist.classList.remove('Active');
        } else {
            // Hide all other sublists
            document.querySelectorAll('.ContentBx').forEach(sub => {
                sub.classList.remove('Active');
            });
            // Show this sublist
            sublist.classList.add('Active');
        }
    });
});

document.addEventListener('click', function(event) {
    var navMenu = document.querySelector('.MainMenu');
    var clickedInsideNavMenu = navMenu.contains(event.target);

    if (!clickedInsideNavMenu) {
        //Clicked outside .MainMenu, so hide all sublists
        document.querySelectorAll('.ContentBx').forEach(sub => {
            sub.classList.remove('Active');
        });
    }
});