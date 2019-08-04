<template>
  <div class="subtitle">
    <h2>{{ text }}</h2>
  </div>
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
.subtitle > h2 {
    font-size: 50px;
}
</style>
