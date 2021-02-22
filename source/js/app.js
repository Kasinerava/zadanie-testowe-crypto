window.onload = function () {
    $('.team__list-container').slick({
        infinite: false,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        easing: true,
      });

    const overlay = document.getElementsByClassName('intro__video-overlay');
    const vid = document.getElementsByClassName('intro__video');

    if (overlay.addEventListener) {
        overlay.addEventListener("click", play, false)
    } else if (overlay.attachEvent) {
        overlay.attachEvent("onclick", play)
    }

    function play() {
        if (vid.paused) {
            vid.play();
            overlay.className = "o";
        } else {
            vid.pause();
            overlay.className = "";
        }
    }

    let modalOpen = document.querySelectorAll('.team__name');
    let modalClose = document.querySelector('.modal__img');
    let modalOverlay = document.querySelector('.modal__overlay')

    addEventListener("click", function(event) {
        event.preventDefault();
        modalOverlay.classList.remove("visible");     
        document.addEventListener("click", hide);
    });
        
};