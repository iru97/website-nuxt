<template>
  <v-app light>
    <Navbar/>
    <nuxt />
  </v-app>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
    components: {
      Navbar
    },
    data() {
        return {
        }
    }
}
</script>

<style lang="stylus">
// @import url('https://fonts.googleapis.com/css?family=Quicksand&display=swap');
//   * {
//       font-family: 'Quicksand', sans-serif !important;
//   }
// @import url('https://fonts.googleapis.com/css?family=Alegreya+Sans&display=swap');
//   * {
//       font-family: 'Alegreya Sans', sans-serif !important;
//   }
@import url('https://fonts.googleapis.com/css?family=Abel&display=swap');
  * {
      font-family: 'Abel', sans-serif !important;
  }
// @import url('https://fonts.googleapis.com/css?family=Questrial&display=swap');
//   * {
//       font-family: 'Questrial', sans-serif !important;
//   }

</style>
