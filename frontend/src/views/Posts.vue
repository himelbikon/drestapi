<template>
  <div class="posts">
    <div class="container my-3">
      <div class="row">
        <div class="col-12 col-md-4" v-for="post in APIData" :key="post.id">
          <div class="post-card">
            <div>
              <img
                class="img-fluid w-100"
                src="https://via.placeholder.com/500"
                alt=""
              />
            </div>

            <div class="my-2">
              <h5>{{ post.title }}</h5>
              <p>{{ post.content }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { getAPI } from "@/axios-api";
import { mapState } from "vuex";

export default {
  name: "Posts",
  data() {
    return {
      APIData: [],
    };
  },
  computed: mapState(["APIData"]),
  created() {
    this.getProducts();
  },
  methods: {
    async getProducts() {
      await getAPI
        .get("/posts/")
        .then((response) => {
          console.log("Api has receive data");
          this.APIData = response.data;
          console.log(this.APIData);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>