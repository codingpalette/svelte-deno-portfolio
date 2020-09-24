<script lang="ts">
    import {onMount} from 'svelte';
    import FindContainer from '../components/find/FindContainer.svelte';

    let img1 = "images/portfolio/img1.png";
    let img2 = "images/portfolio/img2.png";
    let img3 = "images/portfolio/img3.png";
    let img4 = "images/portfolio/img4.png";
    let img5 = "images/portfolio/img5.png";
    let img6 = "images/portfolio/img6.png";
    let img7 = "images/portfolio/img7.png";
    let img8 = "images/portfolio/img8.png";
</script>


<div>
    <FindContainer>
        <div class="portfolio_content">
            <ul>
                <li>
                    <a href="https://www.gorillaspace.co.kr/" target="_blank">
                        <img src={img1} alt="">
                    </a>
                </li>
                <li>
                    <a href="https://siwollaw.com/home/index" target="_blank">
                        <img src={img2} alt="">
                    </a>
                </li>
                <li>
                    <a href="https://card.studioium.com/!/naver/guide" target="_blank">
                        <img src={img3} alt="">
                    </a>
                </li>
                <li>
                    <a href="https://solution.studioium.com/" target="_blank">
                        <img src={img4} alt="">
                    </a>
                </li>
                <li>
                    <a href="https://assess.lgacademy.com/login" target="_blank">
                        <img src={img5} alt="">
                    </a>
                </li>
                <li>
                    <a href="https://www.olmanawa.com/" target="_blank">
                        <img src={img6} alt="">
                    </a>
                </li>
                <li>
                    <a href="https://zen-stonebraker-4eda72.netlify.app/" target="_blank">
                        <img src={img7} alt="">
                    </a>
                </li>
                <li>
                    <a href="https://svelte-firebase-boiler-plate.web.app/#/" target="_blank">
                        <img src={img8} alt="">
                    </a>
                </li>
            </ul>
        </div>
    </FindContainer>
</div>


<style>
    .portfolio_content{
        width: 100%;
        height: 100%;
        overflow: auto;
        padding: 1rem;
        box-sizing: border-box;
        /*background-color: #fff;*/
    }

    .portfolio_content ul{
        width: 100%;
        column-count: 4;
        column-gap: 1rem;
    }

    .portfolio_content ul li{
        display: inline-block;
        margin-bottom: 1rem;
        box-sizing: border-box;
        width: 100%;
        border-radius: 10px;
        overflow: hidden;
        border:1px solid #888;
    }

    .portfolio_content ul li img{
        width:100%;
        height: auto;
    }

    @media screen and (max-width: 1200px) {
        .portfolio_content ul{
            column-count: 3;
        }
    }

    @media screen and (max-width: 1024px) {
        .portfolio_content ul{
            column-count: 2;
        }
    }

    @media screen and (max-width: 767px) {
        .portfolio_content ul{
            column-count: 1;
        }
    }
</style>
