<template>
  <div>
    <h1>{{title}}</h1>
      <p>{{description}}</p>
      <a href="https://thawing-thicket-84246.herokuapp.com">記録</a>
      <a href="https://thawing-thicket-84246.herokuapp.com/post/list">一覧</a>
    <div v-if="!posted"><!-- 入力エリア ここから -->
      <div>
        <input type="radio" id="7" value="7" v-model="post.day"><label for="7">7日以上</label>
        <input type="radio" id="6" value="6" v-model="post.day"><label for="6">6日</label>
        <input type="radio" id="5" value="5" v-model="post.day"><label for="5">5日</label>
        <input type="radio" id="4" value="4" v-model="post.day"><label for="4">4日</label>
        <input type="radio" id="3" value="3" v-model="post.day"><label for="3">3日</label>
        <input type="radio" id="2" value="2" v-model="post.day"><label for="2">2日</label>
        <input type="radio" id="1" value="1" v-model="post.day"><label for="1">1日</label>
      </div>
      <div class="col-sm-12 form-group">
        <p>タイトル</p>
        <input class="form-control" id="title" name="title" placeholder="タイトル" type="text" v-model="post.title" required>
      </div>
      <div class="col-sm-12 form-group">
        <p>内容</p>
        <textarea class="form-control" id="bodys" name="bodys" placeholder="内容" rows="5" v-model="post.body"></textarea>
      </div>
      <div>
          <b-button @click="sendMessage()" size="lg" variant="outline-success">記録する！</b-button>
      </div>
    </div><!-- 入力エリア ここまで-->
    <div v-else><!-- 結果エリア ここから -->
      <div>
        <strong>日数：</strong>{{post.day}}
      </div>
      <div>
        <p><strong>タイトル</strong></p>
        <p>{{post.title}}</p>
      </div>
      <div>
        <p><strong>内容</strong></p>
        <p>{{post.body}}</p>
      </div>
    </div><!-- 結果エリア ここまで -->
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import axios from "axios";

export default Vue.extend({
  data() {
    return {
      title: "Programming Record",
      description: "何日間で解決または完成したか",
      post: {},
      posted: false
    };
  },
  methods: {
      sendMessage(){
        this.description = "記録できました！";
        axios.post("/api/posts/", this.post);
        this.posted = true;
      }
  }
});
</script>