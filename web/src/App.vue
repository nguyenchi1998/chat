<template v-if="$route.matched.length">
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import auth from "@/auth";

export default {
  name: "App",
  data() {
    return {
      loggedIn: auth.loggedIn
    };
  },
  created() {
    auth.onChange = loggedIn => {
      this.loggedIn = loggedIn;
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
