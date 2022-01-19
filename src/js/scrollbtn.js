(() => {

    const scrollBtn = document.querySelector('.scroll-top')

window.onscroll = () => {
    if (window.scrollY > 410) {
        scrollBtn.classList.remove('scroll-top_hide');
    } else if (window.scrollY < 410) {
        scrollBtn.classList.add('scroll-top_hide');
    }
    };
    
    scrollBtn.onclick = () => {
        window.scrollTo(0, 0);
}
})();