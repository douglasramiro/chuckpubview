<template>
  <div class="jokeView" :style="{ backgroundImage: 'url(chuck.jpeg)' }">
    <div class="detail">
      <JokeComponent />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import JokeComponent from "@/components/JokeComponent.vue";

export default {
  name: "Joke",
  components: {
    JokeComponent,
  },
};
</script>
