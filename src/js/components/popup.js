import {VIDEO, YOUTUBE} from "../common";

const Popup = (changeIsPopup) => {


	document.addEventListener('keydown', (e) => {
		e.preventDefault();
		console.log(e.key)
		if(e.key === 'Escape') changeIsPopup();
	})

	const popup = document.createElement('div');
	popup.className = 'popup hidden';

	const count = VIDEO.length;
	const numberVideo = Math.floor(Math.random() * count);

	const frame = document.createElement('iframe');
	frame.width = '70%';
	frame.height = '70%';
	frame.src = `${YOUTUBE}${VIDEO[numberVideo]}`;
	frame.className = 'popup__frame';


	const closeBtn = document.createElement('div');
	closeBtn.className = 'close-btn';
	closeBtn.addEventListener('click', () => {
		console.log('--') ;
			return changeIsPopup()
			});

	popup.append(closeBtn, frame);
	return popup;
};

export {Popup};