<script lang="ts">
    import { onMount } from 'svelte';
    import { currentUser } from '../store/user';
    import {login, register} from "../api/auth.ts";
    import {push} from 'svelte-spa-router'

    onMount(() => {
        if ($currentUser) {
            push('/')
        }
    })

    let mode = 'login';

    let name = '';
    let email = '';
    let password = '';

    const submitLogin = async () => {
        try {
            const res = await login({email, password})
            // console.log(res)
            localStorage.setItem('jwt_key', res.data.jwt)
            $currentUser = {
                id: res.data.id,
                email: res.data.email,
                name: res.data.name
            }
            push('/')
        } catch (e) {
            console.error(e)
        }
    }

    const submitRegister = async () => {
        try {
            const res = await register({ name, email, password })
            // console.log(res)
            alert('회원가입 완료')
        } catch (e) {
            console.error(e)
        }
    }


</script>

{#if mode === 'login'}
    <div>
        <h2>로그인</h2>
        <form on:submit|preventDefault={submitLogin}>
            <input type="text" placeholder="이메일" bind:value={email}>
            <input type="password" placeholder="비밀번호" bind:value={password}>
            <button type="submit">로그인</button>
        </form>
        <button type="button" on:click={()=> mode = 'register'}>회원가입 하기</button>
    </div>
{:else}
    <div>
        <h2>회원가입</h2>
        <form on:submit|preventDefault={submitRegister}>
            <input type="text" placeholder="이름" bind:value={name}>
            <input type="text" placeholder="이메일" bind:value={email}>
            <input type="password" placeholder="비밀번호" bind:value={password}>
            <button type="submit">가입</button>
        </form>
        <button type="button" on:click={()=> mode = 'login'}>로그인 하기</button>
    </div>
{/if}


<style>

</style>
