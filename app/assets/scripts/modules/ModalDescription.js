import $ from 'jquery';

class ModalDescription {
    constructor() {
        this.closeModalButton = $('.book__modal--close');
        this.openModalButton = $('.book__modal--open');
        this.modal = $('.book__description');
        // this.modal = document.getElementsByClassName('.book__description');
        this.events();
    }

    events() {

        // for(let i = 0, i < this.modal.length, i++) {
            this.openModalButton.click(this.openModal.bind(this));
            this.closeModalButton.click(this.closeModal.bind(this));
        // }

  

    }

    openModal() {
        this.modal.addClass("book__description--is-visible");
        return false;
    }
    
    closeModal() {
        this.modal.removeClass("book__description--is-visible");

    }

}

export default ModalDescription;
