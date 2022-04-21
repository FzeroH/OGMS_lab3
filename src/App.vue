<template>
  <router-view/>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: {

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
