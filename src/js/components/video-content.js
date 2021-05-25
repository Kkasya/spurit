const VideoContent = () => {
	const videoContent = document.createElement('div');
	videoContent.className = 'content';

	const rectangle = document.createElement('div');
	rectangle.className = 'content__rectangle';

	videoContent.append(rectangle);

	return videoContent;
};

export {VideoContent};