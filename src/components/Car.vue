<template>
  <img src="../assets/audiQ7.jpg" alt="AudiQ7">
  <h2>Технические характеристики</h2>
  <ul>
    <li>
      <p class="character">Модель:</p>
      <p class="value">{{audiQ7.model}}</p>
    </li>
    <li>
      <p class="character">Тип двигателя:</p>
      <p class="value">{{audiQ7.dvsType}}</p>
    </li>
    <li>
      <p class="character">Расположение цилиндров:</p>
      <p class="value">{{audiQ7.cylArrangement}}</p>
    </li>
    <li>
      <p class="character">Количество цилиндров:</p>
      <p class="value">{{audiQ7.numCyl}}</p>
    </li>
    <li>
      <p class="character">Объем двигателя:</p>
      <p class="value">{{audiQ7.eCapacity}}</p>
    </li>
    <li>
      <p class="character">Максимальная мощность, л. с. при об/мин:</p>
      <p class="value">{{audiQ7.maxPower}}</p>
    </li>
    <li>
      <p class="character">Максимальный крутящий момент, Н·м при об/мин:</p>
      <p class="value">{{audiQ7.maxTorque}}</p>
    </li>
    <li>
      <p class="character">Количество передач:</p>
      <p class="value">{{audiQ7.numTransmission}}</p>
    </li>
    <li>
      <p class="character">Собственная масса *:</p>
      <p class="value">{{ audiQ7.deadweight }}</p>
    </li>
    <li>
      <p class="character">Допустимая полная масса:</p>
      <p class="value">{{audiQ7.totalMass}}</p>
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
  justify-content: center;
  font-size: 18px;
}

.character{

}
.value{

}
</style>
