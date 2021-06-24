<template>
  <div v-if="getLength" class="content" id="cardContent">
    <Card v-for="item in getFilterer" :data="item" :key="item.id" />
  </div>
  <div v-else class="content">
    <h2>No found user :(</h2>
    <p>Try with another name</p>
    <img :src="img" alt="Match error image" class="error-img" />
  </div>
</template>

<script>
import Card from "./Card";

import users from "../assets/users";
import img from "../assets/images/pixeltrue-error.png";

export default {
  name: "Content",
  props: ["filter"],
  data: function () {
    return {
      img,
      contentElement: Element,
    };
  },
  components: {
    Card,
  },
  computed: {
    getFilterer: function () {
      const textFilter = this.filter.toLowerCase();

      if (textFilter === "") return users;
        console.log(textFilter)
      return users.filter((user) => {
        return user.fullName.toLowerCase().indexOf(textFilter) !== -1;
      });
    },
    getLength: function () {
      var cantOfItems = this.getFilterer;
      if (cantOfItems.length > 0) return true; 

      return false;
    },
  },
};
</script>

<style scoped>
#cardContent {
  display: grid;
  grid-template-columns: repeat(5, 200px);
  grid-auto-rows: 250px;
}
.content {
  width: 100%;
  max-width: 1360px;
  height: auto;
  min-height: 90vh;
  justify-content: center;
  gap: 2em;
  padding: 2em;
  margin-top: 25px;
  text-align: center;
}
.error-img {
  width: 50%;
}

@media screen and (min-width: 700px) and (max-width: 1024px) {
  #cardContent {
    grid-template-columns: 200px 200px 200px;
    gap: 1em;
    padding: 1em;
  }
}
@media screen and (max-width: 700px) and (min-width: 481px) {
  #cardContent {
    grid-template-columns: 200px 200px;
    padding-top: 0;
  }
}
@media screen and (max-width: 480px) {
  #cardContent {
    grid-template-columns: 275px;
    padding-top: 0;
  }
}
</style>