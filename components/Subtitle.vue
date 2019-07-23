<template>
  <h1 class="subtitle">
    {{ text }}
  </h1>
</template>

<script>
export default {
    name: 'Subtitle',
    props: {
        text: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>

</style>
