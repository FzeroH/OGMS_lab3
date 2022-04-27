<template>
  <img src="../assets/audiQ7.jpg" alt="AudiQ7">
  <h2>Технические характеристики</h2>
  <ul>
    <li>
      <p>Модель:</p>
      <p>{{audiQ7.model}}</p>
    </li>
    <li>
      <p>Тип двигателя:</p>
      <p>{{audiQ7.dvsType}}</p>
    </li>
    <li>
      <p>Расположение цилиндров:</p>
      <p>{{audiQ7.cylArrangement}}</p>
    </li>
    <li>
      <p>Количество цилиндров:</p>
      <p>{{audiQ7.numCyl}}</p>
    </li>
    <li>
      <p>Объем двигателя:</p>
      <p>{{audiQ7.eCapacity}}</p>
    </li>
    <li>
      <p>Максимальная мощность, л. с. при об/мин:</p>
      <p>{{audiQ7.maxPower}}</p>
    </li>
    <li>
      <p>Максимальный крутящий момент, Н·м при об/мин:</p>
      <p>{{audiQ7.maxTorque}}</p>
    </li>
    <li>
      <p>Количество передач:</p>
      <p>{{audiQ7.numTransmission}}</p>
    </li>
    <li>
      <p>Собственная масса *:</p>
      <p>{{ audiQ7.deadweight }}</p>
    </li>
    <li>
      <p>Допустимая полная масса:</p>
      <p>{{audiQ7.totalMass}}</p>
    </li>
  </ul>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Car',
  props: {
    number: {
      type: String,
      default: '0'
    }
  },
  setup () {
    const audiQ7 = ref({
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
    return { audiQ7 }
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
