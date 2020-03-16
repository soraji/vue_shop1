<template>
  <hooper :infiniteScroll="true">
    <slide>
      <img src="../assets/banner1.jpg" alt="배너1">
    </slide>
    <slide>
      <img src="../assets/banner2.jpg" alt="배너1">
    </slide>
    <slide>
      <img src="../assets/banner3.jpg" alt="배너1">
    </slide>
    <slide>
      <img src="../assets/banner4.jpg" alt="배너1">
    </slide>
    <hooper-navigation slot="hooper-addons"></hooper-navigation>
    <hooper-pagination slot="hooper-addons"></hooper-pagination>
  </hooper>
</template>

<script>
import { Hooper,Slide,Navigation as HooperNavigation } from 'hooper';
import { Pagination as HooperPagination } from 'hooper';
import 'hooper/dist/hooper.css';

export default {
  components:{
    Hooper,
    Slide,
    HooperNavigation,
    HooperPagination
  }
}
</script>

<style scoped>
.hooper{
  height:368px;
}
.hooper-indicator {
  margin: 0 2px;
  width: 6px;
  height: 6px;
  border-radius: 4px;
  border: 1px solid #999999;
  padding: 0;
  background-color: #fff;
  cursor: pointer;
  border-radius: 50%;
}
.hooper-indicator.is-active{
  background-color : #999999;
}
</style>