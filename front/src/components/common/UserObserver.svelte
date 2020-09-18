<script lang="ts">
    import { onMount } from 'svelte';
    import { check } from '../../api/auth';
    import { currentUser, userCheckDone } from '../../store/user';

    onMount( async () => {
        try {
            const key = localStorage.getItem('jwt_key');
            if (!key) {
                $currentUser = null;
                $userCheckDone = true;
                return
            }
            const res = await check();
            $currentUser = {
                id: res.data.id,
                email: res.data.email,
                name: res.data.name
            }
            $userCheckDone = true;
        } catch (e) {
            console.error(e)
        }
    })
</script>
