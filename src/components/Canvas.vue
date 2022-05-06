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
      <input type="range" id="camera-x" min="-1000" max="1000">
      <label for="camera-y">y</label>
      <input type="range" id="camera-y" min="-1000" max="1000">
      <label for="camera-z">z</label>
      <input type="range" id="camera-z" min="-1000" max="1000">
    </div>
  </div>
  <Renderer ref="renderer" resize="window" orbit-ctrl :pointer="{ intersectRecursive: true }">
    <Camera :position="{x: 0, y: 345 ,z: 1000 }"  :far="6000"/>
    <Scene ref="scene" background="#0f0f0f">
      <HemisphereLight />
      <PointLight :position="{x: -398, y: 327, z: -292}"/>
      <Group>
        <GltfModel src="./audiQ7/scene.gltf"
                   @click="carOne"
                   ref="car1"
                   :position="{x: 5, y: 5, z: 5 }"
                   :rotation="{ y: rotY }"
        />
        <GltfModel src="./audi_r8/scene.gltf"
                   @click="carTwo"
                  ref="car2"
                  :position="{x: 504, y: 62, z: -1000 }"
                  :rotation="{ y: rotY }"
        />
        <GltfModel src="./bmw_i8/scene.gltf"
                   @click="carThree"
                   ref="car3"
                   :position="{x: -894, y: 115 , z: -1000 }"
                   :rotation="{ y: rotY }"
        />
      </Group>
    </Scene>
  </Renderer>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue'
import {
  Camera, Renderer,
  Scene, GltfModel, HemisphereLight, PointLight, Group
} from 'troisjs'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Canvas',
  components: { Camera, HemisphereLight, Renderer, Scene, GltfModel, PointLight, Group },
  setup () {
    const router = useRouter()
    const renderer = ref()
    const scene = ref()
    const rotY = ref(0)
    const modelX = ref(5)
    const modelY = ref(5)
    const modelZ = ref(5)

    const carAudiQ7 = ref({
      img: 'audiQ7.jpg',
      model: '45 TDI quattro',
      dvsType: '45 TDI',
      cylArrangement: 'V',
      numCyl: '6',
      eCapacity: '2967 см^3',
      maxPower: '249 / 3000-4500',
      maxTorque: '600 / 1500-2750',
      numTransmission: '8',
      deadweight: '1980 кг',
      totalMass: '2750 кг'
    })
    const carAudiR8 = ref({
      img: 'audi_r8.jpg',
      model: '5.2 FSI quattro S tronic',
      dvsType: '',
      cylArrangement: 'V',
      numCyl: '10',
      eCapacity: '2967 см^3',
      maxPower: '540 (397) / 7800',
      maxTorque: '540 / 6500',
      numTransmission: '7',
      deadweight: '1595 кг',
      totalMass: '1895 кг'
    })
    const carBmwI8 = ref({
      img: 'bmw_i8.jpg',
      model: '',
      dvsType: 'Рядный, 3-цилиндровый',
      cylArrangement: '',
      numCyl: '3',
      eCapacity: '1499 см^3',
      maxPower: '231 (170) / 6000',
      maxTorque: '320 (33) / 3700',
      numTransmission: '6',
      deadweight: '1535 кг',
      totalMass: '1920 кг'
    })
    const audiQ7 = JSON.stringify(carAudiQ7.value)
    const bmwI8 = JSON.stringify(carBmwI8.value)
    const audiR8 = JSON.stringify(carAudiR8.value)

    const carOne = () => {
      router.push({
        path: '/car',
        name: 'Car',
        query: { carName: 'audiQ7' },
        params: {
          car: audiQ7
        }
      })
    }
    const carTwo = () => {
      router.push({
        path: '/car',
        name: 'Car',
        query: { carName: 'audiR8' },
        params: {
          car: audiR8
        }
      })
    }
    const carThree = () => {
      router.push({
        path: '/car',
        name: 'Car',
        query: { carName: 'bmwI8' },
        params: {
          car: bmwI8
        }
      })
    }

    const rotationObject = () => {
      rotY.value -= 0.005
    }

    onMounted(() => {
      renderer.value.onBeforeRender(() => {
        rotationObject()
      })
    })
    return {
      renderer,
      scene,
      rotY,
      modelX,
      modelY,
      modelZ,
      audiQ7,
      audiR8,
      carOne,
      carTwo,
      carThree
    }
  }
})
</script>

<style scoped>
.settings {
  display:none;
  flex-direction: row;
  width: fit-content;
  background-color: #cec8c8;
}
.settings > div {
  display:flex;
  flex-direction: column;
  margin-left: 20px;
}
</style>
