<template>
  <div id="app">
  <Header/>
  <ProductListItem/> 
  <Homepage/>
  <router-view class="content"/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import ProductListItem from './components/ProductListItem.vue'
import Homepage from './pages/Homepage.vue'

export default {
  name: 'App',
  components: {
    Header,
    ProductListItem,
    Homepage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
