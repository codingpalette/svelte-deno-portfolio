<script lang="ts">
    import { link } from 'svelte-spa-router';
    import active from 'svelte-spa-router/active';

    import DockList from './DockList.svelte';
    import Fa from 'svelte-fa';
    import { faHome, faUser, faSignInAlt, faBook, faThLarge } from "@fortawesome/free-solid-svg-icons";
    import { userFind } from '../../store/find'
</script>


<div id="dock">
    <ul class="dock_content">
        <li>
            <a href="/about" use:link use:active class="icon_btn">
                <Fa icon={faUser} size="lg" />
            </a>
        </li>
        <li>
            <a href="/portfolio" use:link use:active class="icon_btn">
                <Fa icon={faThLarge} size="lg" />
            </a>
        </li>
        <li>
            <a href="/gustbook" use:link use:active class="icon_btn">
                <Fa icon={faBook} size="lg" />
            </a>
        </li>
<!--        <DockList find={userFind}>-->
<!--            <Fa icon={faHome} size="lg" />-->
<!--        </DockList>-->
<!--        <DockList find={userFind}>-->
<!--            <Fa icon={faSignInAlt} size="lg" />-->
<!--        </DockList>-->
    </ul>
</div>

<style>
    #dock{
        position: fixed;
        left: 2%;
        right: 2%;
        bottom: 3%;
        background-color: rgba(0,0,0, 0.05);
        padding: 0.5rem 1rem;
        border:1px solid #ccc;
        box-sizing: border-box;
        border-radius: 5px;
    }
    .dock_content{
        display: flex;
        align-content: center;
    }
    li{
        margin-left: 0.5rem;
    }
    li:first-child{
        margin-left: 0;
    }
    .icon_btn{
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        padding: 0.5rem;
        background-color: #fff;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        transition: 0.3s;
        position: relative;

    }
    .icon_btn:hover{
        transform: translateY(-4px);
    }
    :global(.dock_content .icon_btn.active) {
        transform: translateY(-4px);
    }

</style>
