<template>
  <a :href="link" target="_blank" rel="noreferrer">
    <svg-icon
      :name="name"
      :title="name"
      :desc="`My ${name} profile`"
      width="5rem"
      height="5rem"
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
