import { writable } from 'svelte/store';

export const currentUser = writable(null);
export const userCheckDone = writable(false);
