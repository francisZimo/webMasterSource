<template>
    <div>
        <div>props传递：<span>{{msg}}</span></div>
        <div>特性$attrs：<span>{{$attrs.placeholder}}</span></div>
        <div>引用refs：<span>{{refMsg}}</span></div>
        <div>子元素$children：<span>{{childCon}}</span></div>
        <button @click="talkSecret">我要告诉老爹一个小秘密</button>
    </div>

</template>

<script>

  export default {
    name: 'child',
    inheritAttrs:false,
    props:{msg:String},
    data:()=>{
      return{
        refMsg:'我是child',
        childCon:'我将要改变父亲改变'
      }
    },
    methods:{
      talkSecret(){
        this.$emit('boySecret','love you')
      }
    }
  }
</script>

<style scoped>

</style>