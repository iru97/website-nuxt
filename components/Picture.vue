<template>
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
.profile{
    max-width: 25rem;
}
img {
  display: block;
}
</style>
