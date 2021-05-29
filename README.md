# spurit
## To connect the library to your project - include _popup.js, create a new instance and call init() on it. 
## Then hang event `() => popupIns.changeIsPopup(true)` on the button Play.
###  const popupIns = new Popup();
###  const popup = popupIns.init();
###  const showPopup = () => popupIns.changeIsPopup(true);

## To disable the library - call `destroy()`.
