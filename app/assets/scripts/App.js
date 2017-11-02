import ModalDescription from './modules/ModalDescription';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';

var mobileMenu = new MobileMenu();
var revealOnScroll = new RevealOnScroll();

var modalDescription = new ModalDescription();


// var openButton = document.getElementsByClassName("book__modal--open"),
//     closeButton = document.getElementsByClassName("book__modal--close"),
//     bookDescription = document.getElementsByClassName("book__description");

// function showDescription() {
//     for(var i = 0; i < bookDescription.length; i++) {
//         var count = i;
//         openButton[count].addEventListener('click', function(){
//             bookDescription[count].classList.add('book__description--is-visible');
//         });
//     }
// }

// showDescription();