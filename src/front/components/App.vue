<template>
  <div>
    <router-view /> <!-- Postコンポーネントを使っています。 -->
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import VueRouter from "vue-router";
import Post from "./Post.vue" // Post.vueを読み込んでいます。
import PostList from "./PostList.vue"; // PostList.vueを読み込んでいます。

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Post },
    { path: '/post/list', component: PostList }
  ]
})
Vue.use(VueRouter);
export default Vue.extend({
    router
    // components:{Post} // PostEnqueteを画面で使えるようにしています。
});
</script>