<template>
    <div class="banner">
    <h3>{{ title }}</h3>
    </div>
</template>

<script>
export default {
    name: 'SectionBanner',
    props: {
        title: {
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
    .banner {
        color: #555555;
        padding: 1% 5%;
        cursor: pointer;
        margin: 1% 0;
        border: 3px solid #555555;
        border-radius: 20px;
    }
    .banner > h3 {
        font-size: 45px;
    }
</style>
