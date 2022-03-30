var button = document.getElementById('buttonOpenMenu')
var nav = document.getElementsByClassName('menu')[0]
var x = document.getElementById('x')

function events() {
    button.addEventListener('click', open_menu)
    x.addEventListener('click', close_menu)
}

function open_menu() {
    button.style.left = '155px'

    if (nav.style.minWidth) {
        nav.style.minWidth = null
        button.style.left = '0px'
        nav.style.paddingLeft = '0px'
    }

    else {
        nav.style.minWidth = nav.width = '125px'
        nav.style.paddingLeft = '30px'
    }
}

function close_menu() {
    nav.style.minWidth = null
    button.style.left = '0px'
    nav.style.paddingLeft = '0px'
}

window.addEventListener('load', events)
