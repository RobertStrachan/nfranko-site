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

        // this.modal.forEach(function(){
        //     var that = this;
        //     // Clicking the open modal button
        //     that.openModalButton.click(this.openModal.bind(this));
        
        //     //clicking the close modal button
        //     that.closeModalButton.click(this.closeModal.bind(this));
        
        // });
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

export default ModalDescription;
