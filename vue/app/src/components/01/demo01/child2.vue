<template>
    <div>
        <div>我是熊大:
            <span>{{msg}}</span>
        </div>
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
    mounted () {
      this.$parent.$on('attack',()=>{
        this.msg='我好疼，别再打我了'
      })
    },

  }
</script>

<style scoped>

</style>