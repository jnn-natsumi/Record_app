<template>
    <div>
        <h1>記録詳細</h1>
        <!--$routeは現在のrouteインスタンスを表す-->
        <!--:idでパラメーターを指定したものは、params.idで呼び出せる-->
        <p>このページは、ID.{{ $route.params.id }}の詳細を表示する</p>
        <p>詳細画面、近々更新します！</p>
        <div>
          <div>
            <strong>日数：</strong>OO日
          </div>
          <div>
            <p><strong>タイトル</strong></p>
            <p>テスト</p>
          </div>
          <div>
            <p><strong>内容</strong></p>
            <p>テスト</p>
          </div>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import axios from "axios";

export default Vue.extend({
  data() {
    return {
      posts: [],
    };
  },
  async created() {
    const response = await axios.get("/api/posts");
    this.posts = response.data;
  }
});


</script>