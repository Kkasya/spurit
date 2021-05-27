import {VideoContent} from "./video-content";

const VideoBlock = (showPopup) => {

  const maskImg = document.createElement('img');
  maskImg.src = 'public/images/mask.png';
  maskImg.setAttribute('data-src','public/images/mask.png');
  maskImg.className = 'background lazy';

  const background = document.createElement('img');
  background.src = 'public/images/video-block.png';
  background.setAttribute('data-src', 'public/images/video-block.png');
  background.className = 'background lazy';

  const videoBlock = document.createElement('div');
  videoBlock.className = 'wrapper__video-block';
  videoBlock.append(maskImg, background, VideoContent(showPopup));

  const wrapper = document.createElement('div');
  wrapper.className = 'wrapper';
  wrapper.append(videoBlock);

  return wrapper;
};

export {VideoBlock};