import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { createGalleryCardTemplate } from './js/render-functions.js';
import { fetchPhotos } from './js/pixabay-api.js';

const searchForm = document.querySelector('.js-search-form');
const userList = document.querySelector('.user-list');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.js-load-more');
const galleryLightbox = new SimpleLightbox('.user-list a', {});
let currentPage = 35;
let searchedValue = '';
let cardHeight = 0;

const onSearchFormSubmit = async event => {
  try {
    userList.innerHTML = '';
    event.preventDefault();
    loader.classList.remove('is-hidden');
    loadMoreBtn.classList.add('is-hidden');
    searchedValue = searchForm.elements.user_query.value;
    currentPage = 1;
    const response = await fetchPhotos(searchedValue, currentPage);
    if (response.data.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      userList.innerHTML = '';
      return;
    }
    console.log(response);
    const galleryCardsTemplate = response.data.hits
      .map(imgDetails => createGalleryCardTemplate(imgDetails))
      .join('');
    userList.innerHTML = galleryCardsTemplate;
    galleryLightbox.refresh();
    loadMoreBtn.classList.remove('is-hidden');
  } catch (error) {
    iziToast.error({
      message:
        'Sorry, there was a problem with your request. Please try again!',
      position: 'topRight',
    });
  } finally {
    loader.classList.add('is-hidden');
  }
};
const onLoadMoreBtnClick = async event => {
  try {
    currentPage++;
    const response = await fetchPhotos(searchedValue, currentPage);
    const galleryCardsTemplate = response.data.hits
      .map(imgDetails => createGalleryCardTemplate(imgDetails))
      .join('');
    userList.insertAdjacentHTML('beforeend', galleryCardsTemplate);
    galleryLightbox.refresh();
    const galleryCardEl = userList.querySelector('li');
    cardHeight = galleryCardEl.getBoundingClientRect().height;
    scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
    if (currentPage === Math.ceil(response.data.totalHits / 15)) {
      loadMoreBtn.classList.add('is-hidden');
      iziToast.warning({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    }
  } catch (error) {
    iziToast.error({
      message:
        'Sorry, there was a problem with your request. Please try again!',
      position: 'topRight',
      color: 'yellow',
    });
  }
};

searchForm.addEventListener('submit', onSearchFormSubmit);
loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);
