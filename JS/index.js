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




//document.onclick = function(event) {
//    let classes = [...event.target.classList];
//    console.log('classes: ' + classes + '; ' + 'id: ' + event.target.id + '; ' + 'tag-name: ' + event.target.tagName + ' | ' + event.target);
//}


//nav.onmouseover = function(event) {
//    if (event.target.classList.contains('mc')) {
//        event.target.style.backgroundColor = '#2e2e2e';
//    }
//        event.target.onmouseout = function() {
//        event.target.style.backgroundColor = null;
//    }
//}
//nav.onclick = function(event) {
//    if (event.target.classList.contains('mcAfter')) {
//        if (!event.target.classList.contains('mc-click')) {
//            event.target.classList.add('mc-click');
//            event.target.childNodes[1].style.display = 'block';
//            winCloseMc();
//        } else {
//            event.target.classList.remove('mc-click');
//            event.target.childNodes[1].style.display = 'none';
//        }
//    }
//}
btnActive('btn');


