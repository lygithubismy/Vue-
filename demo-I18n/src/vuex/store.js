import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const store = new Vuex.Store({
    state:{
        count:1
    },
    getters:{  //改变初始值count
        changeGetters:state =>{
            return state.conut + 1;
        }
    },
    mutations:{
        addvuex(state){
            state.count = state.count + 1;
        },
        delvuex(state,n){
            state.count = state.count - n;
        }
    },
    actions:{
        add(centext){
            centext.commit('addvuex');
        },
        del(centext,n){
            centext.commit('delvuex',n);
        }
    }
})

export default store 