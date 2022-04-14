const btnBackToTop = document.getElementById('btnBackToTop')

if(btnBackToTop) {
    btnBackToTop.addEventListener('click', e => {
        e.preventDefault()
        window.scrollTo(0, 0);
    });  
}


