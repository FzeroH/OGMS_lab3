<template>
  <Canvas/>
</template>

<script>
import Canvas from './components/Canvas'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: {
    Canvas
  },
  setup () {

  }
})
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
#app {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
