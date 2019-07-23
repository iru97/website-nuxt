<template>
  <div class="title">
    {{ text }}
  </div>
</template>

<script>
export default {
    name: 'Title',
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
