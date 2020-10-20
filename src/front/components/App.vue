<template>
  <div>
    <post/> <!-- PostEnqueteコンポーネントを使っています。 -->
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Post from "./Post.vue" // PostEnquete.vueを読み込んでいます。

export default Vue.extend({
    components:{Post} // PostEnqueteを画面で使えるようにしています。
});
</script>