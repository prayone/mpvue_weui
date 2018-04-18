<template>
	<div id='example-3'>
		<div class="components">
			<card  @changeAge="getage" :text='name'></card>
		  	<div>年龄：{{age}}</div>
		  	<div>班级：{{grade}}</div>
		</div>
	  	
	  	<view class="section">
		  <view class="section__title">普通选择器</view>
		  <picker @change="bindPickerChange" :value="index" :range="array">
		    <view class="picker">
		      当前选择：{{array[index]}}
		    </view>
		  </picker>
		</view>

		<view class="section">
		  <view class="section__title">时间选择器</view>
		  <picker mode="time" :value="time" start="09:01" end="21:01" @change="bindTimeChange">
		    <view class="picker">
		      当前选择: {{time}}
		    </view>
		  </picker>
		</view>

		<view class="section">
		  <view class="section__title">日期选择器</view>
		  <picker mode="date" :value="date" start="2017-09-01" end="2018-09-01" @change="bindDateChange">
		    <view class="picker">
		      当前选择: {{date}}
		    </view>
		  </picker>
		</view>

		<view class="section">
		  <view class="section__title">省市区选择器</view>
		  <picker mode="region" @change="bindRegionChange" :value="region" :custom-item="customItem">
		    <view class="picker">
		      当前选择：{{region[0]}}，{{region[1]}}，{{region[2]}}
		    </view>
		  </picker>
		</view>

		<view class="section">
			<view class="section__title">多选：checkbox</view>
			<checkbox-group @change="checkboxChange">
			  <label class="checkbox" v-for="(item,index) in items" :key='item'>
			    <checkbox :value="item.name" :checked="item.checked"/>{{item.value}}
			  </label>
			</checkbox-group>
		</view>
		
		<view class="section">
			<view class="section__title">单选：radio</view>
			<radio-group class="radio-group" @change="radioChange">
			  <label class="radio" v-for=" item in RadioItems" :key='item'>
			    <radio :value="item.name" :checked="item.checked"/>{{item.value}}
			  </label>
			</radio-group>
		</view>
	</div>
</template>
<script>
	import card from "@/components/card"
	export default {
		data(){
			return {
				name:'prayone',
				age:12,
				grade:3,
				array: ['中国','美国' , '巴西', '日本'],
				index:0,
				time: '12:01',
				date: '2018-04-08',
				region: ['广东省', '广州市', '海珠区'],
    			customItem: '全部',
    			items: [
				      {name: 'USA', value: '美国'},
				      {name: 'CHN', value: '中国', checked: 'true'},
				      {name: 'BRA', value: '巴西'},
				      {name: 'JPN', value: '日本'},
				      {name: 'ENG', value: '英国'},
				    ],
				RadioItems: [
				      {name: 'USA', value: '美国'},
				      {name: 'CHN', value: '中国', checked: 'true'},
				      {name: 'BRA', value: '巴西'},
				      {name: 'JPN', value: '日本'},
				      {name: 'ENG', value: '英国'},
				    ]
			}
		},
		components:{
			card
		},
		methods:{
			getage(msg,hh){
				this.age=msg
				this.grade=hh
			},
			bindPickerChange(e){
				console.log(e)
				console.log('picker发送选择改变，携带值为', e.mp.detail.value)
			    this.index = e.mp.detail.value
			},
			 bindTimeChange: function(e) {
			    console.log('picker发送选择改变，携带值为', e.mp.detail.value)
			    this.time = e.mp.detail.value
			},
			bindDateChange: function(e) {
			    console.log('picker发送选择改变，携带值为', e.mp.detail.value)
			    this.date = e.mp.detail.value
			},
			bindRegionChange: function (e) {
			    console.log('picker发送选择改变，携带值为', e.mp.detail.value)
			    this.region = e.mp.detail.value
			},
			checkboxChange: function(e) {
			    console.log('checkbox发生change事件，携带value值为：', e.mp.detail.value)
			},
			radioChange: function(e) {
			    console.log('radio发生change事件，携带value值为：', e.mp.detail.value)
			}
		}
	}
</script>
<style lang="stylus"> 
	#example-3
		font-size 28rpx
	.components
		border 1px solid #eeeeee
		margin 20rpx 10rpx
		padding 0 14rpx
	.section
		margin-top 12rpx
		.section__title
			padding-left 14rpx
		.picker
			border 1px solid #bbb
			margin 20rpx auto
			width 80%
		checkbox-group,radio-group
			margin 20rpx auto
			width 85%
</style>