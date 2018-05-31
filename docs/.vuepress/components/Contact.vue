<template>
  <div class="contact-moudle">
    <a v-for="item in contacts"
      :href="item.href" :key="item.type"
      class="link-item"
      target="_blank" rel="noreferrer noopener">
      {{ item.desc }}
    </a>
  </div>
</template>

<script>
export default {
  name: "Contact",

  computed: {
    contacts () {
      return this.$page.frontmatter.contacts
    }
  },

  mounted () {
  },

  methods: {
  }
}
</script>

<style lang="stylus">
.contact-moudle
  margin-top 1rem
  text-align center
  .link-item
    display inline-block
    min-width: 2.5rem
    background-color #ffffff
    border 1px solid #ebeef5
    box-shadow 0 2px 12px 0 rgba(0,0,0,.1)
    padding .666rem 1rem
    margin .5rem 1rem
    border-radius 1.5rem
</style>