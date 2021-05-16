<template>
  <top-nav class="top-nav">
    <div slot="nav-title-content">购物</div>
  </top-nav>
</template>

<script>
  import TopNav from 'components/common/topnav/TopNav'
  export default {
    name:"HomeTopNav",
    components:{
      TopNav
    }
  }
</script>

<style>
  .top-nav{
    color: #FFFFFF;
    background-color: var(--color-tint);
  }

</style>
