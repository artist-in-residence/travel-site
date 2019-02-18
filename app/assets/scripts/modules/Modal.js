import $ from 'jquery';

class Modal {
  constructor() {
  this.openModalButton = $(".open-modal");
  this.modal = $(".modal");
  this.closeModalButton = $(".modal__close");
  this.events();
  }


  events() {
  this.openModalButton.click(this.openModal.bind(this)); //click open modal button
  this.closeModalButton.click(this.closeModal.bind(this)); //click x close button
  $(document).keyup(this.keyPressHandler.bind(this));//pushes any key
}



  keyPressHandler(e) {
  if (e.keyCode == 27) {
    this.closeModal();
  }
}

  openModal() {
    this.modal.addClass("modal--is-visible");
    return false;
  }
  closeModal() {
    this.modal.removeClass("modal--is-visible");
  }

}

export default Modal;
