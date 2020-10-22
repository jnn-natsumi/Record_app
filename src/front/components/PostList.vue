<template>
  <div>
    <h1>Record List</h1>
    <a href="https://thawing-thicket-84246.herokuapp.com">記録</a>
    <a href="https://thawing-thicket-84246.herokuapp.com/post/list">一覧</a>
    <table class="table">
    <thead>
      <tr>
        <th>タイトル</th>
        <th>日数</th>
        <th>内容</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="post in posts" :key="post.id">
        <td>{{post.title}}</td>
        <td>{{post.day}}</td>
        <td>{{post.body | truncate(10)}}</td>
        <td><b-button size="lg" variant="outline-primary">更新</b-button></td>
        <td><b-button size="lg" variant="outline-danger">削除</b-button></td>
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
  filters: {
    truncate: function(value: any) {
      var length = 10;
      var ommision = "...";
      if (value.length <= length) {
        return value;
      }
      return value.substring(0, length) + ommision;
    }
  },
});


</script>