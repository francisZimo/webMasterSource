<template>
    <div>
        bb机1：'呼叫总部，呼叫总部。播放 90年代金曲'
        <button @click="playSongs('y-o-m')">播放一首yesterday once more</button>
    </div>
</template>

<script>
  export default {
    name: 'child5',
    methods:{
      playSongs(name){
        this.$BusDemo1.$emit('playSongs',name)
      }
    }
  }
</script>

<style scoped>

</style>