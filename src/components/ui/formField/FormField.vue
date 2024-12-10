<template>
  <div class="form-field">
    <label class="form-field__label">{{ label }}</label>
    <input
        type="text"
        :placeholder="placeholder"
        class="form-field__input"
    />
    <span class="form-field__error">This field is required.</span>
  </div>
</template>

<script>
export default {
    props: {
        label: String,
        placeholder: String,
        type: String
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
                border: 1px solid darkred;
            }
        }
        &__error {
            display: none;
            color: darkred;
            &.danger {
                display: block;
            }
        }
    }
</style>