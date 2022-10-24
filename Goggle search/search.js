let search = document.querySelector('.search');
let searchBtn = document.querySelector('.searchBtn');

searchBtn.onclick = function() {
    let url = "https://www.google.com/search?q=" + search.value;
    window.open(url);
}