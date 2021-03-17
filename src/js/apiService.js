const API_BASE = 'https://pixabay.com/api/?key=';
const API_KEY = '20710280-32e8ecf65799bd35d240b13ea';

async function fetchImages(img) {
const response = fetch(`${API_BASE}${API_KEY}`);
const images = response.json();
  return images;
}

export default fetchImages;
