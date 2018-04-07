<template>
    <div id="app">
        Clicked:{{evenOrOdd}} times,count is {{evenOrOdd}}.
        <button @click="increment">+</button>
        <button @click="decrement">+</button>
        <button @click="incrementIfOdd">Increment if odd</button>
        <button @click="incrementAsync">Increment async</button>
    </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
import store from '../../store'

export default {
  data(){
    return {
      evenOrOdd:store.state.countTest
    }
  },
  computed:{
      
  } ,
  methods: {
      increment(){
        store.commit('increment')
      },
      decrement(){
        store.commit('decrement')
      },
      incrementIfOdd(){
        store.commit('incrementIfOdd')
      },
      incrementAsync(){
        store.commit('incrementAsync')
      }
  }
}

</script>
<style>
.counter-warp {
  text-align: center;
  margin-top: 100px;
}
.home {
  display: inline-block;
  margin: 100px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}

</style>
