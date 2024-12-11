<template>
  <div class="form-field">
    <label class="form-field__label" :for="name">{{ label }}</label>
    <input
        :type="htmlInputType"
        :id="id"
        :name="name"
        :placeholder="placeholder"
        class="form-field__input"
        :class="{ danger: hasError }"
        v-model.trim="input"
        :required="required"
        @blur="validate">
    <span class="form-field__error" :class="{ danger: hasError }">{{ errorMessage }}</span>
  </div>
</template>

<script>
export default {
    props: {
        label: String,
        placeholder: String,
        required: Boolean,
        inputType: {
            type: String,
            default: 'short-text', 
        },
        name: {
            type: String,
            required: true,
        },
        id: {
            type: String,
            required: true,
        }
    },
    data() {
        return {
            input: '',
            hasError: false, 
            errorMessage: '',
        }
    },
    methods: {
        validate() {
            if (!this.required && !this.input.trim()) {
                this.clearError();
                return true;
            }

            if (this.inputType === 'name') {
                if (!/^[A-Za-zА-Яа-яЁё]+$/.test(this.input) || this.input.length > 15) {
                    this.setError('Заполните текстом до 15 символов');
                    return false;
                }
            } else if (this.inputType === 'short-text') {
                if (!/^[A-Za-zА-Яа-яЁё0-9]+$/.test(this.input) || this.input.length > 20) {
                    this.setError('Заполните до 20 символов');
                    return false;
                }
            } else if (this.inputType === 'email') {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(this.input)) {
                    this.setError('Некорректный email');
                    return false;
                }
            }

            this.clearError();
            return true;
        },
        setError(message) {
            this.hasError = true;
            this.errorMessage = message;
        },
        clearError() {
            this.hasError = false;
            this.errorMessage = '';
        },
        clearInput() {
            this.input = ''
        }
    },
    computed: {
        htmlInputType() {
            return this.inputType === 'email' ? 'email' : 'text';
        },
    }
}
</script>

<style scoped lang="scss">
    .form-field {
        display: flex;
        flex-direction: column;
        gap: 5px;
        width: calc(25% - 10px);
        &__input {
            padding: 12px 10px;
            border-radius: 10px;
            background: #F8F8F8;
            border: none;
            &::placeholder {
                color: #C4C4C4;
                text-transform: capitalize;
            }
            &.danger {
                border: 1px solid red;
            }
        }
        &__error {
            display: none;
            color: red;
            font-weight: 500;
            &.danger {
                display: block;
            }
        }
    }
</style>