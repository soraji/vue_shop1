<template>
  <div>
    <hooper :infiniteScroll="true" :playSpeed="2000">
      <slide>
        <img src="../assets/banner1.png" alt="배너1">
      </slide>
      <slide>
        <img src="../assets/banner2.png" alt="배너1">
      </slide>
      <slide>
        <img src="../assets/banner3.png" alt="배너1">
      </slide>
      <slide>
        <img src="../assets/banner4.png" alt="배너1">
      </slide>
      <hooper-navigation slot="hooper-addons"></hooper-navigation>
      <hooper-pagination slot="hooper-addons"></hooper-pagination>
    </hooper>
    <div class="maintxt"> 오늘의 기분을 골라보세요</div>
    <div class="subtxt">매일 행복할 수는 없지만, 행복한 일은 매일 있으니까요</div>
    
    <carousel :nav="false" :items="4">
      <img src="../assets/item1.jpg" alt="아이템" >
      <img src="../assets/item2.jpg" alt="아이템" >
      <img src="../assets/item3.jpg" alt="아이템" >
      <img src="../assets/item4.jpg" alt="아이템" >
      <img src="../assets/item5.jpg" alt="아이템" >
      <img src="../assets/item6.jpg" alt="아이템" >
      <img src="../assets/item7.jpg" alt="아이템" >
      <img src="../assets/item8.jpg" alt="아이템" >
      <img src="../assets/item9.jpg" alt="아이템" >
    </carousel>
    <!-- <hooper :infiniteScroll="true" :itemsToShow="3" class="customclass">
      <slide>
        <img src="../assets/item1.jpg" alt="아이템" style="width:100%; height:100%;" aria-label="Whats up!" data-balloon-pos="up-left">
      </slide>
      <slide>
        <img src="../assets/item2.jpg" alt="아이템" style="width:100%; height:100%;">
      </slide>
      <slide>
        <img src="../assets/item3.jpg" alt="아이템" style="width:100%; height:100%;">
      </slide>
      <slide>
        <img src="../assets/item4.jpg" alt="아이템" style="width:100%; height:100%;">
      </slide>
      <slide>
        <img src="../assets/item5.jpg" alt="아이템" style="width:100%; height:100%;">
      </slide>
      <slide>
        <img src="../assets/item6.jpg" alt="아이템" style="width:100%; height:100%;">
      </slide>
      <slide>
        <img src="../assets/item7.jpg" alt="아이템" style="width:100%; height:100%;">
      </slide>
      <slide>
        <img src="../assets/item8.jpg" alt="아이템" style="width:100%; height:100%;">
      </slide>
      <slide>
        <img src="../assets/item9.jpg" alt="아이템" style="width:100%; height:100%;">
      </slide>
      <hooper-navigation slot="hooper-addons"></hooper-navigation>
      <hooper-pagination slot="hooper-addons"></hooper-pagination>
    </hooper> -->
    <div class="maintxt">우리의 영원한 곰돌이 푸</div>
    <div class="subtxt">노력한다고 항상 성공할 수는 없겠지만,<br>성공한 사람들은 모두 노력했다는걸 알아둬</div>
  </div>
</template>

<script>
import { Hooper,Slide,Navigation as HooperNavigation } from 'hooper';
import { Pagination as HooperPagination } from 'hooper';
import 'hooper/dist/hooper.css';
import 'balloon-css';
import carousel from 'vue-owl-carousel'
export default {
  components:{
    Hooper,
    Slide,
    HooperNavigation,
    HooperPagination,
    carousel
  },
}
</script>

<style>
.maintxt{
  width:100%;
  margin:30px auto;
  text-align: center;
  font-size:24px;
  line-height: 28px;
}
.subtxt{
  width:100%;
  text-align: center;
  margin-bottom: 20px;
}
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
.customclass{
  width: 60%;
  margin:0 auto;
  height: 368px;
}
.customclass .hooper-slide{
  width: 0px;
}
</style>