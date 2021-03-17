import ImgApiService from './apiService';
import imageTpl from '../templates/imgCards.hbs';

import { error } from '@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

const imgApiService = new ImgApiService();

const form = document.querySelector('.input');
const gallery = document.querySelector('.gallery');
// const submit = document.querySelector('.submit');
const loadBtn = document.querySelector('[data-action="load-more"]');

form.addEventListener('submit', onSearch);
loadBtn.addEventListener('click', onLoadMore);

function onSearch(event) {
  event.preventDefault();
  const searchQuery = event.currentTarget;
  imgApiService.query = searchQuery.query.value;
  //   if (!imgApiService.query) {
  //     return;
  //   }
  if (imgApiService.query === '') {
    error({
      text: 'Please enter something!',
    });
    return;
  }

  if (imgApiService.query.length === 0) {
    error({
      text: 'Please enter a more specific query!',
    });
    return;
  }

  imgApiService.resetPage();
  imgApiService.fetchArticles().then(data => {
    clearGallery();
    createGalleryMarkup(data);
    console.log(data);
  });
}

function clearGallery() {
  gallery.innerHTML = '';
}

function createGalleryMarkup(data) {
  gallery.insertAdjacentHTML('beforeend', imageTpl(data));
}
