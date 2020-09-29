<script lang="ts">
    import { currentUser } from '../store/user';
    import { onMount } from 'svelte';
    import client from '../api/client';
    import { create, getBooks, bookRemove } from "../api/book";

    import FindContainer from '../components/find/FindContainer.svelte';
    import Input from '../components/utils/Input.svelte';
    import Button from '../components/utils/Button.svelte';
    import Spinner from "../components/utils/Spinner.svelte";

    let page = 1;
    let booksData = null;

    onMount( async () => {
        try {
            const res = await getBooks({page});
            booksData = res.data.sort((a,b) => {
                return a.id > b.id ? -1 : a.id < b.id ? 1 : 0
            })
            // console.log(booksData)
        } catch (e) {
            console.error(e)
        }
    })

    let title = '';
    let content = '';
    let bookAddLoading = false;

    const submitBook = async () => {
        if (!$currentUser) {
            alert('로그인 후 이용해주세요.')
            return false;
        }
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
            // console.log(res)
            booksData = [res.data, ...booksData]
            title = '';
            content = '';
        } catch (e) {
            console.error(e)
        } finally {
            bookAddLoading = false;
        }
    }

    const onClickBookRemove = (id) => async () => {
        // console.log(id)
        try {
            await bookRemove({id});
            booksData = booksData.filter((v) => v.id !== id);
        } catch (e) {
            console.error(e)
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
        {#if booksData}
            {#each booksData as book}
                <div class="book_list">
                    <div class="book_header">
                        <strong>{book.title}</strong>
                        {#if $currentUser}
                            {#if book.userId === $currentUser.id }
                                <div class="option">
                                    <button type="button">수정</button>
                                    <button type="button" on:click={onClickBookRemove(book.id)}>삭제</button>
                                </div>
                            {/if}
                        {/if}
                    </div>

                    <p>{book.content}</p>
                </div>
            {/each}
        {/if}

    </div>
</FindContainer>

<style>
    .book_content{
        padding: 1rem;
        box-sizing:border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
        overflow: auto;
        height: 100%;
    }

    .book_content > div{
        width: 100%;
        max-width: 600px;
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
    .book_list .book_header {
        margin-bottom: 0.5rem;
        display: flex;
        align-items: center;
    }
    .book_list .book_header strong{
        display: block;
        font-size: 1.2rem;
        color: #000;
    }
    .book_list .book_header .option{
        margin-left: auto;
        font-size: 0.75rem;
        display: flex;
        align-items: center;
    }
    .book_list .book_header .option button{
        margin-left: 0.5rem;
        color: #ccc;
        transition: color 0.3s;
    }
    .book_list .book_header .option button:hover{
        color: #000;
    }

    .book_list p{
        color: #777;
        font-size: 0.9rem;
    }

</style>
