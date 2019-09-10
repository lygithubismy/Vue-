<template lang="html">
    <div>
        <h1>{{this.$store.state.count}}</h1>

        <input type="text">+
        <input type="text">=
        <input type="text">
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    component:{

    }
}
</script>
<style lang="">
    input{
        width: 100px;
        height: 50px;
        background-color: yellow;
    }
</style>