<template>
    <list class="list" @loadmore="fetch" loadmoreoffset="10">
      <cell class="cell" v-for="(num, index) in lists" :key="index">
        <div class="panel">
          <text class="text">{{num}}</text>
        </div>
      </cell>
    </list>
</template>
<script>
  const modal = weex.requireModule('modal')
  const LOADMORE_COUNT = 4

  export default {
    data () {
      return {
        lists: [1, 2, 3, 4, 5]
      }
    },
    methods: {
      fetch (event) {
        modal.toast({ message: 'loadmore', duration: 1 })

        setTimeout(() => {
          const length = this.lists.length
          for (let i = length; i < length + LOADMORE_COUNT; ++i) {
            this.lists.push(i + 1)
          }
        }, 800)
      }
    }
  }
</script>

<style scoped>
  .list-container{
    margin-top: 10px;
    overflow: hidden;
  }
  .panel {
    width: 600px;
    height: 250px;
    margin: 16px auto;
    flex-direction: column;
    justify-content: center;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(162, 217, 192);
    background-color: rgba(162, 217, 192, 0.2);
  }
  .text {
    font-size: 50px;
    text-align: center;
    color: #41B883;
  }
</style>