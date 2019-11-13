<template>
  <div class="navbar">
    <div class="navbar-content" />
  </div>
</template>

<script lang='ts'>
export default {
    data() {
        return {
            langs: [
                'ES',
                'EN'
            ] as Array<string>
        }
    }
}
</script>

<style lang="stylus" scoped>
 .navbar {
    width: 100%;
    height: 6rem;
    background-color: #161618;
 }
</style>
