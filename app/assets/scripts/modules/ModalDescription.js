import $ from 'jquery';

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

export default Modal;
