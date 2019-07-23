<template>
  <a :href="link" target="_blank">
    {{ name }}
  </a>
</template>

<script>
export default {
    name: 'SocialMedia',
    props: {
        name: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>
