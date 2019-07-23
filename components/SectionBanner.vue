<template>
  <h2>{{ title }}</h2>
</template>

<script>
export default {
    name: 'SectionBanner',
    props: {
        title: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>
