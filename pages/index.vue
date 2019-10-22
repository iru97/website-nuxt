<template>
  <v-container fluid>
      <!-- Header Section -->
    <v-container
      row
      fluid
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
    </v-container>
    <!-- Content Section -->
    <v-container row>
      <v-layout
        row
        wrap
        align-center
        justify-center
        style="height: 80%">
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
    </v-container>
  </v-container>
</template>

<script>
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
                    title: '¿Quién soy?',
                    description: 'Hola, me llamo Iru Hernández, me voy a presentar rápidamente. Soy una persona apasionado por esto del desarrollo web, principalmente me centro en tecnologías javascript como puedes ver, he trabajado con VueJS, Angular2+, NuxtJS, Bootstrap, NodeJS y ExpressJS entre otras. Soy un chico de 22 años que vive en las Islas Canarias, soy una persona que busca la mejora continua y el crecimiento personal y profesional, me gusta estar activo por redes, suelo participar en eventos locales y si puedo asistir a nacionales también lo hago.',
                    toggle: false
                },
                {
                    id: 2,
                    title: 'Eventos',
                    description: 'Algunos eventos a los que he asistido',
                    posts: [],
                    toggle: false
                },
                {
                    id: 3,
                    title: 'Charlas',
                    description: 'A veces doy charlas, aunque estoy empezando en esto',
                    posts: [],
                    toggle: false
                },
                {
                    id: 4,
                    title: 'Me gusta tener una formación continuada para mejorar en todos los aspectos posibles, aquí te enseño un poco de lo que hago.',
                    description: 'Mi formación',
                    posts: [],
                    toggle: false
                }
            ]
        }
    },
    created() {
      this.sections[0].toggle = true
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
.container {
  padding: 0;
  // margin 0;
}

.header {
  background-color: #303030;
  color: white;
  padding: 0 10%;
  width:100%;
  max-height: 40rem;
  margin-bottom: 1%;
}

.content {
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding-left: 2.4rem;
    padding-right: 2.4rem;
    max-width: 100%;
}
</style>
