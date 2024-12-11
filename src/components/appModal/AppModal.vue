<template>
    <div class="modal-backdrop" v-if="isModalOpen">
        <div class="modal">
          <div class="modal__text">
            <slot/>
          </div>
          <AppButton type="button" @action="closeModal">Close</AppButton>
        </div>
    </div>
      
</template>

<script>
export default {
    emits: ['close'],
    props: {
        isModalOpen: Boolean
    },
    methods: {
        closeModal() {
            this.$emit('close'); 
        }
    }
}
</script>

<style scoped lang="scss">
    .modal {
        width: 600px;
        background: #fff;
        border-radius: 10px;
        padding: 50px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 60px;
        &-backdrop {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.4);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000; /* Поверх всего */
        }
        &__text {
            font-size: 18px;
            font-weight: bold;
        }
    }
</style>