import Home from './routes/Home.svelte';
import About from './routes/About.svelte';
import Auth from './routes/Auth.svelte';
import Portfolio from './routes/Portfolio.svelte';
import Gustbook from './routes/Gustbook.svelte';

const routes = {
    '/': Home,
    '/about': About,
    '/auth': Auth,
    '/portfolio': Portfolio,
    '/gustbook': Gustbook
};

export default routes;
