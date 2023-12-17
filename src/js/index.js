import { getImages } from './getImages';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let queryToFetch = '';
let pageToFetch;


const formEl = document.querySelector('.search-form');
const galleryEl = document.querySelector('.gallery');
const buttonLoadMore = document.querySelector('.load-more');

// Detektory zdarzeń dla formularza i przycisku
formEl.addEventListener('submit', onSubmitForm);
buttonLoadMore.addEventListener('click', onBtnLoadMoreClick);

//Inicjalizacja biblioteki SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

//Funkcja obsługi po przesłaniu pliku danych - pobieranie i renderowanie galerii

function onSubmitForm(event) {
  event.preventDefault();
  const query = event.currentTarget.elements.searchQuery.value;
  if (!query.trim() || query === queryToFetch) {
    return;
  }
  queryToFetch = query;
  galleryEl.innerHTML = '';
  pageToFetch = 1;
  buttonLoadMore.classList.add('unvisible');
  getImages(queryToFetch, pageToFetch);
  formEl.reset();
}

//Funkcja obsługi, która renderuje następną partię zdjęć po kliknięciu przycisku „LOAD MORE".

function onBtnLoadMoreClick() {
  buttonLoadMore.classList.add('unvisible');
  pageToFetch += 1;
  getImages(queryToFetch, pageToFetch);
}

export { galleryEl, buttonLoadMore, lightbox };