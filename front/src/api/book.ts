import client from './client';

export const create = ({ content }) => client.post('/book/create', {content});

export const getBooks = () => client.get('/book/books')
