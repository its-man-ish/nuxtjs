<template>
  <div class="">

    <h1>Hows the Jokes</h1>
    <SearchJokes v-on:search-text="searchText" />
    <Joke v-for="(joke,i) in jokes"  :key="i" :id="joke.id" :joke="joke.joke"/>
  </div>
</template>

<script>

import axios from 'axios'
import Joke from '../../components/joke'
import SearchJokes from '../../components/Searchjokes'

export default{
  components: {
    Joke,
    SearchJokes
  },
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
  methods:{
    async searchText(text){
      const config = {
        headers:{
          'Accept':'application/JSON'
        }
      }
      try {
        const res = await axios.get(`https://icanhazdadjoke.com/search?term=${text}`,config)
        this.jokes = res.data.results
      } catch (e) {
        console.log(e)
      }
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
