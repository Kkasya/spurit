const setLazyload = (app) => {
  document.addEventListener('DOMContentLoaded', () => {

    const lazyloadImg = app.querySelectorAll('img.lazy');
    let lazyTimeout;

    const lazyload = () => {
      if (lazyTimeout) clearTimeout(lazyTimeout);

      lazyTimeout = setTimeout(() => {
        const scrollTop = window.pageYOffset;

        lazyloadImg.forEach((img) => {
          if (img.offsetTop < (window.innerHeight + scrollTop)) {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
          }
        });

        if (lazyloadImg.length === 0) {
          document.removeEventListener('scroll', lazyload);
          window.removeEventListener('resize', lazyload);
          window.removeEventListener('orientationchange', lazyload);
        }
      }, 20);
    };
    document.addEventListener('scroll', lazyload);
    window.addEventListener('resize', lazyload);
    window.addEventListener('orientationchange', lazyload);
  })
};

export {setLazyload};