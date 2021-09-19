<template>
 <div class="home">
    Counter App With Vuex
  </div>

  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>

   <div class="home">
     <h3>Counter Value</h3>
  </div>

   <div class="home count">
     {{count}}
  </div>

    <div class="home">
     <button class="btn btn-decrement" @click="onDecrement"> - </button>
     <button class="btn btn-increment"  @click="onIncrement">  + </button>
  </div>
</template>

<script>
import { mapActions, mapState} from 'vuex'
export default {
  name: 'Home',

  data() {
    return {

    }
  },

  computed: {
    ...mapState({
      count: (state) => state.count
    }),
  },

  methods: {
    // methods are written in the methods objects
    ...mapActions( {
      onDecrement: 'onDecrement',
      onIncrement: 'onIncrement',
    })
  }
}


</script>

<style>
.home{
  margin: 20px auto;
}

.count {
  font-size: 40px;
  font-weight: bold;
}

.btn {
  width: 55px;
  padding: 5px;
  color: #fff;
  border-radius: 5px;
}

.btn-decrement {
  background-color: green;
  margin-right: 10px;
}

.btn-increment{
background-color: blue;
}
</style>
