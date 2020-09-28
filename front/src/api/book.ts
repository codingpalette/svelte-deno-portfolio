import client from './client';

export const create = ({ title, content }) => client.post('/book/create', {title, content});

export const getBooks = ({ page }) => client.get(`/book/books/${page}`);
