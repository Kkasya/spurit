import {VideoBlock} from "../components";

const App = () => {

	const hi = document.createElement('span');
	hi.innerHTML = 'Hi';
	const app = document.createElement('div');
	app.append(VideoBlock());
	return app;
};

export {App};