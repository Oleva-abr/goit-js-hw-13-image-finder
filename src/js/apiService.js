const API_KEY = '20710280-32e8ecf65799bd35d240b13ea';
const API_URL = 'https://pixabay.com/api';

export default class ImgApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }
  // https://pixabay.com/api/?image_type=photo&orientation=horizontal&qcat&page=1&per_page=12&key=20710280-32e8ecf65799bd35d240b13ea
  // https://pixabay.com/api/?image_type=photo&orientation=horizontal&qcat&page=1&per_page=12&key=20710280-32e8ecf65799bd35d240b13ea
  fetchArticles() {
    const url = `${API_URL}/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`;
    return fetch(url)
      .then(res => res.json())
      .then(data => {
        this.page += 1;

        return data;
      });
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(str) {
    this.searchQuery = str;
  }
}
