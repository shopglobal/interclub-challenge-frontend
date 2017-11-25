import axios from 'axios';

const API_ROOT = 'http://localhost:4000/api';

// Resolve response body pronsime
const resolveResponse = res => new Promise((resolve) => {
  const { status, data } = res;
  return resolve({ status, data });
});

export default {
  delete: (url) =>
    axios.delete(`${API_ROOT}${url}`).then(resolveResponse),
  get: (url, params) => {
    return axios.get(`${API_ROOT}${url}`, { params }).then(resolveResponse);
  },
  put: (url, body) =>
    (axios).put(`${API_ROOT}${url}`, body).then(resolveResponse),
  post: (url, body) =>
    axios.post(`${API_ROOT}${url}`, body).then(resolveResponse),
};
