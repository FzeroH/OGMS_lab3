<template>
  <div class="settings">
    <div>
      <h5>Model</h5>
      <label for="model-x">x</label>
      <input type="range" id="model-x" v-model="modelX" min="-1000" max="1000">
      <label for="model-y">y</label>
      <input type="range" id="model-y" v-model="modelY" min="-1000" max="1000">
      <label for="model-z">z</label>
      <input type="range" id="model-z" v-model="modelZ" min="-1000" max="1000">
    </div>
    <div>
      <h5>Camera</h5>
      <label for="camera-x">x</label>
      <input type="range" id="camera-x" v-model="cameraX" min="-1000" max="1000">
      <label for="camera-y">y</label>
      <input type="range" id="camera-y" v-model="cameraY" min="-1000" max="1000">
      <label for="camera-z">z</label>
      <input type="range" id="camera-z" v-model="cameraZ" min="-1000" max="1000">
    </div>
  </div>
  <Renderer ref="renderer" resize="window" orbit-ctrl>
    <Camera :position="{x: cameraX, y: 1000 ,z: 1000 }"  :far="6000"/>
    <Scene ref="scene" background="#ffffff">
      <HemisphereLight />
      <PointLight :position="{x: -398, y: 327, z: -292}"/>
      <GltfModel src="./audiQ7/scene.gltf"
                 @load="onLoad"
                 ref="car1"
                 :position="{x: 5, y: 5, z: 5 }"
      />
      <GltfModel src="./audiQ7/scene.gltf"
                @load="onLoad"
                ref="car2"
                :position="{x: 1000, y: 27, z: -1000 }"
      />
      <GltfModel src="./audiQ7/scene.gltf"
                 @load="onLoad"
                 ref="car3"
                 :position="{x: -894, y: 27 , z: -1000 }"
      />
    </Scene>
  </Renderer>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue'
import {
  Camera, Renderer,
  Scene, GltfModel, HemisphereLight, PointLight
} from 'troisjs'
// import { Raycaster } from 'three'

export default defineComponent({
  name: 'Canvas',
  components: { Camera, HemisphereLight, Renderer, Scene, GltfModel, PointLight },
  setup () {
    const renderer = ref()
    const scene = ref()
    const car1 = ref()
    const car2 = ref()
    const car3 = ref()
    const modelX = ref(5)
    const modelY = ref(5)
    const modelZ = ref(5)
    const cameraX = ref(0)
    const cameraY = ref(5)
    const cameraZ = ref(10)
    const rotModelZ = ref()
    // const raycaster = new Raycaster()
    const onLoad = (obj) => {
      console.log(obj)
    }

    onMounted(() => {
      console.log(car1.value)
    })
    return {
      renderer,
      scene,
      car1,
      car2,
      car3,
      modelX,
      modelY,
      modelZ,
      cameraX,
      cameraY,
      cameraZ,
      rotModelZ,
      onLoad
    }
  }
})
</script>

<style scoped>
.settings {
  display:flex;
  flex-direction: row;
  width: fit-content;
  background-color: #cec8c8;
  z-index: 9999;
}
.settings > div {
  display:flex;
  flex-direction: column;
  margin-left: 20px;
}
</style>
