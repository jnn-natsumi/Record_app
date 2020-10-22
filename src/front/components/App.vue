<template>
  <div  class="container text-center">
    <router-view /> <!-- Postコンポーネントを使っています。 -->
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import VueRouter from "vue-router";
import Post from "./Post.vue" // Post.vueを読み込んでいます。
import PostList from "./PostList.vue"; // PostList.vueを読み込んでいます。
import PostDetail from "./PostDetail.vue" // PostDtail.vueを読み込んでいます。

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Post },
    { path: '/post/list', component: PostList },
    { path: '/post/detail/:id(\\d+)', component: PostDetail,
      props: route => ({ id: Number(route.params.id) })}
  ]
})
Vue.use(VueRouter);
export default Vue.extend({
    router
    // components:{Post} // PostEnqueteを画面で使えるようにしています。
});
</script>
<style module>
.container {
    padding: 80px 120px;
}
</style>