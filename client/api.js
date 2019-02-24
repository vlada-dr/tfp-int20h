
const Promise = global.Promise = require('promise');
const superagent = require('superagent-promise')(require('superagent'), Promise);


const responseBody = res => res.body;

let token = window.localStorage.getItem('jwt');

const setToken = _token => {
  token = _token;
};

const withToken = req => {
  if (token) {
    req.set('Authorization', `Bearer ${token}`);
  }
};

const baseUrl = 'https://tfpfind.azurewebsites.net';

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
  current: () => api.get('/users/me'),
  login: user => api.post('/account/login', user),
  register: user => api.post('/account/register', user),
  logout: () => api.get('/account'),
  update: user => api.post('/user', user),
};

const models = {
  all: filters => api.post('/api/models', filters),
  like: userId => api.get(`/users/like?userId=${userId}`),
  get: id => api.get(`/api/models/${id}`),
  update: (id, model) => api.put(`/api/models/${id}`, model),
};

const limit = (count, p) => `limit=${count}&offset=${p ? p * count : 0}`;

const tag = {
  all: () => api.get('/tags'),
  get: tg => api.get(`/tags/${tg.id}`),
  add: tg => api.post('/tags', tg),
  del: id => api.del(`/tags/${id}`),
  edit: tg => api.put(`/tags/${tg.id}`, tg),
};

export {
  auth,
  tag,
  setToken,
  models,
};
