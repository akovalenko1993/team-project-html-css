(() => {
  const refs = {
    openMenuBtn: document.querySelector('.mobile-menu__open'),
    closeMenuBtn: document.querySelector('.mobile-menu__close'),
    closeMenuLink: document.querySelectorAll('.mob-menu__link'),
    menu: document.querySelector('.mobile-menu'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuLink.forEach( n => n.addEventListener('click', toggleMenu));

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  }
})();