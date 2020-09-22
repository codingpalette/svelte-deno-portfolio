<script lang="ts">

</script>

<div class="container">
    <header class="container_header">
        <button type="button" class="ball">
            <span class="line1"></span>
            <span class="line2"></span>
        </button>
    </header>
    <div class="content">

    </div>
</div>

<style>
    .container{
        position: fixed;
        left: 2%;
        right: 2%;
        top: 3%;
        height: calc(94% - 78px);
        box-sizing: border-box;
        border-radius: 6px;
        box-shadow: 0 30px 60px 12px rgba(0, 0, 33, 0.05), 0 4px 24px 0 rgba(0, 0, 33, 0.05), 0 0 1px 0 rgba(0, 0, 33, 0.09);
        overflow: hidden;
    }

    .container_header{
        background-color: #282a36;
        padding: 0 1rem;
        display: flex;
        align-items: center;
        height: 35px;
    }

    .container_header .ball{
        width: 16px;
        height: 16px;
        background-color: #fc625d;
        border-radius: 50%;
        position: relative;
    }

    .container_header .ball span{
        position: absolute;
        left: 50%;
        top: 50%;
        width: 10px;
        height: 2px;
        background-color: #fff;
        opacity: 0;
    }

    .container_header .ball span.line1{
        transform: translate(-50% , -50%) rotate(45deg);
    }

    .container_header .ball span.line2{
        transform: translate(-50% , -50%) rotate(-45deg);
    }

    .container_header .ball:hover span{
        opacity: 1;
    }

    .content{
        background-color: rgba(255,255,255,0.8);
        width: 100%;
        height: calc(100% - 35px);
    }
</style>
