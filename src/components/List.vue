<template>
  <div>
      <p><input type="checkbox" v-model="done" @click="quan"  > 全选 </p>
    <ul>
      <li v-for="(item,key) in arr " :key="key">
        <input type="checkbox" v-model="item.flag" @change="onchange(key)" />
        商品: {{item.name}}
        价格: {{item.price}}
        数量: {{item.num}}
        <button
          @click="add(item)"
        >添加</button>
      </li>
    </ul>
    <ul>
      <li @click="q">0-100</li>
      <li @click="w">1000-2000</li>
      <li @click="e" >2000-3000</li>
      <li>3000-4000</li>
    </ul>
  </div>
</template>

<script>
import { mapState,mapGetters,mapActions } from "vuex"
export default {
  name: "List",
  data() {
    return {
        done:false,
        info:[],
      arr: [
        { name: "qwe", price: 25, num: 50, id: 1, flag: false },
        { name: "qwe", price: 25, num: 90, id: 1, flag: false },
        { name: "qwe2", price: 15, num: 1200, id: 2, flag: false },
        { name: "qwe3", price: 10, num: 1932, id: 3, flag: false },
        { name: "qwe4", price: 30, num: 2133, id: 4, flag: false },
        { name: "qwe4", price: 30, num: 123, id: 4, flag: false },
        { name: "qwe4", price: 30, num: 3211, id: 4, flag: false },
        { name: "qwe5", price: 35, num: 3500, id: 5, flag: false }
      ],
      arr2: [ 
        { name: "qwe", price: 25, num: 50, id: 1, flag: false },
        { name: "qwe", price: 25, num: 90, id: 1, flag: false },
        { name: "qwe2", price: 15, num: 1200, id: 2, flag: false },
        { name: "qwe3", price: 10, num: 1932, id: 3, flag: false },
        { name: "qwe4", price: 30, num: 2133, id: 4, flag: false },
        { name: "qwe4", price: 30, num: 123, id: 4, flag: false },
        { name: "qwe4", price: 30, num: 3211, id: 4, flag: false },
        { name: "qwe5", price: 35, num: 3500, id: 5, flag: false }
      ],
    };
  },
  methods: {
      quan(){
          this.done = !this.done
          this.arr.forEach(item => {
            item.flag=this.done
          });
      },
    add(item) {
      var str = {
        id: item.id,
        name: item.name,
        price: item.price,
        num: item.num,
        flag: item.flag
      };

      var index = this.$store.state.list.findIndex(val => val.id == item.id);
      if (index == -1) {
        //加入购物车
        this.$store.commit("add", str);
      } else {
        // 数量增加
        this.$store.commit("jia", index);
      }
    },
    onchange(key) {
    //   this.flag = !this.flag;
      var a = this.arr[key].flag == true
      if (a) {
          this.info.push(a)
      }else{
          this.info.splice(key,1)
      }
      if (this.info.length==this.arr.length) {
          this.done = true
      }else{
          this.done = false
      }
    },
   
    q() {
      var list = this.arr2.filter(item => {
        return item.num < 100;
      });
      this.arr = list;
    },
    w() {
      var str = this.arr2.filter(item => {
        return item.num < 2000 && item.num > 1000;
      });
      this.arr = str;
    },
    e(){
        var str = this.arr2.filter(item =>{
            return item.num<3000 && item.num>2000
        })
        this.arr = str
    }
  }
};
</script>

<style>
ul {
  list-style: none;
}
</style>