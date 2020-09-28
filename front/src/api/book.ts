import client from './client';

export const create = ({ title, content }) => client.post('/book/create', {title, content});

export const getBooks = () => client.get('/book/books')
