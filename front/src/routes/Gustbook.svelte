<script lang="ts">
    import FindContainer from '../components/find/FindContainer.svelte';
    import Input from '../components/utils/Input.svelte';

    const submitBook = () => {
        console.log('aaa')
    }
</script>

<FindContainer>
    <div class="book_content">
        <div class="book_form">
            <form on:submit|preventDefault={submitBook}>
                <textarea placeholder="내용을 입력해주세요."></textarea>
                <input type="text" placeholder="">
                <button>입력하기</button>
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