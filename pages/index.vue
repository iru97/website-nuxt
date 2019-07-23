<template>
  <v-container
    grid-list-md
    text-xs-center
    row
    fluid
  >
    <!-- Header Section -->
    <v-layout
      row
      wrap
      align-center
      justify-center
      class="header"
    >
      <v-flex xs6>
        <Title :text="'Iru Hernández'" />
        <Subtitle :text="'Front End Developer'" />
      <v-layout
        row
        wrap
        justify-center
      >
        <v-flex
          v-for="media in socialMedia"
          :key="media.id"
          xs2
        >
          <SocialMedia :name="media.name" :link="media.link" />
        </v-flex>
      </v-layout>
      </v-flex>
      <v-flex xs6 justify-end>
        <Picture />
      </v-flex>
    </v-layout>
    <!-- Content Section -->
    <v-layout
      row
      wrap
      align-center
      justify-center
      class="content">
      <v-flex
        xs12
        :key="section.id"
        v-for="section in sections">
            <SectionBanner :title="section.title" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Picture from '../components/Picture.vue'
import SocialMedia from '../components/SocialMedia.vue'
import Title from '../components/Title.vue'
import Subtitle from '../components/Subtitle.vue'
import SectionBanner from '../components/SectionBanner.vue'

export default {
    components: {
        Picture,
        SocialMedia,
        Title,
        Subtitle,
        SectionBanner
    },
    data() {
        return {
            socialMedia: [
                {
                    id: 1,
                    name: 'twitter',
                    link: 'https://twitter.com/iruakabubi'
                },
                {
                    id: 2,
                    name: 'linkedin',
                    link: 'https://linkedin.com/in/iru-hernandez'
                },
                {
                    id: 3,
                    name: 'github',
                    link: 'https://github.com/iru97'
                },
                {
                    id: 4,
                    name: 'instagram',
                    link: 'https://instagram.com/iruhernandez.dev'
                }
            ],
            sections: [
                {
                    id: 1,
                    title: '¿Quién soy?'
                },
                {
                    id: 2,
                    title: 'Eventos'
                },
                {
                    id: 3,
                    title: 'Charlas'
                }
            ]
        }
    }
}
</script>
<style lang="stylus" scoped>
.header {
  padding: 5%;
}
.content {
  background-color: white;
  color: black;
  padding: 0 !important;
}
</style>
