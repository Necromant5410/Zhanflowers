function openModal() {
    document.getElementById('modal').style.display = 'flex';
    document.body.classList.add('no-scroll');
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
    document.body.classList.remove('no-scroll');
}
document.getElementById('modal').addEventListener('click', function(e) {
    if (e.target === this) {
      closeModal();
    }
});

window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === '1') {
        const popup = document.getElementById('form-success-popup');
        if (popup) {
            popup.style.display = 'block';

            window.history.replaceState({}, document.title, window.location.pathname);
        }
    }
});