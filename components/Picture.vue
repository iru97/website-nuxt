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
            image: require('../assets/images/profile.jpg')
        }
    },
    methods: {
        changeImageValue(image) {
            this.image = require(`../assets/images/${image}.jpg`)
        }
    }
}
</script>

<style lang="stylus" scoped>
.profile{
    border-radius: 50%;
}
</style>
