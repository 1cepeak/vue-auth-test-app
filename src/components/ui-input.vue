<template>
    <input
        :value="value"
        :placeholder="placeholder"
        :type="type"
        :class="classes"
        @input="inputHandler"
        @change="changeHandler"
        @blur="blurHandler"
        @focus="focusHandler"
    >
</template>

<script>
    export default {
        name: 'ui-input',
        props: {
            value: {
                type: [Number, String],
                required: true
            },
            placeholder: String,
            type: {
                type: String,
                default: 'text'
            },
            error: Boolean
        },
        data: () => ({
            isFocused: false
        }),
        computed: {
            classes() {
                return [
                    'rounded',
                    'border',
                    'w-full',
                    'py-2',
                    'px-3',
                    {
                        shadow: this.isFocused,
                        'border-red': this.error
                    }
                ];
            }
        },
        methods: {
            getValue(event) {
                return event.target ? event.target.value : event;
            },
            inputHandler(e) {
                this.$emit('input', this.getValue(e));
            },
            changeHandler(e) {
                this.$emit('change', this.getValue(e));
            },
            blurHandler(e) {
                this.isFocused = false;

                this.$emit('blur', e);
            },
            focusHandler(e) {
                this.isFocused = true;

                this.$emit('focus', e);
            }
        }
    }
</script>
