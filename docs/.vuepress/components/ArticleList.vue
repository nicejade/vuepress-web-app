<template>
  <div class="component-article-list">
    <el-card
      v-for="item in frontmatter.items" shadow="hover"
      @click.native="handlerClick(item.link)">
      <div class="title">{{ item.title }}</div>
      <div class="description">
        {{ item.description }}
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "ArticleList",

  computed: {
    frontmatter () {
      return this.$page.frontmatter
    }
  },

  mounted () {
  },

  methods: {
    handlerClick (link) {
      this.$router.push(this.$page.path + link + '.html')
    }
  }
}
</script>

<style lang="stylus">
.component-article-list
  .el-card
    margin 10px
    cursor pointer
    .title
      font-size: 20px
      padding-bottom: 4px
      &:hover
        color: #409eff;
    .description
      color: #707780
</style>