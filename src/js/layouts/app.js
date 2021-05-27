import {VideoBlock, Popup} from "../components";

const App = () => {
	let isPopup = false;

	const hi = document.createElement('span');
	hi.innerHTML = 'Hi';
	const app = document.createElement('main');


	const changeIsPopup = () => {


		const popup = document.querySelector('.popup');
		isPopup = !isPopup;
		console.log(isPopup)
		if (isPopup) {
			popup.classList.remove('hidden');
		}
		else popup.classList.add('hidden');
	}

	app.append(Popup(changeIsPopup));
	app.append(VideoBlock(changeIsPopup));
	return app;
};

export {App};