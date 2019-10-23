<template>
  <div class="title">
    <h1>{{ text }}</h1>
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
.title > h1 {
    font-size: 7rem;
}
</style>
