<script lang="ts">
    import { onMount } from 'svelte';
    import client from '../api/client';
    import { create, getBooks } from "../api/book";

    import FindContainer from '../components/find/FindContainer.svelte';
    import Input from '../components/utils/Input.svelte';
    import Button from '../components/utils/Button.svelte';
    import Spinner from "../components/utils/Spinner.svelte";

    onMount( async () => {
        try {
            const res = await getBooks();

            console.log(res)
        } catch (e) {
            console.error(e)
        }
    })

    let title = '';
    let content = '';
    let bookAddLoading = false;

    const submitBook = async () => {
        if (title === '') {
            alert('제목을 입력해주세요.')
            return false;
        } else if (content === '') {
            alert('내용을 입력해주세요.')
            return false;
        }
        bookAddLoading = true;

        const key = localStorage.getItem('jwt_key');
        if (key) {
            client.defaults.headers.common['Authorization'] = key;
        } else {
            client.defaults.headers.common['Authorization'] = '';
        }
        try {
            const res = await create({title, content})
            console.log(res)
            title = '';
            content = '';
        } catch (e) {
            console.error(e)
        } finally {
            bookAddLoading = false;
        }
    }
</script>

<FindContainer>
    <div class="book_content">
        <div class="book_form">
            <form on:submit|preventDefault={submitBook}>
                <Input type="text" placeholder="제목을 입력해주세요." bind:value={title} />
                <Input type="textarea" placeholder="내용을 입력해주세요." bind:value={content} />
                {#if !bookAddLoading}
                    <Button type="submit" block class="book_btn">입력하기</Button>
                {:else}
                    <Button block disabled class="book_btn"><Spinner /></Button>
                {/if}
            </form>
        </div>
        <div class="book_list">
            adssa
        </div>
        <div class="book_list">
            adssa
        </div>
        <div class="book_list">
            adssa
        </div>
    </div>
</FindContainer>

<style>
    .book_content{
        padding: 1rem;
        box-sizing:border-box;
        display: flex;
        align-items: flex-start;
        flex-wrap:wrap;
        max-width: 600px;
        margin: 0 auto;
    }

    .book_content > div{
        width: 100%;
        padding: 0.75rem;
        box-sizing: border-box;
        border:1px solid #ddd;
        background-color: #fff;
    }

    .book_content > div + div{
        margin-top: 1rem;
    }
    :global(.book_form input) {
        margin-bottom: 0.75rem;
    }
    :global(.book_form .book_btn) {
        width: 100%;
        margin-top: 0.75rem;
    }

</style>
