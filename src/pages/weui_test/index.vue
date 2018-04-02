<template>
    <div class="page">
	    <radio-group @change="radioChange">
	      <label class="weui-cell weui-check__label" v-for="item in radioItems" :key="index">
	        <radio class="weui-check" :value="item.value" :checked="item.checked" />
	        <div class="weui-cell__bd">{{item.name}}</div>
	        <div class="weui-cell__ft weui-cell__ft_in-radio" v-if="item.checked">
	          <icon class="weui-icon-radio" type="success_no_circle" size="16"></icon>
	        </div>
	      </label>
	    </radio-group>
	    <p>jade index.jade -P -w</p>
    </div>
</template>
<script>
export default {
  
  data() {
    return {
      radioItems: [
        { name: 'cell standard', value: '0' },
        { name: 'cell standard', value: '1', checked: true }
      ],
    }
  },
  methods: {
    radioChange(e) {
      console.log('radio 携带的值为：' + e.mp.detail.value);
      let radioItems = this.radioItems;
      for (let i = 0; i < radioItems.length; ++i) {
        radioItems[i].checked = radioItems[i].value === e.mp.detail.value;
      }
      this.radioItems = radioItems;
    }
  }

}
</script>

<style>
.nones {
  color: red;
}
</style>