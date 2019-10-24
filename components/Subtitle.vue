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
    font-size: 4rem;
}
@media (max-width: 750px) {
.subtitle > h2 {
    font-size: 2.5rem;
  }
 }
</style>
