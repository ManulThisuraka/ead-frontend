export const BASE_URL = 'http://localhost:44346/';

const createUrl = (path) => `${BASE_URL}${path}`;

export const getTodos = () => [
  createUrl('/users'),
  {
    method: 'POST',
  },
];