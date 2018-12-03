import axios from 'axios';

export default axios.create({
  baseURL: 'https://quotesondesign.com/wp-json'
  // params: {
  //   filter: {
  //     orderby: 'rand',
  //     posts_per_page: 1
  //   }
  // }

});