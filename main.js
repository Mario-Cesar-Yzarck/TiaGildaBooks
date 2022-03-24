const btnBackToTop = document.getElementById('btnBackToTop')

btnBackToTop.addEventListener('click', e => {
    e.preventDefault()
    window.scrollTo(0, 0);
});
