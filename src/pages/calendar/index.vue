<template>
    <div class="test">
         <vue-event-calendar :events="demoEvents" @monthChanged="" @dayChanged=""></vue-event-calendar>
    </div>
</template>
<script>
  
    export default{
         data () {
            return {
              demoEvents: [{
                date: '2016/12/15',
                title: 'eat',
                desc: 'longlonglong description'
              },{
                date: '2016/11/12',
                title: 'this is a title'
              }]
            }
          },
          methods: {
            monthChange (month) {
              console.log(month)
            },
            dayChange (day) {
              console.log(day)
            }
          }
    }
</script>
<style lang='stylus' scoped>
   
</style>