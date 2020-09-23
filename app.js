'use strict';

const navBtns = document.querySelector('.nav-buttons');
const searchBtn = navBtns.querySelector('.js-btn-search');
const searchInput = navBtns.querySelector('.js-input-search');

function showSearchInput() {
  searchInput.classList.contains('show')
    ? searchInput.classList.remove('show')
    : searchInput.classList.add('show');
}

function init() {
  searchBtn.addEventListener('click', showSearchInput);
}

init();
