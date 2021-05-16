<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for="(item,index) in title"
        :class="{active:currentItem===index}"
        @click="activTitle(index)"
      >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name:'TabControl',
    props:{
      title:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return {
        currentItem:0
      }
    },
    methods:{
      activTitle(index){
        this.currentItem = index;
      }
    }
  }
</script>
<style>
  .tab-control{
    display: flex;
    text-align: center;

    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: #FFFFFF;

    color: #6a6a6a;
  }

  .tab-control-item{
    flex: 1;
  }

  .tab-control-item span{
    padding: 5px;
  }

  .active span{
    color: var(--color-high-text);
    border-bottom: 2px solid var(--color-tint);
  }


</style>
