<template>
  <div>
    <p class="card">
      {{text}}
    </p>
    <button @click='btn'>click</button>
  </div>
</template>

<script>
export default {
	data(){
		return{
			age:20,
			grade:4
		}
	},
  props: ['text'],
  methods:{
  	btn(){
  		this.text='jjj';
  		this.$emit('changeAge',this.age,this.grade)

  	}
  }
}
</script>

<style>
.card {
  padding: 10px;
}
</style>
