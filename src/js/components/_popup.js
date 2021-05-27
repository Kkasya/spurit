import {VIDEO, YOUTUBE} from "../common";

const count = VIDEO.length;
const frame = document.createElement('iframe');
frame.className = 'popup__frame';
frame.loading = 'lazy';

const closeBtn = document.createElement('div');
closeBtn.className = 'close-btn';

class Popup {
  constructor() {
    this.isPopup = false;
    this.isWork = true;
    this.popup = document.createElement('div');
    this.popup.className = 'popup hidden';

    this.closeListener = () => this.changeIsPopup(false);
    this.escListener = (e) => {
      console.log(e.target)
      if (e.key === 'Escape') this.changeIsPopup(false)
    };
  }

  changeIsPopup(isPopup) {
    if (this.isWork) {

      const popup = document.querySelector('.popup');
      const frame = document.querySelector('.popup__frame');
      const numberVideo = Math.floor(Math.random() * count);
      frame.src = `${YOUTUBE}${VIDEO[numberVideo]}`;

      if (isPopup) {
        popup.classList.remove('hidden');
        window.parent.check();
        frame.addEventListener("blur", frame.focus);
        frame.focus();
      } else {
        popup.classList.add('hidden');
        frame.removeEventListener("blur", frame.focus);
      }
    }
  }

  init() {
    closeBtn.addEventListener('click', this.closeListener);
    document.addEventListener('keydown', this.escListener);

    this.popup.append(closeBtn, frame);
    return this.popup;
  }

  destroy() {
    this.isWork = false;
    closeBtn.removeEventListener('click', this.closeListener);
    document.removeEventListener('keydown', this.escListener);
  }
}

export {Popup};