<template>
  <div class="container">
      <!-- Header Section -->
    <div
      class="header"
    >
      <v-layout
        row
        wrap
        align-center
      >
        <v-flex xs12 md6>
          <Title :text="'Iru Hernández'" />
          <Subtitle :text="'Front End Developer'" />
          <v-layout
            row
            wrap>
            <v-flex
              v-for="media in socialMedia"
              :key="media.id"
              xs6
              md2
            >
              <SocialMedia :name="media.name" :link="media.link" />
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex row xs12 md6>
          <Picture />
        </v-flex>
      </v-layout>
    </div>
    <!-- Content Section -->
    <div class="content">
      <v-layout
        row
        wrap
        align-center
        justify-center>
        <v-flex
          xs12
          :key="section.id"
          v-for="section in sections"
          class="content">
              <SectionBanner :id="section.id" :title="section.title" @click.native="toggleSection(section.id)"/>
              <v-fade-transition>
                <SectionContent v-show="section.toggle" :id="section.id" :description="section.description"/>
              </v-fade-transition>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
import socialMedia from '../assets/json/social.json'
import sections from '../assets/json/sections.json'
const Picture = () => import('../components/Picture.vue')
const SocialMedia = () => import('../components/SocialMedia.vue')
const Title = () => import('../components/Title.vue')
const Subtitle = () => import('../components/Subtitle.vue')
const SectionBanner = () => import('../components/SectionBanner.vue')
const SectionContent = () => import('../components/SectionContent.vue')

export default {
    components: {
        Picture,
        SocialMedia,
        Title,
        Subtitle,
        SectionBanner,
        SectionContent
    },
    asyncData() {
      return {
        socialMedia,
        sections
      }
    },
    methods: {
      toggleSection(id) {
        const section = this.sections.find(s => s.id === id)
        this.$set(section, 'toggle', !section.toggle)
      }
    }
}
</script>
<style lang="stylus" scoped>
* {
      font-family: 'Abel', sans-serif !important;
  }

.container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 20px;
}

.header {
  grid-area: 1 / 1 / 2 / 6;
  background-color: #303030;
  color: white;
  padding: 0 10%;
}
.content { grid-area: 2 / 1 / 6 / 6; }

// .header {
//   background-color: #303030;
//   color: white;
//   padding: 0 10%;
//   width:100%;
//   max-height: 40rem;
//   margin-bottom: 1%;
// }

// .content {
//     width: 100%;
//     margin-right: auto;
//     margin-left: auto;
//     padding-left: 2.4rem;
//     padding-right: 2.4rem;
//     max-width: 100%;
// }
</style>
