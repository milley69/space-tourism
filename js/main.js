let navButton = document.querySelector('.nav-menu')
let navUl = document.querySelector('ul')
let navUlLi = Array.from(document.querySelectorAll('ul li'))

function closeNav() {
    navButton.classList.toggle('nav-menu-open')
    navButton.classList.toggle('nav-menu-close')
    navUl.classList.add('nav-open-fade')
    setTimeout(() => {
        navUl.classList.remove('nav-open')
        navUl.classList.remove('nav-open-fade')
    }, 500)
}

navButton.addEventListener('click', () => {
    if (navButton.classList.contains('nav-menu-open')) {
        navButton.classList.toggle('nav-menu-open')
        navButton.classList.toggle('nav-menu-close')
        navUl.classList.add('nav-open')
    } else if (navButton.classList.contains('nav-menu-close')) {
        closeNav()
    }
})
navUlLi.map(li => {
    li.addEventListener('click', () => closeNav())
})