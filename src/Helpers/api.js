import axios from 'axios';
import PropTypes from 'prop-types';

const API_KEY = '39757407-13e7f5de39700ed4a356d5fcb';

const fetchImages = (query, page) => {
  return axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
};

fetchImages.propTypes = {
  query: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};

const api = { fetchImages };

export default api;