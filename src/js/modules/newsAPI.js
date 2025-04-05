import axios from 'axios';

const articlesApi = axios.create({
  baseUrl: 'https://newsapi.org/v2/',
  headers: {
    'X-Api-Key': '13fd58a9941f4ecbbb0e5d0dbbde037c',
  },
});

export function getArticles() {}
