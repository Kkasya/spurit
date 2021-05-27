import {TITLE1, TITLE2, TITLE3} from "../common";

const VideoContent = (showPopup) => {
	const videoContent = document.createElement('div');
	videoContent.className = 'content';

	const rectangle = document.createElement('div');
	rectangle.className = 'content__rectangle';

	const title = document.createElement('p');
	const titleStart = document.createElement('span');
	titleStart.append(TITLE1);
	titleStart.className = 'content__title-common';

	const titleEnd = document.createElement('span');
	titleEnd.append(TITLE3);
	titleEnd.className = 'content__title-common';

	const titleMiddle = document.createElement('span');
	titleMiddle.append(TITLE2);
	titleMiddle.className = 'content__title-middle';

	title.append(titleStart, titleMiddle, titleEnd);

	const playBtn = document.createElement('button');
	playBtn.className = 'content__btn-play';
	playBtn.addEventListener('click', showPopup);

	videoContent.append(rectangle, title, playBtn);

	return videoContent;
};

export {VideoContent};