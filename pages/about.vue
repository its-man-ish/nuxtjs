<template>
  <div class="">
    <h1>About Project</h1>
    <h3>DAD JOKES API</h3>
    <p>
      Endpoints
        Fetch a random dad joke
        GET https://icanhazdadjoke.com/ fetch a random dad joke.

        Fetching a random joke as JSON:

        $ curl -H "Accept: application/json" https://icanhazdadjoke.com/
        {
          "id": "R7UfaahVfFd",
          "joke": "My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.",
          "status": 200
        }
        Fetching a random joke as text:

        $ curl -H "Accept: text/plain" https://icanhazdadjoke.com/
          My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.
        Fetch a random dad joke as a Slack message
        GET https://icanhazdadjoke.com/slack fetch random dad joke formatted for Slack.

        This endpoint is used by the icanhazdadjoke Slack app but can be used by third parties who need to receive a random joke formatted as a Slack message.

        This endpoint will only ever return JSON.

        $ curl https://icanhazdadjoke.com/slack
        {
          "attachments": [
            {
              "fallback": "What kind of magic do cows believe in? MOODOO.",
              "footer": " - ",
              "text": "What kind of magic do cows believe in? MOODOO."
            }
          ],
          "response_type": "in_channel",
          "username": "icanhazdadjoke"
        }
        Fetch a dad joke

        Fetching a joke as JSON:

        $ curl -H "Accept: application/json" https://icanhazdadjoke.com/j/R7UfaahVfFd
        {
          "id": "R7UfaahVfFd",
          "joke": "My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.",
          "status": 200
        }
        Fetching a joke as text:

        $ curl -H "Accept: text/plain" https://icanhazdadjoke.com/j/R7UfaahVfFd
          My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.
        Fetch a dad joke as an image



        Search for dad jokes
        GET https://icanhazdadjoke.com/search - search for dad jokes.

        This endpoint accepts the following optional query string parameters:

        page - which page of results to fetch (default: 1)
        limit - number of results to return per page (default: 20) (max: 30)
        term - search term to use (default: list all jokes)
        Receive search results back as JSON:

    </p>
    <v-btn>
      <a href="https://icanhazdadjoke.com/api">more</a>
    </v-btn>
  </div>
</template>

<script>
export default{
  head(){
    return {
      title:"About: DAD JOKES API ",
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
