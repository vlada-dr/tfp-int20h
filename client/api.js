
const Promise = global.Promise = require('promise');
const superagent = require('superagent-promise')(require('superagent'), Promise);


const responseBody = res => res.body;

let token = null;

const setToken = _token => {
  token = _token;
};

const withToken = req => {
  // if (token) {
  req.set('Authorization', `Token ${token || 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjQsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvdXNlcnMiLCJpYXQiOjE1NDczNDkyNzYsImV4cCI6MTU1MjUzMzI3NiwibmJmIjoxNTQ3MzQ5Mjc2LCJqdGkiOiJpV0N6VnRONE5PYTk1N0gyIn0.iNO-_h8j-n97P8mC4Zgay1Q1Spa2cdRip5thJgignkg'}`);
  // }
};

const baseUrl = '/api';

const api = {
  del: url => superagent
    .del(baseUrl + url)
    .use(withToken)
    .then(responseBody),
  get: url => superagent
    .get(baseUrl + url)
    .use(withToken)
    .then(responseBody),
  put: (url, body) => superagent
    .put(baseUrl + url)
    .send(body)
    .use(withToken)
    .then(responseBody),
  post: (url, body) => superagent
    .post(baseUrl + url)
    .send(body)
    .use(withToken)
    .then(responseBody),
};

const auth = {
  current: () => api.get('/user'),
  login: user => api.post('/users/login', user),
  register: user => api.post('/users', user),
  logout: () => api.post('/Account/LogOff'),
  update: user => api.post('/user', user),
};

const limit = (count, p) => `limit=${count}&offset=${p ? p * count : 0}`;

const presents = {
  all: () => api.get('/presents?limit=20&offset=0'),
  get: id => api.get(`/presents/${id}`),
  add: present => api.post('/presents', present),
  del: id => api.del(`/presents/${id}`),
  edit: (id, present) => api.put(`/presents/${id}`, present),
  search: present => api.get(`/presents?${present}`),
  like: id => api.post(`/presents/${id}/favorite`),
  unlike: id => api.del(`/presents/${id}/favorite`),
};

const tag = {
  all: () => api.get('/tags'),
  get: tg => api.get(`/tags/${tg.id}`),
  add: tg => api.post('/tags', tg),
  del: id => api.del(`/tags/${id}`),
  edit: tg => api.put(`/tags/${tg.id}`, tg),
};

export {
  auth,
  presents,
  tag,
  setToken,
};
