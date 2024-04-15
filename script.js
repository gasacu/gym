//MOBILE MENU TRIGGER BUTTON//
let $navTrigger = document.getElementById('navTrigger');
let $navMenu = document.getElementById('navMenu');

$navTrigger.addEventListener('click' , () => {
    $navMenu.classList.toggle('Active');
}, true);

// SHOW DROPDOWN MENU //
const dropdownItems = document.querySelectorAll('.Dropdown')

// Select each dropdown item
dropdownItems.forEach((item) =>{
    const dropdownButon = item.querySelector('.DropdownBtn')

    // Select each button click
    dropdownButon.addEventListener('click', () =>{
        // Select the current show-dropdown class
        const showDropdown = document.querySelector('.show-dropdown')

        // Call the toggleItem function
        toggleItem(item)

        // Remove the show-dropdown class from other items
        if(showDropdown && showDropdown!= item){
            toggleItem(showDropdown)
        }
    })
})

// Function to display the dropdown
const toggleItem = (item) =>{
    // Select each dropdown content
    const dropdownContainer = item.querySelector('.DropdownContainer')

    // If the same item contains the show-dropdown class , remove
    if(item.classList.contains('show-dropdown')){
        dropdownContainer.removeAttribute('style')
        item.classList.remove('show-dropdown')
    } else{
        // Add the maximum height to the dropdown content and add the show-dropdown class
        dropdownContainer.style.height = dropdownContainer.scrollHeight + 'px'
        item.classList.add('show-dropdown')
    }
}


//  DELETE DROPDOWN STYLES  //
const mediaQuery = matchMedia('(min-width: 750px')
    dropdownContainer = document.querySelectorAll('.DropdownContainer')

// Function to remove dropdown styles in mobile mode when browser resizes
const removeStyle = () => {
    // Validate if the media query reaches 750px
    if(mediaQuery.matches){
        //Remove the dropdown container height style
        dropdownContainer.forEach((e) =>{
            e.removeAttribute('style')
        })

        // Remove the show-dropdown class from dropdown item
        dropdownItems.forEach((e) =>{
            e.classList.remove('show-dropdown')
        })
    }
}

addEventListener('resize', removeStyle)


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

