import axios from 'axios';

var url = 'https://nepali-vegetable-market.herokuapp.com/';

export default axios.create({
  baseURL: url,
});
