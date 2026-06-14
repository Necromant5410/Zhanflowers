const modal = document.getElementById('modal')
const openBtn = document.querySelector('.vacancy-form-button')

const openModal = () => {
    modal.style.display = 'flex'
    document.body.classList.add('no-scroll')
}

const closeModal = () => {
    modal.style.display = 'none'
    document.body.classList.remove('no-scroll')
}

openBtn.addEventListener('click', openModal)

modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal()
})

window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search)
    if (urlParams.get('success') === '1') {
        const popup = document.getElementById('form-success-popup')
        if (popup) {
            popup.style.display = 'block'
            window.history.replaceState({}, document.title, window.location.pathname)
        }
    }
}) 