<template>
  <div>
    <h1>Record List</h1>
    <table class="table">
    <thead>
      <tr>
        <th>タイトル</th>
        <th>日数</th>
        <th>内容</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="post in posts" :key="post.id">
        <td>{{post.title}}</td>
        <td>{{post.day}}</td>
        <td>{{post.body}}</td>
      </tr>
    </tbody>
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