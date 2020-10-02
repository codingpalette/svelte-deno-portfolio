<script lang="ts">
    import { onMount } from 'svelte';

    let handleWindowClick;

    let canvasBox;
    let canvas;

    onMount(() => {
        const c = canvas.getContext('2d');

        canvas.width = canvasBox.offsetWidth;
        canvas.height = canvasBox.offsetHeight;

        class Player {
            constructor(x, y, radius, color) {
                this.x = x;
                this.y = y;
                this.radius = radius;
                this.color = color;
            }

            draw() {
                c.beginPath();
                c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                c.fillStyle = this.color;
                c.fill();
            }
        }

        class Projectile {
            constructor(x, y, radius, color, velocity) {
                this.x = x;
                this.y = y;
                this.radius = radius;
                this.color = color;
                this.velocity = velocity;
            }

            draw() {
                c.beginPath();
                c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                c.fillStyle = this.color;
                c.fill();
            }
        }

        const x = canvas.width / 2;
        const y = canvas.height / 2;

        const player = new Player(x, y, 30, 'blue');
        player.draw();

        handleWindowClick = () => (event) => {
            console.log(event)
            const projectile = new Projectile(event.layerX, event.layerY, 5, 'red', null );
            projectile.draw();
        }
    })



</script>

<svelte:window
    on:click={handleWindowClick()}
/>

<div class="canvas_box" bind:this={canvasBox}>
    <canvas bind:this={canvas}></canvas>
</div>

<style>
    .canvas_box{
        width: 100%;
        height: 100%;
    }
</style>