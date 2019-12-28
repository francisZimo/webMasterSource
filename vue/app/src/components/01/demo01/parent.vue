<template>
    <div>
        <h2>我是demo</h2>
        <button @click="this.changeRef">点击改变孩子by ref</button>
        <button @click="this.changeChild">点击改变孩子by children[]</button>
        <div style="border: 1px solid red;margin-top: 20px">
            <h3>父传子</h3>
            <child
                    ref="child"
                    :msg='msg'
                    placeholder="我是老父亲placeholder"
                    v-on:boySecret='getBoySecret'
            >
            </child>
            <hr>
            <child ></child>
        </div>
        <div style="border:1px solid green;margin-top: 20px">
            <h3>兄弟之间传递</h3>
            <child2></child2>
            <child3></child3>
        </div>
        <div style="border:1px solid blue;margin-top: 20px">
            <h3>祖先后代</h3>
            <child4></child4>
        </div>
        <div style="border:1px solid yellow;margin-top: 20px">
            <h3>任意两个组件之间</h3>
            <h5>事件总线或者vuex</h5>
            <child5></child5>
            <child6></child6>
        </div>


    </div>
</template>

<script>
  import child from './child1'
  import child2 from './child2'
  import child3 from './child3'
  import child4 from './child4'
  import child5 from './child5'
  import child6 from './child6'
  export default {
    name: 'index',
    components:{child,child2,child3,child4,child5,child6},
    provide(){
      return {mission:'世代保佑镇魂街道的安全，保护家人'}
    },
    data:()=>{
      return {
        msg:'我是父亲，儿子收到回应',
        attrs:'我是父亲attrs'
      }
    },
    methods:{
      changeRef(){
        this.$refs.child.refMsg='小屁孩，打你'
      },
      changeChild(){
        this.$children[0].childCon='我被父级改变了，哈哈'
      },
      getBoySecret(msg){
        alert(msg)
      }

    }
  }
</script>

<style scoped>

</style>