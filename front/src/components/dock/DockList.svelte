<script lang="ts">

</script>

<li>
    <button class="icon_btn">
        <slot></slot>
    </button>
</li>

<style>
    li{
        margin-left: 0.5rem;
    }
    li:first-child{
        margin-left: 0;
    }
    .icon_btn{
        display: block;
        box-sizing: border-box;
        padding: 0.5rem;
        background-color: #fff;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        transition: 0.3s;

    }
    .icon_btn:hover{
        transform: translateY(-3px);
    }
</style>