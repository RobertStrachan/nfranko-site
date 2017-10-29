class Modal {
    constructor() {
        this.closeModalButton = $('.book__modal--close');
        this.openModalButton = $('.book__modal--open');
        this.modal = $('.book__description');
        this.events();
    }

    events() {
        // Clicking the open modal button
        this.openModalButton.click(this.openModal.bind(this));

        //clicking the close modal button
        this.closeModalButton.click(this.closeModal.bind(this));
    }

    openModal() {
        this.modal.addClass("book__description--is-visible");
        return false;
    }
    
    closeModal() {
        this.modal.removeClass("book__description--is-visible");
        return false;
    }

}

var modal = new Modal();






// const openModal = document.querySelector('.book__modal--open'),
// closeModal = document.querySelector('.book__modal--close'),
// modal = document.querySelector('.book_description');

// function openModalButton(modal) {
//     var modal = document.querySelector('.book__description');
//     modal.classList.add('book_description--is-visible');
// }

// openModal.addEventListener('click', function(){
//     openModalButton();
// });




