<template>
  <tab-bar>
      <tab-bar-item link="/home">
        <div slot="item-img-active"><img src="../../assets/imgs/首页-bar.png"></img></div>
        <div slot="item-img"><img src="../../assets/imgs/首页-bar.png"></img></div>
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item link="/class">
        <div slot="item-img-active"><img src="../../assets/imgs/分类-bar.png"></img></div>
        <div slot="item-img"><img src="../../assets/imgs/分类-bar.png"></img></div>
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item link="/shoping">
        <div slot="item-img-active"><img src="../../assets/imgs/购物车-bar.png"></img></div>
        <div slot="item-img"><img src="../../assets/imgs/购物车-bar.png"></img></div>
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item link="/user">
       <div slot="item-img-active"><img src="../../assets/imgs/我的-bar.png"></img></div>
       <div slot="item-img"><img src="../../assets/imgs/我的-bar.png"></img></div>
       <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
  import TabBarItem from "components/common/tabbar/TabBarItem.vue"
  import TabBar from "components/common/tabbar/TabBar.vue"

  export default {
    name:'MainTabBar',
    components:{
      TabBarItem,
      TabBar
    }
  }
</script>

<style>
</style>
