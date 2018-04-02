<template lang="jade">
    div
      div.demo
      h2 jade测试
      p 
        span.text 这是一条测试的demo文本
        input(v-model='value1',@keydown.enter='loginIn',value="ceshi")
        p {{username}}
</template>
<script>
    export default{
      data(){
        return {
            username:'prayone'
        }
      }
    }
</script>
<style lang="stylus" scoped>
    .text
        font-size 30px
    input
        color red
        border 1px solid #bbb
        border-radius 3px
        margin 10px
        padding 6px 20px
</style>