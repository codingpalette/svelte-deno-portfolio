import client from './client';

export const create = ({ content }) => client.post('/book/create', {content});
