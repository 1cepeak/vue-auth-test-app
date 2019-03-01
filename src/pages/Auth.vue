<template>
    <main class="auth">
        <div class="auth-form w-full max-w-xs">
            <div v-if="loading" class="auth-form__loader">
                <div class="loader"></div>
            </div>

            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8">
                <div class="mb-6">
                    <ui-label>Email</ui-label>
                    <ui-input v-model="email" :error="hasError('email')" @input="validate"></ui-input>
                    <ui-hint v-if="hasError('email')" error>
                        Поле должно содержать адрес электронной почты
                    </ui-hint>
                </div>
                <div class="mb-6">
                    <ui-label>Пароль</ui-label>
                    <ui-input v-model="password" :error="hasError('password')" type="password" @input="validate"></ui-input>
                    <ui-hint v-if="hasError('password')" error>
                        Пароль должен быть не менее 6 символов в длинну
                    </ui-hint>
                </div>
                <div class="text-right">
                    <ui-button :disabled="!isValid" primary @click="submit">
                        Войти
                    </ui-button>
                </div>
            </form>
        </div>
    </main>
</template>

<script>
    import uiLabel from 'components/ui-label';
    import uiInput from 'components/ui-input';
    import uiHint from 'components/ui-hint';
    import uiButton from 'components/ui-button';

    export default {
        name: 'AuthPage',
        components: {
            uiLabel,
            uiInput,
            uiHint,
            uiButton
        },
        data: () => ({
            email: '',
            password: '',
            loading: false,
            showErrors: false,
            rules: {
                email: (v) => {
                    const rule = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                    return rule.test(String(v).toLocaleLowerCase());
                },
                password: (v) => String(v).length >= 6
            },
            errors: []
        }),
        computed: {
            isValid() {
                return this.errors.length === 0;
            }
        },
        methods: {
            validate() {
                const data = {
                    email: this.email,
                    password: this.password
                };

                this.errors = [];

                Object.keys(data).forEach((field) => {
                    const rule = this.rules[field];

                    if (!rule(data[field])) {
                        this.errors.push(field);
                    }
                });
            },
            hasError(field) {
                return this.showErrors && this.errors.includes(field);
            },
            submit() {
                // @todo: Добавить работу с API авторизации

                if (!this.isValid) {
                    this.showErrors = true;

                    return;
                }

                this.loading = true;

                setTimeout(() => {
                    this.loading = false;
                }, 5000);
            }
        },
        mounted() {
            this.validate();
        }
    }
</script>
