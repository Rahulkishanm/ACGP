import axios from 'axios';

export default {
  getAll: async () => {
    let res = await axios.get(`/v1/api/product`);
    return res.data || [];
  }
}