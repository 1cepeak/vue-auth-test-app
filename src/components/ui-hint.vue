<template>
    <p :class="classes">
        <slot></slot>
    </p>
</template>

<script>
    export default {
        name: 'ui-hint',
        props: {
            error: Boolean
        },
        computed: {
            classes() {
                return [
                    'text-xs',
                    'mt-2',
                    {
                        'text-red': this.error,
                        'text-grey': !this.error
                    }
                ];
            }
        }
    }
</script>
