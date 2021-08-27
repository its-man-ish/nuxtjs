<template >
  <div class="container">
    <p>{{joke}}</p>
  </div>
</template>

<script>
  export default{
    name:'Joke',
    props:['joke','id']
  }
</script>
