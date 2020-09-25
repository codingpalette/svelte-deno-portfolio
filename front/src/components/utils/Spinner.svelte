<span class="donutSpinner"></span>

<style>
    .donutSpinner {
        display: block;
        border: 4px solid hsl(222, 100%, 95%);;
        border-left-color: #6C63FF;
        border-radius: 50%;
        width: 14px;
        height: 14px;
        animation: donut-spin 1.2s linear infinite;
        margin: 0 auto;
    }

    @keyframes donut-spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>
