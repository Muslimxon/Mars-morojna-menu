document.addEventListener('DOMContentLoaded', () => {
    const morojnaButton = document.getElementById('main-menu');
    const suvlarButton = document.getElementById('bar');
    const morojnaContent = document.getElementById('morojna-content');
    const suvlarContent = document.getElementById('suvlar-content');

    morojnaButton.addEventListener('click', () => {
        morojnaButton.classList.add('active');
        suvlarButton.classList.remove('active');
        morojnaContent.classList.add('active');
        suvlarContent.classList.remove('active');
    });

    suvlarButton.addEventListener('click', () => {
        suvlarButton.classList.add('active');
        morojnaButton.classList.remove('active');
        suvlarContent.classList.add('active');
        morojnaContent.classList.remove('active');
    });
});
