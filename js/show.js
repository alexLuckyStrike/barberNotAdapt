
(function() {

    let way = document.querySelector('.button--way');
    let show = document.querySelector('.modal-map');
    let mapClose = document.querySelector('.modal-map__close');

    way.addEventListener('click', function (e) {
        e.preventDefault();
        show.classList.add('modal-show');
    });

    mapClose.addEventListener('click', function (e) {
        e.preventDefault();
        show.classList.remove('modal-show');
    });

}());