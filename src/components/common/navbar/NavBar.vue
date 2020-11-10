<template>
<!--    <div class="nar-bar">-->
<!--      <div class="left"><slot name="left"></slot></div>-->
<!--      <div class="center"><slot name="center"></slot></div>-->
<!--      <div class="right"><slot name="right"></slot></div>-->
<!--    </div>-->
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>
  .nav-bar {
    display: flex;  //先横向排列，排不下时候在另起一行。
    line-height: 44px;
    text-align: center;
    box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
  }

  .left, .right {
    width: 40px;
  }

  .center {
    flex: 1;  //占据剩余部分，因为其它宽度已经定了
  }

</style>
