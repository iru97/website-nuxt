<template>
<div class="sectionContent">
  <p>{{ description }}</p>
</div>
</template>

<script>
export default {
    name: 'SectionContent',
    props: {
        description: {
            type: String,
            required: true
        },
        id: {
            type: Number,
            required: true
        }
    }
}
</script>

<style lang="stylus" scoped>
    .sectionContent {
        padding: 1% 5%;
    }
    .sectionContent > p {
        font-size: 30px;
    }
</style>
