<template>
  <div class="app">
    <Nav />
    <div id="buscador">
      <input
        class="btn search-btn"
        type="text"
        placeholder="Ej: Richard."
        v-model="filterUser"
        autofocus
      />
    </div>
    <Content :filter="filterUser" />
    <Footer />
  </div>
</template>

<script>
import Nav from "../components/Nav";
import Content from "../components/Content";
import Footer from "../components/Footer";

export default {
  name: "App",
  data: function () {
    return {
      filterUser: "",
    };
  },
  components: {
    Nav,
    Content,
    Footer,
  },
};
</script>

<style scoped>
#buscador {
  width: 100%;
  max-width: 750px;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8px auto 0;
  padding: 8px 0;
}
.btn {
  padding: 4px 4px;
}
.search-btn {
  width: 75%;
  height: 80%;
  display: block;
  padding: 8px;
  border-radius: 4px;
  border: 2px solid #239B56;
}

@media screen and (min-width: 700px) and (max-width: 1024px) {
  #buscador {
    max-width: 500px;
  }
}
@media screen and (max-width: 700px) and (min-width: 481px) {
  #buscador {
    max-width: 350px;
  }
}
@media screen and (max-width: 480px) {
  #buscador {
    max-width: 275px;
  }
  .search-btn {
    width: 100%;
  }
}
</style>