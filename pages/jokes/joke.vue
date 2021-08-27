<template>
  <div class="">
    <h1>Hows the Jokes</h1>

  </div>
</template>

<script>

import axios from 'axios'
export default{
  data(){
    return {
      jokes:[]
    }
  },
  async  created(){

    const config = {
      headers:{
        'Accept':'application/JSON'
      }
    }
    try {
      const res = await axios.get('https://icanhazdadjoke.com/search',config)
      this.jokes = res.data.results
    } catch (e) {
      console.log(e)
    }

  },
  head(){
    return {
      title:"Jokes ",
      meta:[
        {
          hid:"jokes",
          description:"description",
          content:"Jokes"
        }
      ]
    }
  }
}
</script>
