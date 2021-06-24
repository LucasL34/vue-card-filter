<template>
  <nav id="nav">
    <router-link to="/" id="logo">
      <img :src="logo" alt="vuejs logo" title="vie.js" />
    </router-link>
    <router-link to="/" class="icon" v-if="page" v-text="page" />
  </nav>
</template>

<script>
import logo from "../assets/images/logo.png";

export default {
  name: "Nav",
  props: ["page"],
  data: function () {
    return { logo: logo };
  },
};
</script>

<style scoped>
#nav {
  width: 100%;
  height: 10vh;
  background-color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
}
.icon {
  color: #fff;
  padding: 4px 8px;
  border-radius: 3px;
  text-decoration: none;
}

.icon:hover,
.icon-on:hover {
  color: #1E8449;
  cursor: pointer;
}
#logo {
  width: auto;
  height: 75%;
  margin-left: 8px;
}
#logo > img {
  width: auto;
  height: 100%;
}

@media screen and (min-width: 1024px) {
  .icon {
    margin-right: 4px;
  }
}
</style>