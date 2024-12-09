<template>
  <component 
    :is="isLink ? 'a' : 'button'"
    :href="isLink ? href : null"
    :class="['button', color]" 
    @click="$emit('action')">
    <slot/>
  </component>
</template>

<script>
export default {
    emits: ['action'],
    props: {
        type: {
            type: String,
            default: 'button', 
            validator(value) {
                return ['button', 'link'].includes(value);
            }
        },
        color: {
            type: String,
            default: '',
            validator(value) {
                return ['', 'button-nobg'].includes(value)
            }
        },
        href: {
            type: String,
            default: '', 
        },
    },
    computed: {
        isLink() {
            return this.type === 'link';
        }
    }
}
</script>

<style scoped lang="scss">
    .button {
        padding: 11px;
        width: 200px;
        color: #fff;
        font-size: 16px;
        text-align: center;
        border-radius: 10px;
        background: #71A3FF;
        border: none;
        text-decoration: none;
        cursor: pointer;
        &-nobg {
            border: 1px solid #71A3FF;
            background: none;
            color: #3D3D3D;
        }
    }
</style>