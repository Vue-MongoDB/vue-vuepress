<template>
  <div class="mongoose">
    <h1>Projects Lists</h1>
    <input type="text" placeholder="Create a Post" v-model="text">
    <input type="text" placeholder="Create a Post with Preview" v-model="urlString">
    <button v-on:click="analysisData">CLICK TO POST REQUEST</button>
    <button v-on:click="generatePreview()">SEND URL</button>
    <div class="post-container">
      <div
        class="post"
        v-for="(post, index) in posts"
        v-bind:item="post"
        v-bind:index="index"
        v-bind:key="post._id"
        v-on:dblclick="deletePost(post._id)"
      >
        <h4 class="text">{{posts[index].text.title}}</h4>
        <h5 class="text">{{posts[index].text.description}}</h5>
        <a v-bind:href="posts[index].text.url" target="_blank">
          <img v-bind:src="posts[index].text.image">
        </a>

        <h6 class="text">{{ formatDate(post.createdAt) }}</h6>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  mounted() {
    console.log("mounted");
    this.getData();
  },
  data() {
    return {
      text: null,
      posts: null,
      urlString: null
    };
  },
  computed: {},
  created() {},
  methods: {
    generatePreview() {
      const randomKey = "5c32c72da32d9cefe75fadf1111936278f588ade3617c";
      axios
        .post("https://api.linkpreview.net", {
          q: this.urlString,
          key: randomKey
        })
        .then(resp => {
          console.log(resp.data);
          axios
            .post("https://vue-two.herokuapp.com/api/posts/", {
              text: resp.data,
              createdAt: new Date()
            })
            .then(response => {
              axios
                .get("https://vue-two.herokuapp.com/api/posts/")
                .then(update => {
                  this.contents = update.data;
                  this.posts = update.data;
                });
            })
            .catch(function(error) {
              console.log(error);
            });
        });
    },
    async getData() {
      console.log("created always run first");
      try {
        const res = await axios.get("https://vue-two.herokuapp.com/api/posts/");
        const data = res.data;
        this.contents = data; //PRINT JSON
        this.posts = data;
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    },
    formatDate(date) {
      // ISO => date, time
      var months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      var d = new Date(date);
      var namedMonth = months[d.getMonth()];
      return new Date(date).toLocaleString();
      // return `${namedMonth} ${d.getDate()}, ${d.getFullYear()} - ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
    },
    deletePost(idNum) {
      console.log(idNum);
    },
    analysisData() {
      axios
        .post("https://vue-two.herokuapp.com/api/posts/", {
          text: this.text,
          createdAt: new Date()
        })
        .then(response => {
          axios.get("https://vue-two.herokuapp.com/api/posts/").then(update => {
            this.contents = update.data;
            this.posts = update.data;
          });
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
<style scoped>
.text {
  color: white;
}

.post-container {
  border-radius: 25px;
  display: flex;
}

.post {
  margin-bottom: 10px;
  margin-right: 10px;
  padding: 1px 20px;
  background-color: black;
  border-radius: 25px;
}
@media (min-width: 710px) and (max-width: 900px) {
  .post-container {
    border-radius: 25px;
    display: block!important;
  }
}
@media (min-width: 0px) and (max-width: 414px) {
  .post-container {
    border-radius: 25px;
    display: block!important;
  }
}
</style>
