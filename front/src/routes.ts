import Home from './routes/Home.svelte';
import About from './routes/About.svelte';
import Auth from './routes/Auth.svelte';
import Portfolio from './routes/Portfolio.svelte';

const routes = {
    '/': Home,
    '/about': About,
    '/auth': Auth,
    '/portfolio': Portfolio
};

export default routes;
