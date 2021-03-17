const API_URL = 'https://pixabay.com/api';
const API_KEY = '20710280-32e8ecf65799bd35d240b13ea';

async function fetchImages(imgId) {
  return fetch(`${API_URL}/?key=${API_KEY}/${imgId}`).then(res => {
    if (!res.ok) {
      return Promise.reject('No image found');
    }
    return res.json();
  });
}
export default fetchImages;
