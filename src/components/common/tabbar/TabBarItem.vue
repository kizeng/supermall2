<template>
  <div class="tabbaritem" @click="to" :class="{'active-bag-color':isActive}">
    <div v-if="!isActive" ><slot name="item-img"></slot></div>
    <div v-else><slot name="item-img-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name:'TabBarItem',
    props:{
      link:{
        type:String,
        required:true
      },
      activeColor:{
        type:String,
        default:'#ff5777'
      }
    },
    methods:{
      //跳转到当前路由
      to(){
        if(this.$route.path.indexOf(this.link) === -1) this.$router.push(this.link)
      }
    },
    computed:{
      //当前路由是否被选中
      isActive(){
        return this.$route.path.indexOf(this.link) !== -1
      },
      //改变被选中路由的样式
      activeStyle(){
        return this.isActive ? {'color':this.activeColor} : {}
      },
    }
  }
</script>

<style>
  .tabbaritem{
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;

    font-size: 10px;
    text-align: center;
    background-color: rgba(231, 231, 231, 0.2);
    cursor: pointer;

    transition: all 0.6s;

  }
  .tabbaritem img{
    width: 25px;
    height: 25px;

  }
  .tabbaritem:hover{
    background-color: rgba(214, 37, 24, 0.2);
  }
  
  .active-bag-color{
    background-color: rgba(214, 37, 24, 0.2);
  }
</style>
