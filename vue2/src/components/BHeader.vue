<template>
    <div class="header">
        顶部导航栏
    </div>
</template>

<script>
export default {
    components: {
    },
    data() {
        return {
        }
    },
    mounted() {
    },
    methods: {
    }
}
</script>

<style lang="scss" scoped>
.header {
    flex: none;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    position: relative;
    background-color: var(--headerBg);
    border: 1px solid #dddddd;
}

.tool {
    position: absolute;
    right: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.cg{
    margin-left: 5PX;
}
</style>