import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getArticles } from './modules/newsAPI.js';
import { articlesTemplate } from './templates/render-functions.js';
//!======================================================

const refs = {
  formElem: document.querySelector('.js-search-form'),
  articleListElem: document.querySelector('.js-article-list'),
  btnLoadMore: document.querySelector('.js-btn-load'),
  loadElem: document.querySelector('.js-loader'),
};
