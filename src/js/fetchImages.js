import axios from 'axios';
import Notiflix from 'notiflix';

// ------------klucz API Pixabay------------
const KEY = '41299627-20968bfca13e1d6f80f02f232';

//------------limit zdjęć na stronie--------
const pageLimit = 40;

axios.defaults.baseURL = 'https://pixabay.com/api/';

//-----------funkcja do ściągnięcia zdjęć---------
const fetchImages = async (queryToFetch, pageToFetch) => {
  const { data } = await axios({
    params: {
      key: KEY,
      q: queryToFetch,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: pageLimit,
      page: pageToFetch,
    },
  });
  return data;
};

export { fetchImages, pageLimit };