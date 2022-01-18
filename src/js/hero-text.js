(() => {
  const refs = {
    openTextBtn: document.querySelector('[data-modal_text-open]'),
    text: document.querySelector('[data-text-thumb]')

    
  };

    refs.openTextBtn.addEventListener('click', toggleText);

  function toggleText() {
    refs.text.classList.toggle('show-text');
  }

 $(document).mouseup(function (e){  
  var div = $(".text-thumb");  //класс элемента вне которого клик
  if (!div.is(e.target) && div.has(e.target).length === 0) {  
          div.removeClass('show-text');  
  }
});
})();