<template>
    <div>
        总部：收到，收到
    </div>
</template>

<script>
  export default {
    name: 'child6',
    mounted () {
      this.$BusDemo1.$on('playSongs',(name)=>{
        alert(`${name}---when i was young i listened to the radio`)
      })
    }
  }
</script>

<style scoped>

</style>