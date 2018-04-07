<template>
  <div class="" @click="clickHandle('test click', $event)">

    <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>

    <div class="usermotto">
      <div class="user-motto">
        <card :text="motto"></card>
      </div>
    </div>

    <form class="form-container">
      <input type="text" class="form-control" v-model="motto" placeholder="v-model"/>
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy"/>
    </form>
    <a href="/pages/counter/main" class="counter">去往Vuex示例页面</a>
    <button @click="clickTest">{{testInfo}}</button>
    <p  >{{test}}</p>
    <div class="weui-cells__title">带跳转的列表项</div>
    <div class="weui-cells weui-cells_after-title">
      <navigator url="/pages/weui_test/main" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
        <div class="weui-cell__bd">weui_test</div>
        <div class="weui-cell__ft weui-cell__ft_in-access"></div>
      </navigator>
      <navigator url="/pages/jade_test/main" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
        <div class="weui-cell__bd">jade_test</div>
        <div class="weui-cell__ft weui-cell__ft_in-access"></div>
      </navigator>
      <navigator url="/pages/countTest/main" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
        <div class="weui-cell__bd">count_test</div>
        <div class="weui-cell__ft weui-cell__ft_in-access"></div>
      </navigator>
    </div>
  </div>

</template>

<script>
import card from '@/components/card'
import store from '../../store'


export default {
  data () {
    return {
      motto: 'Hello World',
      userInfo: {},
      test:store.state.count
    }
  },

  components: {
    card
  },
  computed:{
    testInfo(){
      return store.state.count;
    }
  },
  methods: {

    bindViewTap () {
      const url = '../test/main?username=prayone'
      wx.navigateTo({ url })
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    },
    clickTest(){
      store.commit('increment',20)
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
    store.commit('increment',20)
  },
  mounted () {

  }

}
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
