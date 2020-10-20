<template>
  <div>
    <h1>記録一覧</h1>
    <table>
      <tr>
        <th>日数</th>
        <th>タイトル</th>
        <th>内容</th>
      </tr>
      <tr v-for="post in posts" :key="post.id">
        <td>{{post.day}}</td>
        <td>{{post.title}}</td>
        <td>{{post.body}}</td>
      </tr>
    </table>
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
  },
});
</script>