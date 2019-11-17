<template>
  <header class="header">
    <h1>{{ text }}</h1>
  </header>
</template>
<script>
export default {
  //   data() {
  //     return {
  //       text: this.$store.state.text
  //     }
  //   },
  computed: {
    text() {
      return this.$store.state.text
    }
  },

  mounted() {
    setTimeout(() => {
      this.$store.commit('add')
    }, 5000)
  }
}
</script>
<style lang="scss" scoped>
.header {
  font-size: 2em;
  margin: 1em 0;
}
</style>
