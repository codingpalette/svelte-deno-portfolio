<script lang="ts">
    import { userFind } from '../store/find';

    import FindContainer from '../components/find/FindContainer.svelte';
</script>

<div>
    {#if $userFind}
        <FindContainer />
    {/if}
</div>
