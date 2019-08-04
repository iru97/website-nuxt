<template>
  <!-- <a :href="link" target="_blank">
    {{ name }}
  </a> -->
  <svg-icon :name="name" :title="name" :desc="`My ${name} profile`" width="60%" height="100px"/>
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
