import fetchImages from './apiService';

const form = document.querySelector('.input');
const gallery = document.querySelector('.gallery');

form.addEventListener('input', getImgByID);

function getImgByID(event) {
  clearValue();

  const countryName = event.target.value;
  if (!countryName) {
    return;
  }
}
