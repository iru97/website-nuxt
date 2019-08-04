<template>
  <v-container
    grid-list-md
    row
    fluid
  >
    <!-- Header Section -->
    <v-layout
      row
      wrap
      align-center
      class="header"
    >
      <v-flex xs12 md6 justify-left>
        <Title :text="'Iru Hernández'" />
        <Subtitle :text="'Front End Developer'" />
      <v-layout
        row
        wrap
        justify-left
      >
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
      <v-flex text-xs-center xs12 md6 justify-end>
        <Picture />
      </v-flex>
    </v-layout>
    <!-- Content Section -->
    <v-layout
      row
      wrap
      align-center
      justify-center
      class="content"
      style="height: 80%">
      <v-flex
        xs12
        :key="section.id"
        v-for="section in sections">
            <SectionBanner :id="section.id" :title="section.title" @click.native="toggleSection(section.id)"/>
            <v-fade-transition>
              <SectionContent v-show="section.toggle" :id="section.id" :description="section.description"/>
            </v-fade-transition>
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
import SectionContent from '../components/SectionContent.vue'

export default {
    components: {
        Picture,
        SocialMedia,
        Title,
        Subtitle,
        SectionBanner,
        SectionContent
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
                    title: '¿Quién soy?',
                    description: 'Soy Iru orem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.',
                    posts: [],
                    toggle: false
                },
                {
                    id: 2,
                    title: 'Eventos',
                    description: 'Aquí los eventos',
                    posts: [],
                    toggle: false
                },
                {
                    id: 3,
                    title: 'Charlas',
                    description: 'Mis charlistas',
                    posts: [],
                    toggle: false
                },
                {
                    id: 4,
                    title: 'Formación',
                    description: 'Mi formación',
                    posts: [],
                    toggle: false
                }
            ]
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
.header {
  background-color: #303030;
  color: white;
  padding: 2% 10%;
  width:100%
}
.content {
  padding: 0 !important;
}
</style>
