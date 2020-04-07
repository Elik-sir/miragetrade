import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';
//import request from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

// export const API_ROOT = "http://iotfox.ru:20027/api";
export const API_ROOT = 'http://localhost:3001'; //исправить!!!!

const responseBody = res => res.body;

let token = null;
const tokenPlugin = req => {
  if (token) {
    req.set('authorization', `Token ${token}`);
  }
};

const requests = {
  del: url =>
    superagent
      .del(`${API_ROOT}${url}`)
      .use(tokenPlugin)
      .then(responseBody),
  get: url =>
    superagent
      .get(`${API_ROOT}${url}`)
      .use(tokenPlugin)
      .then(responseBody),
  put: (url, body) =>
    superagent
      .put(`${API_ROOT}${url}`, body)
      .use(tokenPlugin)
      .then(responseBody),
  post: (url, body) =>
    superagent
      .post(`${API_ROOT}${url}`, body)
      .use(tokenPlugin)
      .then(responseBody),
};

const Items = {
  getAll: () => requests.get('/'),
  getItemInfo: itemName => requests.post('/currentItem', { item: itemName }),
};
export default {
  Items,
  setToken: _token => {
    token = _token;
  },
};
