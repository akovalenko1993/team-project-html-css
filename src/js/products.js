(() => {
  const refsProducts = {
    openProductsBtn: document.querySelector('[data-product-open]'),
    blaBlaBla: document.querySelector('[data-product]'),
  };

  refsProducts.openProductsBtn.addEventListener('click', toggleProducts);


  function toggleProducts() {
    refsProducts.blaBlaBla.classList.toggle('is-shown');
  }
})();
