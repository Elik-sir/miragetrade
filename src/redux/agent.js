import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';
//import request from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

export const API_ROOT =
  'https://us-central1-miragetrade-7d6a1.cloudfunctions.net/app1';

const responseBody = (res) => res.body;

let token = null;
const tokenPlugin = (req) => {
  if (token) {
    req.set('authorization', `Token ${token}`);
  }
};
//настройка методов запросов
const requests = {
  del: (url) =>
    superagent.del(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  get: (url) =>
    superagent.get(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
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
//Запросы
const Items = {
  getAll: () => requests.get('/'),
  getItemInfo: (itemName) => requests.post('/currentItem', { item: itemName }),
};
export default {
  Items,
  setToken: (_token) => {
    token = _token;
  },
};
