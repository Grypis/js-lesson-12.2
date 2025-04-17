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

let query = '';
let currentPage = 1;
let maxPage = 1;
const perPage = 10;

//!======================================================
refs.formElem.addEventListener('submit', async e => {
  e.preventDefault();

  query = e.target.elements.query.value.trim();
  currentPage = 1;
  const data = await getArticles(query, currentPage);
  maxPage = Math.ceil(data.totalResults / perPage);
  const markup = articlesTemplate(data.articles);
  refs.articleListElem.innerHTML = markup;
  updateBtnStatus();
});

refs.btnLoadMore.addEventListener('click', async () => {
  currentPage++;
  const data = await getArticles(query, currentPage);
  const markup = articlesTemplate(data.articles);
  refs.articleListElem.insertAdjacentHTML('beforeend', markup);
  updateBtnStatus();
});

//!======================================================
function updateBtnStatus() {
  if (currentPage >= maxPage) {
    hideLoadBtn();
  } else {
    showLoadBtn();
  }
}

function showLoadBtn() {
  refs.btnLoadMore.classList.remove('hidden');
}
function hideLoadBtn() {
  refs.btnLoadMore.classList.add('hidden');
}
