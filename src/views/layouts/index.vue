<template>
  <div class="app-container">
  
    <div class="layout-content">
      <keep-alive v-if="$route.meta.keepAlive">
        <router-view></router-view>
      </keep-alive>
      <router-view v-else></router-view>
    </div>
    <div class="layout-footer">
      <TabBar :data="tabbars" @change="handleChange" />
    </div>
  </div>
</template>

<script>
import TabBar from '@/components/TabBar'
export default {
  name: 'AppLayout',
  data() {
    return {
      tabbars: [
        {
          title: '首页',
          to: {
            name: 'Home'
          },
          icon: 'home-o'
        },
        {
          title: '分类',
          to: {
            name: 'Class'
          },
          icon: 'user-o'
        },
        {
          title: '购物车',
          to: {
            name: 'Cart'
          },
          icon: 'user-o'
        },
        {
          title: '我的',
          to: {
            name: 'User'
          },
          icon: 'user-o'
        },
      ]
    }
  },
  components: {
    TabBar
  },
  methods: {
    handleChange(v) {
      console.log('tab value:', v)
    }
  }
}
</script>

<style lang="scss">

</style>
