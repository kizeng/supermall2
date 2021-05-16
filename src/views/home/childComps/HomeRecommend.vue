<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommend">
      <a :href="item.link">
        <img :src="item.image" />
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommend: {
      type: Array,
      default() {
        return []
      }
    }
  }
};
</script>

<style>
  .recommend{
    width: 100%;
    padding: 10px 0 30px;
    border-bottom: 8px solid #eee;

    display: flex;
    flex-direction: row;
    text-align: center;

    font-size: 90%;
  }

  .recommend-item{
    flex: 1;
  }

  .recommend-item img{
    width: 80%;
    padding-bottom: 10px;
  }

  .recommend-item a{
    color: #666666;
  }
</style>
