document.addEventListener("DOMContentLoaded", function () {
    let searchIcon = document.querySelector('.search_trigger');
    let searchBlock = document.querySelector('.search_fade_in');
    let close = document.querySelector('.close_search');

    searchIcon.addEventListener('click', function () {
        searchBlock.classList.remove('none');
    });

    close.addEventListener('click', function () {
        searchBlock.classList.add('none');
    });
});
