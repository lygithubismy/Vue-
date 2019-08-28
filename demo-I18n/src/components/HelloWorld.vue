<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->
    

    <h1>{{this.$store.state.count}}</h1>  
    <h1>{{this.$store.getters.getStateCount}}</h1>
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
      msg: 'welcome to the guangdongstand',
     
    }
  },
  computed:{
    ...mapState({
      conut1:state => state.count
    })
  },
  methods: {
    // 辅助函数
    ...mapActions({addvuex:'add',delvuex:'del'}), 
    //如果名字不同 使用对象参数托管 
    // ...mapActions(['add','del']), //如果名字相同 使用数组参数托管
    // add为本地click事件
    // 通过本地点击事件add 触发 sotre 中 actions 的事件setadd 执行mutations addvuex方法  此过程为异步操作
    add(){
      // this.$store.commit('addvuex')
      this.$store.dispatch('setadd')
      // 使用actions托管 mutations
      // 把commit提交给mutations  使用dispatch提交给actions
    },
    del(){
      var n = 10
      //参数可以是值 也可以是对象
      // this.$store.commit('delvuex')
      this.$store.dispatch('setdel',n)
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
