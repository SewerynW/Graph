<template>
  <div class="info">
    <p>
      {{ text }}
    </p>
  </div>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.info {
  text-align: left;
  letter-spacing: 0.2em;
  font-size: 1em;
  font-family: Arial, Helvetica, sans-serif;
  max-width: 25%;
  border-radius: 5%;
  box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.75);
  padding: 0 0.6em 0;
  background: #0f415081;
  color: aliceblue;
}
</style>
