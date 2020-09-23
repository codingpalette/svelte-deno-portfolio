<script lang="ts">
    import { onMount } from 'svelte';
    import { currentUser } from '../store/user';
    import {login, register} from "../api/auth.ts";
    import {push} from 'svelte-spa-router';
    import FindContainer from '../components/find/FindContainer.svelte';
    import Input from '../components/utils/Input.svelte';
    import Button from '../components/utils/Button.svelte';

    let mobileLoginImg = "images/mobile_login.svg";

    onMount(() => {
        if ($currentUser) {
            push('/')
        }
    })

    let mode = 'login';

    let name = '';
    let email = '';
    let password = '';

    const onClickModeChange = () => {
        name = '';
        email = '';
        password = '';
        if (mode === 'login') {
            mode = 'register'
        } else if (mode === 'register') {
            mode = 'login'
        }
    }

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

<div>
    <FindContainer>
        <div class="auto_content">
            <div class="left">
                {#if mode === 'login'}
                    <h2>Sign in</h2>
                    <form on:submit|preventDefault={submitLogin}>
                        <div class="input_box">
                            <Input type="text" plaintext placeholder="이메일" bind:value={email}  />
                        </div>
                        <div class="input_box">
                            <Input type="password" plaintext placeholder="비밀번호" bind:value={password}  />
                        </div>
                        <Button type="submit" block>로그인</Button>
                        <button type="button" class="mode_change" on:click={onClickModeChange}>회원가입 하기</button>
                    </form>
                {:else}
                    <h2>Sign up</h2>
                    <form on:submit|preventDefault={submitLogin}>
                        <div class="input_box">
                            <Input type="text" plaintext placeholder="이름" bind:value={name}  />
                        </div>
                        <div class="input_box">
                            <Input type="text" plaintext placeholder="이메일" bind:value={email}  />
                        </div>
                        <div class="input_box">
                            <Input type="password" plaintext placeholder="비밀번호" bind:value={password}  />
                        </div>
                        <Button type="submit" block>회원가입</Button>
                        <button type="button" class="mode_change" on:click={onClickModeChange}>로그인 하기</button>
                    </form>
                {/if}
            </div>
            <div class="right">
                <img src={mobileLoginImg} alt="">
            </div>
        </div>
    </FindContainer>
</div>


<style>
    .auto_content{
        width: 100%;
        height: 100%;
        background-color: #fff;
        padding: 1rem;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: auto;
    }

    .auto_content .left{
        width: 50%;
        max-width: 500px;
    }
    .auto_content .left h2{
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 2rem;
    }
    .auto_content .right{
        width: 50%;
        max-width: 500px;
    }
    .auto_content .right img{
        display: block;
        width: 100%;
        height: auto;

    }
    .input_box{
        margin-bottom: 1rem;
    }

    .mode_change{
        color: #6C63FF;
        font-size: 12px;
        margin-top: 1rem;
    }

    @media screen and (max-width:767px) {
        .auto_content{
            flex-wrap: wrap;
        }
        .auto_content .left{
            width: 100%;
            max-width: 100%;
        }

        .auto_content .right{
            width: 100%;
            max-width: 100%;
        }
    }
</style>
