<template>
  <div>
    <!-- Header Section -->
    <div
      class="header"
    >
      <v-layout
        row
        wrap
        align-center
      >
        <v-flex md12>
          <Title :text="'Iru Hernández'" />
          <Subtitle :text="'Front End Developer'" />
        </v-flex>
        <v-flex row xs12 md6>
          <v-layout
                row
                wrap
              >
                <v-flex
                  v-for="media in socialMedia"
                  :key="media.id"
                  md2
                >
                  <SocialMedia :name="media.name" :link="media.link" />
                </v-flex>
              </v-layout>
        </v-flex>
      </v-layout>

    </div>
    <!-- Content Section -->
    <div>
      <v-layout
        column
        align-center
        justify-center
      >
        <v-flex
          v-for="section in sections"
          :key="section.id"
          xs12
          md4
          class="content"
        >
          <SectionBanner :id="section.id" :title="section.title" @click.native="toggleSection(section.id)" />
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
// const Picture = () => import('../components/Picture.vue')
const SocialMedia = () => import('../components/SocialMedia.vue')
const Title = () => import('../components/Title.vue')
const Subtitle = () => import('../components/Subtitle.vue')
const SectionBanner = () => import('../components/SectionBanner.vue')
const SectionContent = () => import('../components/SectionContent.vue')

export default {
    components: {
        // Picture,
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

.header {
  background-color: #303030;
  color: white;
  padding: 2% 12%;
  margin-bottom: 3%;
  background-image: url('../assets/images/profile.png')
  background-position: 60%
  background-size: 22rem
  &:hover {
    background-image: url('../assets/images/profile_boo.png')
  }
}

.content {
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding-left: 2.4rem;
    padding-right: 2.4rem;
    max-width: 100%;
}

@media (max-width: 1270px) {
  .header {
      background-image : none
      &:hover{
        background-image : none
      }
  }
}

@media (max-width: 959px) {
  .header {
      text-align : center
  }
}
</style>
