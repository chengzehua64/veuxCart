<template>
  <div>
      <ul>
          <li v-for="(item,key) in qwe" :key="key" >  
              <input type="checkbox" v-model="item.flag" @click="bt(key)" >
              商品:{{item.name}}
              价格:{{item.price}}
              <button @click="jia(key)" >加</button>
               {{item.num}}
              <button @click="jian(key)" >减</button>
              <button @click="shan(key)" >删除</button>
      
          </li>        <button @click="xuan" >选中删除</button>
      </ul>
      
  </div>
</template>
<script>
import { mapState,mapGetters,mapActions } from "vuex"
export default {
name:'Cart',
data(){
    return{
        qwe:this.$store.state.list,
    }
},
methods:{
    // ...mapActions(["jia","jian"]),
    jia(index){
        this.$store.commit("jia",index)
    },
    jian(index){
        this.$store.commit("jian",index)
    },
    shan(k){
        this.$store.commit("shan",k)
    },
    // xuan(){
    //     this.$store.commit("xuan")
    // },
     
    bt(k){
        this.$store.commit("bt",k)
    },
    xuan(){
         var add = this.qwe.filter(item=>{
             return item.flag == false
         })
         this.qwe = add
        //  console.log(state.arr)
        //  console.log("asdas",add)   
        //  console.log(":::::",state.list)
        },
}
}
</script>

<style>

</style>