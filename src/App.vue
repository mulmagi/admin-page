<template>
<div id="app">
    <Menu></Menu>
    <router-view class="contents"></router-view>
</div>
</template>

<script>
import Menu from './components/Menu.vue'

export default {
    name: 'app',
    components: {
        Menu
    },
    data() {
        return {}
    }
}
</script>

<style scoped>
div{
    margin: 50px;
}
.contents{
    padding:30px;
}
</style>
