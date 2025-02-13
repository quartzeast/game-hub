import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '849d827d270a4ace8ab5207c5598bc5a',
  },
});
