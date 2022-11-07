const btnOff = document.querySelector('.scroll-off');
const btnOn = document.querySelector('.scroll-on');
const body = document.body;

function disableScrolll(){
    let pagePosition = window.scrollY;
    body.classList.add('disable-scroll');
    body.dataset.position = pagePosition;
    body.style.top = -pagePosition + 'px';
}

function enableScrolll(){
    let pagePosition = parseInt(body.dataset.position, 10);
    body.style.top = 'auto';
    body.classList.remove('disable-scroll');
    window.scroll({top: pagePosition, left: 0});
    body.removeAttribute('data-position');
}

btnOff.addEventListener('click', (e) => {
    disableScrolll();
    e.currentTarget.style.pointerEvents = 'none';
    btnOn.style.pointerEvents = 'auto';
})

btnOn.addEventListener('click', (e) => {
    enableScrolll();
    e.currentTarget.style.pointerEvents = 'none';
    btnOff.style.pointerEvents = 'auto';
})