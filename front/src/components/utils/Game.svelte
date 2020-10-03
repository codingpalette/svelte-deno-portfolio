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

            update() {
                this.draw()
                this.x = this.x  + this.velocity.x
                this.y = this.y  + this.velocity.y
            }
        }

        const x = canvas.width / 2;
        const y = canvas.height / 2;

        const player = new Player(x, y, 30, 'blue');


        const projectiles = [];

        function animate() {
            requestAnimationFrame(animate);
            c.clearRect(0, 0, canvas.width, canvas.height);
            player.draw();
            projectiles.forEach((projectile) => {
                projectile.update()
            });
        }

        handleWindowClick = () => (event) => {
            console.log(event)
            const angle = Math.atan2(
                event.layerY - canvas.height / 2,
                event.layerX - canvas.width / 2
            )
            console.log(angle)
            const velocity = {
                x: Math.cos(angle),
                y: Math.sin(angle)
            }
            projectiles.push(new Projectile(
                canvas.width / 2,
                canvas.height / 2,
                5,
                'red',
                velocity
            ))

        }

        animate();
    })



</script>

<!--<svelte:window-->
<!--    on:click={handleWindowClick()}-->
<!--/>-->

<div class="canvas_box" bind:this={canvasBox} on:click={handleWindowClick()}>
    <canvas bind:this={canvas}></canvas>
</div>

<style>
    .canvas_box{
        width: 100%;
        height: 100%;
    }
</style>