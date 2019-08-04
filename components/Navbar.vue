<template>
    <div class="navbar">
        <div class="navbar-content">

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            langs: [
                'ES',
                'EN'
            ]
        }
    }
}
</script>

<style lang="stylus" scoped>
 .navbar {
    width: 100%;
    height: 6rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 100;
    box-shadow: 0 4px 12px 0 rgba(0,0,0,.05);
    background-color: #161618;
 }

.navbar-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

</style>
