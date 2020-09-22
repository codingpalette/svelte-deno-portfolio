<script lang="ts">
    import UserObserver from './components/common/UserObserver.svelte';
    import { userCheckDone } from './store/user';
    import Router from 'svelte-spa-router';
    import routes from './routes';
    import Layout from './components/common/Layout.svelte';

</script>

<UserObserver />
{#if $userCheckDone}
    <Layout >
        <Router {routes} />
    </Layout>

{/if}



<style>
</style>
