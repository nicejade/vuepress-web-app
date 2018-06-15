<template>
  <span class="awesome-poetry">{{ text }}</span>
</template>

<script>
export default {
  name: "AwesomePoetry",

  computed: {
  },

  props: {
    text: {
      type: String,
      required: true,
      default: ''
    }
  },

  mounted() {},

  methods: {}
};
</script>

<style lang="stylus">
@import "./../override.styl"

.awesome-poetry
  color: $accentColor;
  text-shadow: #dcdfe6 0px 1px 1px;
</style>