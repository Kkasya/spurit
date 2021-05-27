import {VideoBlock, Popup} from "../components";
import {setLazyload} from "../common";

const App = () => {
  const popupIns = new Popup();
  const popup = popupIns.init();
  const showPopup = () => popupIns.changeIsPopup(true);
  //popupIns.destroy();

  const app = document.createElement('main');
  app.append(popup, VideoBlock(showPopup));

  setLazyload(app);

  return app;
};

export {App};