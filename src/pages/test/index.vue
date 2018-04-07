<template>
    <div class="test">
        <div class="title">
            <p>测试 <span>test</span></p>
            <p class="username">username：<span>{{username}}</span></p>
        </div>
        <div class="danwei">
             <span class="f_12">12px</span>
             <span class="f_24">24rpx</span>
             <span class="f_14">14px</span>
             <span class="f_16">16px</span>
        </div>
        <div>
            <input type="text">
        </div>
    </div>
</template>
<script>
    export default{
        data() {
            return {
                username:''
            }
          },
        onLoad(options){
            console.log("mpvue方法："+this.$root.$mp.query.username)
            console.log("小程序方法："+options.username)
            this.username=this.$root.$mp.query.username
            }
    }
</script>
<style lang='stylus' scoped>
    .username
       color red
       font-size 40px
    .f_12
        font-size 12px
    .f_24
        font-size 24rpx
    .f_14
        font-size 28rpx
    .f_14
        font-size 28rpx
</style>