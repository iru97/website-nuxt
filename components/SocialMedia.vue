<template>
  <a :href="link" target="_blank" rel="noreferrer">
    <svg-icon
      :name="name"
      :title="name"
      :desc="`My ${name} profile`"
      width="3rem"
      height="3rem"
    />
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
