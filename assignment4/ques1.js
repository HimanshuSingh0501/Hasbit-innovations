
function swapTheme() {
    const app = document.getElementById('app');
    if (app.classList.contains('day')) {
        app.classList.remove('day');
        app.classList.add('night');
    } else {
        app.classList.remove('night');
        app.classList.add('day');
    }
}