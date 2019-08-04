<template>
  <img
    :src="image"
    width="50%"
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
img {
  display: block;
}
</style>
