<script lang="ts">
    import DockList from './DockList.svelte';
    import Fa from 'svelte-fa';
    import { faHome, faUser, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
    import { userFind } from '../../store/find'
</script>


<div id="dock">
    <ul class="dock_content">
        <DockList find={userFind}>
            <Fa icon={faUser} size="lg" />
        </DockList>
        <DockList find={userFind}>
            <Fa icon={faHome} size="lg" />
        </DockList>
        <DockList find={userFind}>
            <Fa icon={faSignInAlt} size="lg" />
        </DockList>
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
</style>
