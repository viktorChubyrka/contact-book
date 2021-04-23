<template>
    <div class="action-submit-modal">
        <div class="modal-body">
            <slot></slot>
        </div>
        <div class="actin-btns-container">
            <button @click="$emit('accept')" class="btn btn-default">accept</button>
            <button @click="$emit('cancel')" class="btn btn-danger">cancel</button>
        </div>
    </div>
</template>
<style scoped>
.action-submit-modal{
    position: fixed;
    top:0;
    left:0;
    width:100vw;
    height:100vh;
    background: rgba(37, 37, 37, 0.801);
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.modal-body{
    padding: 2.222vh;
    border-radius: 2.222vh;
    background: rgb(47, 121, 121);
    width:min-content;
    height:min-content;
}
.actin-btns-container{
    display: flex;
    margin-top:1.111vh;
}

</style>