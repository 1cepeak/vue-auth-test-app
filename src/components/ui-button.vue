<template>
    <button :type="type" :class="classes" @click="click">
        <slot></slot>
    </button>
</template>

<script>
    const themes = {
        primary: 'bg-blue hover:bg-blue-dark text-white',
        disabled: 'bg-grey-light text-grey-dark'
    };

    export default {
        name: 'ui-button',
        props: {
            type: {
                type: String,
                default: 'button'
            },
            primary: Boolean,
            disabled: Boolean
        },
        computed: {
            classes() {
                return [
                    'py-2',
                    'px-4',
                    'rounded',
                    {
                        [themes.primary]: this.primary && !this.disabled,
                        [themes.disabled]: this.disabled
                    }
                ];
            }
        },
        methods: {
            click(e) {
                return this.$emit('click', e);
            }
        }
    }
</script>
