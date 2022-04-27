<template>
  <img :src="require(`../assets/${carData.img}`)" alt="car">
  <h2>Технические характеристики</h2>
  <ul>
    <li>
      <p>Модель:</p>
      <p>{{carData.model}}</p>
    </li>
    <li>
      <p>Тип двигателя:</p>
      <p>{{carData.dvsType}}</p>
    </li>
    <li>
      <p>Расположение цилиндров:</p>
      <p>{{carData.cylArrangement}}</p>
    </li>
    <li>
      <p>Количество цилиндров:</p>
      <p>{{carData.numCyl}}</p>
    </li>
    <li>
      <p>Объем двигателя:</p>
      <p>{{carData.eCapacity}}</p>
    </li>
    <li>
      <p>Максимальная мощность, л. с. при об/мин:</p>
      <p>{{carData.maxPower}}</p>
    </li>
    <li>
      <p>Максимальный крутящий момент, Н·м при об/мин:</p>
      <p>{{carData.maxTorque}}</p>
    </li>
    <li>
      <p>Количество передач:</p>
      <p>{{carData.numTransmission}}</p>
    </li>
    <li>
      <p>Собственная масса *:</p>
      <p>{{ carData.deadweight }}</p>
    </li>
    <li>
      <p>Допустимая полная масса:</p>
      <p>{{carData.totalMass}}</p>
    </li>
  </ul>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Car',
  props: {
    car: {
      type: String
    }
  },
  setup (props, _) {
    // eslint-disable-next-line vue/no-setup-props-destructure
    const carData = ref(JSON.parse(props.car))
    return { carData }
  }
})
</script>

<style scoped>
img {
  display: flex;
  margin: 10px auto 0 auto;
  width: 500px;
  height: auto;
  alignment: center;
}
h2 {
  text-align: center;
  font-size: 48px;
}
ul {
  display: flex;
  flex-direction: column;
}
ul > li{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 30px 0 30px;
  border: 1px solid black;
}

ul > li:last-child {
  margin-bottom: 10px;
}

ul > li > p{
  width: 25%;
  font-size: 19px;
  text-align: start;
  padding: 10px;
}
</style>
