<script>
    import { link } from 'svelte-spa-router';
    import { classnames } from '../../plugins/utils';

    let className = '';
    export { className as class };

    export let type = 'button';

    export let active = false;
    export let block = false;
    export let children = undefined;
    export let close = false;
    export let color = 'default';
    export let disabled = false;
    export let href = '';
    export let outline = false;
    export let size = null;
    export let style = '';
    export let value = '';

    let classes;


    $: classes = classnames(
        className,
        { close },
        close || 'btn',
        close || `btn${outline ? '-outline' : ''}-${color}`,
        size ? `btn-${size}` : false,
        block ? 'btn-block' : false,
        disabled ? 'btn-disabled' : false,
        { active }
    );


</script>


{#if href}
    <a
        class={classes}
        {href}
        {disabled}
        on:click
        {value}
        {style}
        use:link
    >
        <slot />
    </a>
{:else}
    {#if type === 'button'}
        <button
            type="button"
            class={classes}
            {disabled}
            on:click
            {value}
            {style}
        >
            <slot />
        </button>
    {:else if type === 'submit'}
        <button
            type="submit"
            class={classes}
            {disabled}
            on:click
            {value}
            {style}
        >
            <slot />
        </button>
    {/if}

{/if}


<style>
    .btn{
        margin: 0;
        border: none;
        overflow: visible;
        font: inherit;
        color: inherit;
        border-radius: 0;
        display: inline-block;
        box-sizing: border-box;
        padding: 0 30px;
        vertical-align: middle;
        font-size: 14px;
        height: 40px;
        text-align: center;
        text-decoration: none;
        text-transform: uppercase;
        transition: .1s ease-in-out;
        transition-property: color,background-color,border-color;
        position: relative;
    }
    .btn-default{
        background-color: transparent;
        color: #222;
        border: 1px solid #e5e5e5;
    }

    .btn-default:hover,
    .btn-default:focus{
        background-color: transparent;
        color: #222;
        border-color: #b2b2b2;
    }

    .btn-default:active,
    .btn-default.active{
        background-color: transparent;
        color: #222;
        border-color: #999;
    }

    .btn-disabled{
        background-color: transparent;
        color: #999;
        border-color: #e5e5e5;
        pointer-events: none;
    }

    .btn-block{
        display: block;
    }

    .btn-primary{
        background-color: #6C63FF;
        color: #fff;
        border: 1px solid transparent;
    }

    .btn-primary:hover,
    .btn-primary:focus{
        color: #fff;
        background-color: #5F56FF;
    }

    .btn-primary:active,
    .btn-primary.active{
        color: #fff;
        background-color: #544AFF;
    }

    .btn-success{
        background-color: #00BFA6;
        color: #fff;
        border: 1px solid transparent;
    }

    .btn-success:hover,
    .btn-success:focus{
        color: #fff;
        background-color: #00B79F;
    }

    .btn-success:active,
    .btn-success.active{
        color: #fff;
        background-color: #00A08C;
    }

    .btn-danger{
        background-color: #F50057;
        color: #fff;
        border: 1px solid transparent;
    }

    .btn-danger:hover,
    .btn-danger:focus{
        color: #fff;
        background-color: #E60050;
    }

    .btn-danger:active,
    .btn-danger.active{
        color: #fff;
        background-color: #DA004A;
    }

</style>
