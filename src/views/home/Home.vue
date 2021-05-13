<template>
  <div>
    <home-top-nav></home-top-nav>
    <home-swiper :banner="banner"></home-swiper>
    <HomeRecommend :recommend="recommend"></HomeRecommend>
  </div>
</template>

<script>
import HomeTopNav from './childComps/HomeTopNav';
import { getHomeMultidata } from 'network/home';
import HomeSwiper from './childComps/HomeSwiper';
import HomeRecommend from './childComps/HomeRecommend.vue';

export default {
  name: 'Home',
  components: {
    HomeTopNav,
    HomeSwiper,
    HomeRecommend
  },
  data() {
    return {
      banner: [],
      dKeyword: [],
      keywords: [],
      recommend: []
    };
  },
  created() {
    getHomeMultidata()
      .then(res => {
        this.banner = res.data.banner.list;
        this.dKeyword = res.data.dKeyword.list;
        this.keywords = res.data.keywords.list;
        this.recommend = res.data.recommend.list;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style>

</style>
