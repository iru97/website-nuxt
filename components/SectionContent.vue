<template>
  <div class="sectionContent" >
    <p>{{ section.description }} </p>
    <v-col v-for="talk in section.talks" :key="talk.title">
      <Talk v-bind="{ talk }"></Talk>
    </v-col>
    <v-col v-for="event in section.events" :key="event.title">
      <!--<Event v-bind="{ event }"></Event>
    </v-col>
    <v-col v-for="course in section.courses" :key="course.title">
      <Course v-bind="{ course }"></Course> -->
    </v-col>
  </div>
</template>

<script lang="ts">
import { SectionToogleable } from '../models'
const Talk = () => import('../components/Talk.vue')
export default {
  name: 'SectionContent',
  components: {
    Talk
  },
  props: {
    section: {
      type: Object as () => SectionToogleable[],
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
    .sectionContent > p {
        font-size: 30px;
    }
</style>
