<template>
    <div>
        <div>我是熊二: <span>{{msg}}</span></div>
        <button @click="attackBrother">去打熊大</button>
    </div>

</template>

<script>
  export default {
    name: 'child2',
    data:()=>{
      return {
        msg:'大家好'
      }
    },
    methods:{
      attackBrother(){
        this.$parent.$emit('attack')
      }
    }
  }
</script>

<style scoped>

</style>