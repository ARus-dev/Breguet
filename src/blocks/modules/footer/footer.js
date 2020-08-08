const selectLanguage = document.querySelector('#selectLanguage')
const languages = document.querySelector('.languages')

selectLanguage.addEventListener('click', () => {
    languages.classList.toggle('languages_active')
})