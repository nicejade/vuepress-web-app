<template>
  <div class="advertisement-moudle">
    <el-carousel :height="carouselHeight" :interval="5000">
      <el-carousel-item v-for="item in items" :key="item.alt">
        <a :href="item.path" target="_blank" rel="noreferrer noopener">
          <img :src="item.image" :alt="item.alt">
        </a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'Advertisement',

  data () {
    return {
      carouselHeight: '250px',
      items: [
        {
          path: '//click.dji.com/AHT8n4-15xfguKCaOzzEPA?pm=link&as=0004',
          image: '//u.djicdn.com/uploads/ad_image_file/file/1234/970_250.jpg',
          alt: '特洛Tello-迷你无人机'
        },
        {
          path: '//click.dji.com/AHT8n4-15xfguKCaOzzEPA?pm=link&as=0004',
          image: '//u.djicdn.com/uploads/ad_image_file/file/1242/970_250.jpg',
          alt: '特洛Tello-益智编程无人机'
        },
        {
          path: '//click.dji.com/AHT8n4-15xfguKCaOzzEPA?pm=link&as=0004',
          image: '//u.djicdn.com/uploads/ad_image_file/file/992/970___250.jpg',
          alt: '大疆无人机-DJI "御" Mavic Air'
        },
        {
          path: '//click.dji.com/AK7CeCvGmHpnM3lP5Va7?pm=link&as=0004',
          image: '//u.djicdn.com/uploads/ad_image_file/file/449/970x250.jpg',
          alt: '大疆无人机-精灵 PHANTOM 4 ADVANCED'
        }
      ]
    }
  },

  computed: {
  },

  components: {
  },

  mounted () {
    const carouselWidth = Math.min(document.body.clientWidth, 970)
    const carouselHeight = Math.ceil((250 * carouselWidth) / 970)
    this.carouselHeight = `${carouselHeight}px`
  },

  methods: {
  }
}
</script>

<style lang="stylus">
.advertisement-moudle
  .text-center{
    text-align: center;
  }
  .VueCarousel
    .VueCarousel-pagination
      .VueCarousel-dot
        .VueCarousel-dot-button
          width: 12px !important
          height: 12px !important
          &:focus
            border: none !important
            outline: none !important
</style>