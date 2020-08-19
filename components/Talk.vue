<template>
  <div v-if="talk">
    {{ talk.title }}
    <v-card class="card" dark>
      <div class="d-flex">
        <v-avatar class="ma-3" size="125" tile>
          <v-img :src="talk.image" />
        </v-avatar>
        <div>
          <v-card-title class="headline" v-text="talk.title" />
          <p>{{ talk.description }}</p>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script lang="ts">
import { TalkModel } from '../models'

export default {
  name: 'Talk',
  props: {
    talk: {
      type: Object as () => TalkModel,
      required: false,
      default: () => {}
    }
  }
}
</script>

<style lang="stylus" scoped>
.sectionContent {
  padding: 1% 5%;
}

.card {
  border: 2px black solid;
  padding: 3rem;
  margin-bottom: 3rem;
  text-align: left;
}
</style>
