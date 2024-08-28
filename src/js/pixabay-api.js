import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';
export const fetchPhotos = (searchedQuery, page) => {
  const axiosOptions = {
    params: {
      q: searchedQuery,
      key: '45557561-052ca280d13484c0c5f536db7',
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      page: page,
      per_page: 15,
    },
  };
  return axios.get('', axiosOptions);
};
