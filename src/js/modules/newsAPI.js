import axios from 'axios';

const articlesApi = axios.create({
  baseURL: 'https://newsapi.org/v2/',
  headers: {
    'X-Api-Key': '13fd58a9941f4ecbbb0e5d0dbbde037c',
  },
});

export async function getArticles(query, currentPage) {
  const params = {
    q: query,
    page: currentPage,
    language: 'en',
    sortBy: 'popularity',
    pageSize: 10,
  };

  const res = await articlesApi.get('/everything', { params });
  return res.data;
}
