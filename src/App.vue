<template>
  <div id="app">
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/header.vue';
import Main from './components/main.vue';
import Footer from './components/footer.vue';
export default {
  name: 'App',
  components: {
    Header,Footer,Main
  }
}
</script>

<style>
</style>
