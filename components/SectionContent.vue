<template>
<div class="sectionContent">
  <p>{{ description }}</p>
  <template v-if="posts.length > 0">
    <v-col
        :key="post.title"
        v-for="post in posts">
        <v-card class="card" dark>
              <div class="d-flex">
                <v-avatar
                  class="ma-3"
                  size="125"
                  tile
                >
                  <v-img :src="post.image"></v-img>
                </v-avatar>
                <div>
                  <v-card-title
                    class="headline"
                    v-text="post.title"
                  ></v-card-title>
                  <p>{{ post.description }}</p>
                </div>
              </div>
            </v-card>
    </v-col>
  </template>
</div>
</template>

<script>
export default {
    name: 'SectionContent',
    props: {
        description: {
            type: String,
            required: true
        },
        id: {
            type: Number,
            required: true
        },
        posts: {
            type: Array,
            required: false,
            default: () => []
        }
    }
}
</script>

<style lang="stylus" scoped>
    .sectionContent {
        padding: 1% 5%;
    }
    .sectionContent > p {
        font-size: 30px;
    }
    .card {
        border: 2px black solid
        padding : 3rem
        margin-bottom : 3rem
        text-align :left
    }
</style>
