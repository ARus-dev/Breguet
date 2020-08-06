const nav = document.querySelector('.header__nav')
const burgers = document.querySelectorAll('.header__burger')

for(let burger of burgers) {
    burger.addEventListener('click', () => {
        nav.classList.toggle('header__nav_active')
        burger.classList.toggle('header__burger_active')
    })
}