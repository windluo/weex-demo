<template>
  <div class="wrapper">
    <div class="main-wraper">
      <router-view/>
    </div>
    <common-menu></common-menu>
  </div>
</template>

<script>
import CommonMenu from '@/components/CommonMenu'
export default {
  name: 'App',
  data () {
    return {
    }
  },
  components: {
    'common-menu': CommonMenu
  }
}
</script>

<style scoped>
  .wrapper {
    justify-content: center;
    align-items: center;
  }
</style>
