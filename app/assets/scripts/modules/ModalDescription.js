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
        for( var i = 0; i < this.openModalButton.length; i++) {
            var current = i,
                that = this;
            this.openModalButton[i].addEventListener('click', function() {
                that.modal[current].addClass("book__description--is-visible").bind(this);
            });  
        }
            // this.openModalButton.click(this.openModal.bind(this));
            // this.closeModalButton.click(this.closeModal.bind(this));

    }

    openModal() {
        this.modal.addClass("book__description--is-visible");
        return false;
    }
    
    closeModal() {
        this.modal.removeClass("book__description--is-visible");

    }

    toggleDescription() {
        this.modal.toggleClass("book__description--is-visible");
    }

}

export default ModalDescription;
