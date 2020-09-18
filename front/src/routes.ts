import Home from './routes/Home.svelte';
import About from './routes/About.svelte';
import Auth from './routes/Auth.svelte'

const routes = {
    '/': Home,
    '/about': About,
    '/auth': Auth,
};

export default routes;
