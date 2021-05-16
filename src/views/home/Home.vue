<template>
  <div>
    <home-top-nav></home-top-nav>
    <home-swiper :banner="banner"></home-swiper>
    <HomeRecommend :recommend="recommend"></HomeRecommend>
    <feature-view></feature-view>
    <tab-control :title="['流行','新款','精选']" class="tab-control"></tab-control>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
import TabControl from 'components/content/tabcontrol/TabControl'

import HomeTopNav from './childComps/HomeTopNav';
import { getHomeMultidata,getHomeGoods} from 'network/home';
import HomeSwiper from './childComps/HomeSwiper';
import HomeRecommend from './childComps/HomeRecommend';
import FeatureView from './childComps/FeatureView';


export default {
  name: 'Home',
  components: {
    HomeTopNav,
    HomeSwiper,
    HomeRecommend,
    FeatureView,
    TabControl
  },
  data() {
    return {
      banner: [],
      dKeyword: [],
      keywords: [],
      recommend: [],
      goods:{
        'pop':{page:0,list:[]},
        'news':{page:0,list:[]},
        'sell':{page:0,list:[]}
      }
    };
  },
  created() {
    getHomeMultidata()
      .then(res => {
        this.banner = res.data.banner.list;
        this.dKeyword = res.data.dKeyword.list;
        this.keywords = res.data.keywords.list;
        this.recommend = res.data.recommend.list;
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });

    getHomeGoods({
      type:'new',
      page:'1'
    }).then(res=>{
      console.log(res);
    },err=>{
      console.log(err);
    });
  }
};
</script>

<style>
.tab-control{
  position: sticky;
  top: 44px;
}
</style>
