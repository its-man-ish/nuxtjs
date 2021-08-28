<template >
<form @submit.prevent="onSubmit" class="">
  <input type="text" v-model="text" placeholder="Search..." class="white pa-1 rounded">
  <v-btn class="py-1"><input type="submit"  value="Find"></v-btn>
</form>
</template>

<script>
  export default{
    name:'SearchJokes',
    data(){
      return {
        text:''
      }
    },
    methods:{
      onSubmit(){
        this.$emit('search-text',this.text);
        this.text="";
      }
    }

  }
</script>
