<script lang="ts">
    import { currentUser } from '../../store/user';

    import { link } from 'svelte-spa-router';
    import active from 'svelte-spa-router/active';

    const onClickLogOut = () => {
        localStorage.removeItem('jwt_key');
        $currentUser = null
    }

</script>

<style>
    :global(header a.active) {
        font-weight: bold;
        text-decoration: underline;
    }
</style>


<header>
    <a href="/" use:link use:active>Home</a>
    <a href="/about" use:link use:active>About</a>
    {#if !$currentUser}
    <a href="/auth"  use:link use:active>로그인</a>
    {:else}
    <button type="button" on:click={onClickLogOut}>로그아웃</button>
    {/if}
</header>
