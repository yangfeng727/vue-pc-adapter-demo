<template>
  <div id="app">
    <BHeader />
    <div class="flex-box">
      <BAside />
      <div class="content">
        <BMain />
      </div>
    </div>
  </div>
</template>

<script>
import BHeader from './components/BHeader.vue'
import BAside from './components/BAside.vue'
import BMain from './components/BMain.vue'

export default {
  name: 'App',
  components: {
    BHeader,
    BAside,
    BMain
  },
  mounted() {
  }
}
</script>

<style scoped lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: var(--fontColor);
  font-size: 18px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.flex-box {
  flex: auto;
  display: flex;
  justify-content: space-between;

  .content {
    padding: 15px;
    background-color: var(--theme);
    flex: auto;
  }
}
</style>
