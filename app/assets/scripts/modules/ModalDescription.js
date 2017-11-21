import $ from 'jquery';

class ModalDescription {
    constructor() {
        this.closeModalButton = $('.book__modal--close');
        this.openModalButton = $('.book__modal--open');
        this.modal = $('.book__description');
        this.events();
    }

    events() {
        var that = this;
        this.modal.each(function(i) {
            var currentBook = this;
            that.openModalButton[i].addEventListener('click', function(){
                $(currentBook).addClass("book__description--is-visible");
            });
            that.closeModalButton[i].addEventListener('click', function(){
                $(currentBook).removeClass("book__description--is-visible")
            });
        });
    }

}

export default ModalDescription;
