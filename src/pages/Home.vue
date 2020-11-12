<template>
    <p>Hi There</p>
</template>
<script>
export default {
    created(){
        this.$router.push({ name: 'Login' })
    }
}
</script>