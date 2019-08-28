import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const store = new Vuex.Store({
    state:{
        count:1
    },
    getters:{  //改变初始值count
        getStateCount:state =>{
            return state.conut + 2;
        }
    },
    mutations:{
        addvuex(state){
            state.count = state.count + 2;
        },
        delvuex(state,n){
            state.count = state.count - n;
        }
    },
    actions:{
        setadd(centext){
            centext.commit('addvuex');
        },
        setdel(centext,n){
            centext.commit('delvuex',n);
        }
    }
})

export default store 