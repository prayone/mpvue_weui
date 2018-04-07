<template>
	<div id='example-3'>
	  	<card  @changeAge="getage" :text='name'></card>
	  	<div>{{age}}</div>
	  	<div>{{grade}}</div>
	</div>
</template>
<script>
	import card from "@/components/card"
	export default {
		data(){
			return {
				name:'王萍',
				age:12,
				grade:99
			}
		},
		components:{
			card
		},
		methods:{
			getage(msg,hh){
				this.age=msg
				this.grade=hh
			}
		}
	}
</script>
<style lang="stylus"> 
</style>