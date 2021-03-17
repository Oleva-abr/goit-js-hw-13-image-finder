const API_KEY = '20669309-c97d1ec468a66ad87fd39e114';
const BASE_URL = 'https://pixabay.com/api';

export default class ImgApiService {
  constructor() {
    this.query = '';
    this.page = 1;
  }

  fetchArticles() {
    const url = `${BASE_URL}/?key=${API_KEY}&image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12`;

    return fetch(url)
      .then(response => response.json())
      .then(data => {
        this.page += 1;
        return data;
      });
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.query;
  }

  set query(newquery) {
    this.query = newquery;
  }
}
