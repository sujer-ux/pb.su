nav.onclick = navTabs;
function navTabs(event) {
    let id = event.target.id;
    function open(elemId) {
        let elem = document.getElementById(elemId);
        if (elem.classList.contains('mc-after')) {
            if (!elem.classList.contains('mc-click')) {
                elem.classList.add('mc-click');
                elem.style.backgroundColor = '#2e2e2e';
                elem.style.boxShadow = 'rgba(0, 0, 0, 0.43) 0px 0px 8px';
                elem.querySelector('div').style.maxHeight = '1000px';
                elem.querySelector('div').classList.add('menu-active');
                close(elem);
            } else {
                elem.classList.remove('mc-click');
                elem.querySelector('div').classList.remove('menu-active');
                elem.style.backgroundColor = null;
                elem.style.boxShadow = null;
                elem.querySelector('div').style.maxHeight = null;
            }
        }
    }
    open(id);
    function close(elem) {
        document.onclick = function(event) {
            if (!event.target.classList.contains('mc-click')) {
                elem.classList.remove('mc-click'); 
                elem.querySelector('div').classList.remove('menu-active');
                elem.style.backgroundColor = null;
                elem.style.boxShadow = null;
                elem.querySelector('div').style.maxHeight = null;
            }

        }
    }
}

const player = document.querySelector('.player'),
      expBtn = player.querySelector('.play-list-btn'),
      epxPlayer = player.querySelector('.main-player'),
      wallpaper = player.querySelector('.image-track'),
      sticky = player.querySelector('.sticky');

expBtn.onclick = function() {
    if (!this.classList.contains('exp')) {
        player.classList.add('player-full');
        this.classList.add('exp')
    } else {
        player.classList.remove('player-full');
        this.classList.remove('exp');
    }
};





epxPlayer.addEventListener('scroll', function() {
    let eHeight = wallpaper.clientHeight,
        scrollHeight = epxPlayer.scrollTop;

//    sticky.style.transform = 'translateY(' + scrollHeight + 'px)';
//    wallpaper.style.height = scrollHeight + 'px';
    
});










btnActive('btn');


