<script lang="ts">
    import client from '../api/client';
    import { create } from "../api/book";

    import FindContainer from '../components/find/FindContainer.svelte';
    import Input from '../components/utils/Input.svelte';
    import Button from '../components/utils/Button.svelte';
    import Spinner from "../components/utils/Spinner.svelte";

    let content = ''

    const submitBook = async () => {
        const key = localStorage.getItem('jwt_key');
        if (key) {
            client.defaults.headers.common['Authorization'] = key;
        } else {
            client.defaults.headers.common['Authorization'] = '';
        }
        try {
            const res = await create({content})
            console.log(res)
        } catch (e) {
            console.error(e)
        }
    }
</script>

<FindContainer>
    <div class="book_content">
        <div class="book_form">
            <form on:submit|preventDefault={submitBook}>
                <Input type="textarea" placeholder="내용을 입력해주세요." bind:value={content} />
                <Button type="submit" block style="width: 100%; margin-top: 5px">입력하기</Button>
                <Button block disabled style="width: 100%; margin-top: 5px"><Spinner /></Button>
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
    }

    .book_content > div{
        width: 30%;
        margin-left: 5%;
    }
    .book_content > div:nth-child(3n+1){
        margin-left: 0;
    }
</style>
