<script lang="ts">
    import Header from './Header.svelte';
    import Dock from './Dock.svelte';
    let backImg = "images/mount.jpg";
</script>



<div id="app" style="background-image: url('{backImg}')">
    <Header />
    <slot></slot>
    <Dock />
</div>


<style>
    #app{
        width: 100%;
        height: 100%;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        position: relative;
    }
</style>