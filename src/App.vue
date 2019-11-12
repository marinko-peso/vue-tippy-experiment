<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <button>Show Tooltip Manually</button>

    <p>
      <span>Dynamic Tooltip Content: </span>
      <input v-model="tooltipContent" type="text" />
    </p>
    <p>
      <span>Force Tooltip Display: </span>
      <input v-model="tooltipDisplayed" type="checkbox" />
    </p>
    <p>
      <tooltip :display="tooltipDisplayed" bottom>
        <button>Tooltip On Me!</button>
        <template #content>
          {{ tooltipContent }}
        </template>
      </tooltip>
    </p>
  </div>
</template>

<script>
import Tooltip from './components/Tooltip';

export default {
  name: 'app',
  data: () => ({ tooltipContent: '', tooltipDisplayed: false }),
  components: {
    Tooltip
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
