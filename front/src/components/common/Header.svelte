<script lang="ts">
    import { currentUser } from '../../store/user';

    import { link } from 'svelte-spa-router';
    import active from 'svelte-spa-router/active';
    import Fa from 'svelte-fa';
    import { faSignInAlt, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

    let logo = "images/logo.png";

    const onClickLogOut = () => {
        localStorage.removeItem('jwt_key');
        $currentUser = null;
    }

    let today = new Date();
    let hours, minutes;
    hours = today.getHours();
    minutes = today.getMinutes();
    setInterval(() => {
        today = new Date();
        hours = today.getHours();
        minutes = today.getMinutes();

    }, 1000)



</script>




<header>
    <h1>
        <a href="/" use:link class="logo_box">
            <img src={logo} alt="">
        </a>
    </h1>
    <div class="icon_box">

        {#if !$currentUser}
            <a href="/auth" use:link><span>로그인</span> <Fa icon={faSignInAlt} /></a>
        {:else}
            <button type="button" on:click={onClickLogOut}><span>로그아웃</span> <Fa icon={faSignOutAlt} /></button>
        {/if}
    </div>

    <div class="date_box">
        {hours}:{minutes}
    </div>
</header>


<style>
    :global(header a.active) {
        font-weight: bold;
        text-decoration: underline;
    }
    header {
        display: flex;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.9);
        width: 100%;
        height: 35px;
        padding: 0 1rem;
        box-sizing: border-box;
    }
    header h1 .logo_box{
        display: block;
        width: 25px;
        height: 25px;
    }
    header h1 .logo_box img{
        display: block;
        width: 100%;
        height: auto;
    }

    .icon_box{
        margin-left: auto;
        margin-right: 1rem;
    }
    .icon_box a,
    .icon_box button {
        color: #fff;
        display: flex;
        align-items: center;
    }
    .icon_box a span,
    .icon_box button span{
        font-size: 0.75rem;
        color: inherit;
        margin-right: 0.5rem;
    }

    .date_box{
        font-size: 0.75rem;
        color:#fff;
    }
</style>
