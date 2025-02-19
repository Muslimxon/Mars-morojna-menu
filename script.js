document.addEventListener('DOMContentLoaded', () => {
    const morojnaButton = document.getElementById('morojna-button');
    const suvlarButton = document.getElementById('suvlar-button');
    const morojnaContent = document.getElementById('morojna-content');
    const suvlarContent = document.getElementById('suvlar-content');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    const backButton = document.getElementById('back-button');

    morojnaButton.addEventListener('click', () => {
        morojnaButton.classList.add('active');
        suvlarButton.classList.remove('active');
        morojnaContent.classList.add('active');
        suvlarContent.classList.remove('active');
        resetSearch();
    });

    suvlarButton.addEventListener('click', () => {
        suvlarButton.classList.add('active');
        morojnaButton.classList.remove('active');
        suvlarContent.classList.add('active');
        morojnaContent.classList.remove('active');
        resetSearch();
    });

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        const activeContent = document.querySelector('.content.active');
        const cards = activeContent.querySelectorAll('.card_1');
        searchResults.innerHTML = '';

        if (query) {
            cards.forEach(card => {
                const title = card.querySelector('h1').textContent.toLowerCase();
                if (title.includes(query)) {
                    const resultItem = document.createElement('div');
                    resultItem.textContent = title;
                    resultItem.addEventListener('click', () => {
                        searchInput.value = title;
                        filterCards(query);
                        searchResults.innerHTML = '';
                    });
                    searchResults.appendChild(resultItem);
                }
            });

            backButton.classList.remove('hidden');
        } else {
            searchResults.innerHTML = '';
            backButton.classList.add('hidden');
        }
    });

    backButton.addEventListener('click', () => {
        resetSearch();
        backButton.classList.add('hidden');
    });

    function filterCards(query) {
        const activeContent = document.querySelector('.content.active');
        const cards = activeContent.querySelectorAll('.card_1');
        cards.forEach(card => {
            const title = card.querySelector('h1').textContent.toLowerCase();
            if (title.includes(query)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    function resetSearch() {
        searchInput.value = '';
        searchResults.innerHTML = '';
        const cards = document.querySelectorAll('.content.active .card_1');
        cards.forEach(card => card.style.display = 'block');
    }
});
