import {VideoContent} from "./video-content";

const VideoBlock = (showPopup) => {
	const wrapper = document.createElement('div');
	wrapper.className = 'wrapper';

	const videoBlock = document.createElement('div');
	videoBlock.className = 'wrapper__video-block';
	videoBlock.append(VideoContent(showPopup));

	wrapper.append(videoBlock);
	return wrapper;
};

export {VideoBlock};