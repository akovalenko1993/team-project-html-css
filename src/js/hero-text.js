

 document.addEventListener('DOMContentLoaded', () => {

  const button = document.querySelector('.after-text__button')
  const thumb = document.querySelector('.text-thumb')

  button.addEventListener('click', () => {
    thumb.classList.toggle('show-text') 
  })

  window.addEventListener('click', e => {
    const target = e.target 
    if (!target.closest('.text-thumb') && !target.closest('.after-text__button')) {
      thumb.classList.remove('show-text')
    }
  })

})