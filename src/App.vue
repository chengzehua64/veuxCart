<template>
  <div id="app">
   <router-link to='/list' > 列表 </router-link>
   <router-link to='/Cart' >购物车</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
