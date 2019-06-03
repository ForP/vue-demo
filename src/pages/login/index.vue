<template>
	<div>
		<van-cell-group>
		  <van-field
		    v-model="username"
		    required
		    clearable
		    label="用户名"
		    right-icon="question-o"
		    placeholder="请输入用户名"
		    @click-right-icon="$toast('question')"
		  />

		  <van-field
		    v-model="password"
		    type="password"
		    label="密码"
		    placeholder="请输入密码"
		    required
		  />
		</van-cell-group>
		<van-button type="primary" size="large">大号按钮</van-button>
	</div>
</template>

<script>
import Vue from 'vue';
import { Field, CellGroup, Button } from 'vant';
Vue.use(Field)
   .use(CellGroup)
   .use(Button);

export default {
	name: 'login',
	data () {
		return {
			username: '',
			password: ''
		}
	}
}
</script>