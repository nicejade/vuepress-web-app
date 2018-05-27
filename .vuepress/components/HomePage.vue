<template>
  <div class="home-page">
    <pre class="text-center">
      深居俯夹城，春去夏犹清。
      <strong>天意怜幽草，人间重晚晴。</strong>
      并添高阁迥，微注小窗明。
      越鸟巢干后，归飞体更轻。
              ———李商隐《晚晴》
    </pre>
  </div>
</template>

<script>
export default {
  name: 'HomePage',

  data () {
    return {
    }
  },

  methods: {
  }
}
</script>

<style lang="stylus">
.home-page
  height: calc(30vh - 3.6rem);
  background: linear-gradient(to left bottom,hsl(3, 100%, 85%) 0%,hsl(190, 100%, 85%) 100%);
  .text-center{
    text-align: center;
  }
</style>