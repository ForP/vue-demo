<template>
	<div>
		<router-view />

		<van-tabbar v-model="active" route>
		  <van-tabbar-item
		    replace
		    to="/"
		    icon="home-o"
		  >
		    首页
		  </van-tabbar-item>
		  <van-tabbar-item
		    replace
		    to="/screen"
		    icon="search"
		  >
		    碎屏
		  </van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<script>
import Vue from 'vue';
import { Tabbar, TabbarItem } from 'vant';
Vue.use(TabbarItem)
   .use(Tabbar);

export default {
	name: 'login',
	data () {
		return {
			active: 0
		}
	}
}
</script>