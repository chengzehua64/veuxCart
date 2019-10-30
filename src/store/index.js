import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        list:[],
    },
    mutations:{
        //添加购物车
        add(state,item){
            state.list.push(item)
        },
        jia(state,index){
            state.list[index].num++
        },
        
        jian(state,index){
            state.list[index].num--
        },
        JIA(state,index){
            state.list[index].num++
        },
        JIAN(state,index){
            state.list[index].num--
        },
        shan(state,k){
            state.list.splice(k,1)
            console.log(state.list)
        },
        bt(state,k){
            console.log(k)
           state.list[k].flag=!state.list[k].flag
           console.log(state.list[k].flag)
        },
        // xuan(state){
            
        //  var add = state.arr.filter(item=>{
        //      return item.flag == false
        //  })
        //  state.list = add
         
        //  console.log(state.arr)
        //  console.log("asdas",add)
        //  console.log(":::::",state.list)
        // },
        // xuan(state){
        //     do{
        //         state.list.item
        //     }while(item.flag == false)
        //     while(state.list.item.flag==false){
        //     }
        // }

    },
    // actions:{
    //     jia({commit},index){
    //         commit("JIA",index)
    //     },
    //     jian({commit},index){
    //         commit("JIAN",index)
    //     }
    // }
})