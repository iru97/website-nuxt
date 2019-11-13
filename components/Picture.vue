<template>
  <!-- <div class="picture"> </div> -->
  <img
    :src="image"
    alt="Iru Hernandez"
    class="profile"
    @mouseover="changeImageValue('profile_boo')"
    @mouseleave="changeImageValue('profile')"
  >
</template>

<script>
export default {
    data() {
        return {
            image: require('../assets/images/profile.png')
        }
    },
    methods: {
        changeImageValue(image) {
            this.image = require(`../assets/images/${image}.png`)
        }
    }
}
</script>

<style lang="stylus" scoped>
.picture {
  background-image : url('../assets/images/profile.png')
  width  : 25rem
  height : 20rem
}
// .picture:hover {
//   background-image : require('../assets/images/profile.png')
// }
.profile{
    max-width: 25rem;
}
img {
  display: block;
}
</style>
