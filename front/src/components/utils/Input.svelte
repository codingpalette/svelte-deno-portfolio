<script>
    import { classnames } from '../../plugins/utils';

    let className = '';
    export { className as class };

    export let type = 'text';
    export let size = undefined;
    export let bsSize = undefined;
    export let color = undefined;
    export let width = undefined;

    export let checked = false;
    export let valid = false;
    export let invalid = false;
    export let plaintext = false;
    export let addon = false;
    export let value = '';
    export let files = '';
    export let readonly = false;
    export let multiple = false;
    export let name = '';
    export let placeholder = '';
    export let disabled = false;

    let classes;
    let tag;

    $: {
        const checkInput = ['radio', 'checkbox'].indexOf(type) > -1;
        const isNotaNumber = new RegExp('\\D', 'g');

        const fileInput = type === 'file';
        const textareaInput = type === 'textarea';
        const rangeInput = type === 'range';
        const selectInput = type === 'select';
        const buttonInput =
            type === 'button' || type === 'reset' || type === 'submit';
        const unsupportedInput = type === 'hidden' || type === 'image';
        tag = selectInput || textareaInput ? type : 'input';

        let formControlClass = 'input-control';

        if (plaintext) {
            formControlClass = `${formControlClass}-plaintext`;
            tag = 'input';
        } else if (fileInput) {
            formControlClass = `${formControlClass}-file`;
        } else if (checkInput) {
            if (addon) {
                formControlClass = null;
            } else {
                formControlClass = 'form-check-input';
            }
        } else if (buttonInput) {
            formControlClass = `btn btn-${color || 'secondary'}`;
        } else if (rangeInput) {
            formControlClass = 'input-control-range';
        } else if (unsupportedInput) {
            formControlClass = '';
        }

        if (size && isNotaNumber.test(size)) {
            // console.warn(
            //     'Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'
            // );
            bsSize = size;
            size = undefined;
        }
        classes = classnames(
            className,
            invalid && 'is-invalid',
            valid && 'is-valid',
            bsSize ? `input-size-${bsSize}` : false,
            width ? `input-width-${width}` : false,
            formControlClass
        );
    }

    const handleInput = (event) => {
        value = event.target.value;
    };


</script>


{#if tag === 'input'}
    {#if type === 'text'}
        <input
            type="text"
            bind:value
            class={classes}
            {placeholder}
        />
    {:else if type === 'password'}
        <input
            type="password"
            bind:value
            class={classes}
            {placeholder}
        />
    {/if}
{:else if tag === 'textarea'}
    <textarea
        class={classes}
        bind:value
        {placeholder}
        {name}
        rows="5"
    />
{/if}


<style>
    input{
        max-width: 100%;
        width: 100%;
        padding: 0 10px;
        background: #fff;
        border:1px solid #e5e5e5;
        transition: 0.2s ease-in-out;
        transition-property: color,background-color,border;
        height: 40px;
        vertical-align: middle;
        box-sizing: border-box;
        font-size: 14px;
        color: #666;
    }
    input:focus{
        border-color: #6C63FF;
    }
    input::placeholder{
        color: #999;
    }

    .input-width-large{
        width: 500px;
    }

    .input-width-medium{
        width: 200px;
    }

    .input-width-small{
        width: 130px;
    }

    .input-width-xsmall{
        width: 40px;
    }

    .input-size-large{
        height: 55px;
        padding-left: 12px;
        padding-right: 12px;
        font-size: 16px;
    }

    .input-size-small{
        height: 30px;
        padding-left: 8px;
        padding-right: 8px;
        font-size: 12px;
    }

    textarea{
        max-width: 100%;
        width: 100%;
        padding: 10px;
        background: #fff;
        border:1px solid #e5e5e5;
        transition: 0.2s ease-in-out;
        transition-property: color,background-color,border;
        vertical-align: middle;
        box-sizing: border-box;
        font-size: 14px;
        color: #666;
    }

    textarea:focus{
        border-color: #6C63FF;
    }
</style>
