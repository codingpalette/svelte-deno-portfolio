<script lang="ts">
    import UserObserver from './components/common/UserObserver.svelte';
    import { userCheckDone } from './store/user';
    import Router from 'svelte-spa-router';
    import routes from './routes';
    import Header from './components/common/Header.svelte';
</script>

<UserObserver />
{#if $userCheckDone}
    <Header />
    <Router {routes} />
{/if}



<style>
</style>
