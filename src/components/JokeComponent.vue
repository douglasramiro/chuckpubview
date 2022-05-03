<template>
  <div class="joke">
    <div v:if="img !== '' && img !== ok">
      <div v:if="platform != ''">
        <img :src="platform" alt="platform" style="height: 200px" />
      </div>
      {{ joke }}
      <div class="number">
        <p>{{ number }}</p>
        <p>seconds to a new Joke!</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Joke",
  data() {
    return {
      joke: "Loading Joke...",
      img: "",
      server: "",
      number: 5,
      platform: "",
    };
  },
  methods: {
    getJoke() {
      let current = Date.now();
      axios
        .get(
          "http://chuck.tfcsummit.douglasramiro.me/randonFacts/?time=" + current
        )
        .then((r) => {
          this.number = 5;
          this.joke = r.data.Joke;
          this.img = r.data.Img;
          axios
            .get("http://chuck.tfcsummit.douglasramiro.me/whereIsRunnig/")
            .then((r) => {
              console.log(r);
              if (r.data.platform === "EKS") {
                this.platform =
                  "https://www.turbonomic.com/wp-content/uploads/2020/11/AWS-EKS-logo-no-background.png";
              } else {
                this.platform =
                  "https://docs.cloudposse.com/assets/kops-logo.png";
              }
            });
        })
        .catch(() => {
          this.number = 5;
        });
    },

    getImg() {
      return this.img;
    },
  },
  mounted() {
    this.getJoke();
    setInterval(() => {
      this.number = this.number - 1;
      if (this.number === 0) {
        this.getJoke();
      }
    }, 1000);
  },
};
</script>
