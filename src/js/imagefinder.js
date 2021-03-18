import ImgApiService from './apiService.js';
import imageTpl from '../templates/imgCards.hbs';

import { error } from '@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

const imgApiService = new ImgApiService();

const form = document.querySelector('.search');
const gallery = document.querySelector('.gallery');

const loadBtn = document.querySelector('[data-action="load-more"]');

form.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();

  imgApiService.query = e.currentTarget.elements.query.value;
  console.log(imgApiService.query);
  if (!imgApiService.query) {
    return;
  }
  if (imgApiService.query === '') {
    error({
      text: 'Please enter something!',
    });
    return;
  }

  if (imgApiService.query.trim().length === 0) {
    error({
      text: 'Please enter a more specific query!',
    });
    return;
  }

  imgApiService.resetPage();
  imgApiService.fetchArticles().then(data => {
    clearGallery();
    createGalleryMarkup(data);
  });

  showButton();
}

function clearGallery() {
  gallery.innerHTML = '';
}

function createGalleryMarkup(data) {
  gallery.insertAdjacentHTML('beforeend', imageTpl(data));
}

// ======================Load Button=====================================

loadBtn.addEventListener('click', onLoadMore);

function onLoadMore() {
  imgApiService.fetchArticles().then(data => {
    createGalleryMarkup(data);
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  });
}

function showButton() {
  loadBtn.classList.remove('is-hidden');
}
