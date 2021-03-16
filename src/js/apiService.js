const API_BASE = 'https://pixabay.com/api/?key=';
const API_KEY = '20710280-32e8ecf65799bd35d240b13ea';

function fetchImages(img) {
  return fetch(`${API_BASE}${API_KEY}`)
    .then(res => res.json())
    .then(console.log);
}

export default fetchImages;
