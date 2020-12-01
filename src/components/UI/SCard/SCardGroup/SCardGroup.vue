<template>
    <div class="card-group-container">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'SCardGroup'
}
</script>
<style lang="scss">
.card-group-container{
    display: flex;
    flex-wrap: wrap;
}
</style>