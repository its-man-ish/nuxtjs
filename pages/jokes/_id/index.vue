<template >
  <div class="container">

    <h1></h1>
    <p>{{joke.joke}}</p>
    <hr>
    <small>Joke id: {{joke.id}}</small>
    <small>url pattarn <br> localhost:3000/jokes/{{ $route.params.id }}</small>
    <br>
    <br>
    <v-btn to="/jokes/joke">
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
  </div>
</template>

<script>
  import axios from 'axios'
  export default{

    data(){
      return{
        joke:{}
      }
    },
    async  created(){

      const config = {
        headers:{
          'Accept':'application/JSON'
        }
      }
      try {
        const res = await axios.get(`https://icanhazdadjoke.com/j/${this.$route.params.id}`,config)
        this.joke = res.data
        console.log(this.joke)
      } catch (e) {
        console.log(e)
      }

    },
  };
</script>
