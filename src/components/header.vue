<template>
  <div class="header">
    <img src="../assets/mainlogo.png" alt="mainlogo">
    <nav>
      <div>메뉴보기</div>
      <div>주문하기</div>
      <div>픽업스팟</div>
      <div>이벤트</div>
    </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header{
  display: -webkit-box;
  display: flex;
  height: 100%;
  -webkit-box-align: center;
  align-items: center;
  padding: 0 14px 10px 14px;
  background: #fff;
  border-bottom: 1px solid #e7e7e7;
  position: relative;
  z-index: 10;
}
.header img{
  height:35px;
  margin-right:20px;
}
nav div{
  float:left;
  margin:0 10px;
}
</style>