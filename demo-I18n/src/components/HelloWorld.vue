<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->
    <h1>{{this.$store.state.count}}</h1>  
    <h1>{{this.$store.getters.changeGetters}}</h1>
    <p>count的值 :{{ this.$store.state.count }}</p>
    <button @click = 'add'>++++</button>
    <button @click = 'del'>----</button>
    <!-- <h1>{{getCount}}</h1> -->
     <div style = 'border:1px solid yellow; margin-top:50px;'>{{conut1}}</div>
     <!-- this.$store.state 获取定义的初始值 -->
  </div>
</template>

<script>
import { mapState,mapActions,mapGetters } from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'welcome to the guangdongstand'
    }
  },
  computed:{
    ...mapState({
      conut1:state => state.count
    })
  },
  methods: {
    add(){
      // this.$store.commit('addvuex')
      this.$store.dispatch('add')
      // 把commit提交给mutations 改为 使用dispatch提交给actions
    },
    del(){
      var n = 10
      // this.$store.commit('delvuex')
      this.$store.dispatch('del',n)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
