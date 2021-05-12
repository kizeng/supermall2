<template>
  <div>
    <home-top-nav></home-top-nav>
    <div>asda</div>
    <div>Home</div>
    <div>Home</div>
    <div>Home</div>
    <div>Home</div>
    <div>Home</div>
    <div>Home</div>
    <div>Home</div>
    <div>Home</div>
    <div>Home</div>
    <div>Home</div>
    <div>Home</div>
    <div>Home</div>
    <div>Home</div>
    <div>Home</div>
    <div>Home</div>
    <div>Home</div>
    <div>Home</div>
    <div>Home</div>
    <div>Home</div>
    <div>Home</div>
    <div>Home</div>
    <div>Home</div>
    <div>Home</div>
    <div>Home</div>
    <div>Home</div>
    <div>Home</div>
    <div>Home</div>
    <div>Home</div>
    <div>Home</div>
    <div>Home</div>
    <div>Home</div>
    <div>Home</div>
    <div>Home</div>
    <div>Home</div>
    <div>Home</div>
    <div>Home</div>
    <div>Home</div>
    <div>Home</div>
    <div>Home</div>
    <div>Home</div>
    <div>Home</div>
    <div>Home</div>
    <div>Home</div>
    <div>Home</div>
    <div>Home</div>
    <div>Home</div>
  </div>

</template>

<script>
  import HomeTopNav from 'components/content/home/HomeTopNav'
  import {getHomeMultidata} from 'network/home'

  export default {
    name:'Home',
    components:{
      HomeTopNav
    },
  }
  getHomeMultidata().then(res=>{
    console.log(res);
  })
</script>

<style>

</style>
