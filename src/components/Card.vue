<template>
  <router-link :to="{ name: 'user', params: { id: dataUser.id } }" class="card">
    <img
      class="avatar"
      :src="dataUser.photo"
      :alt="dataUser.fullName"
      :title="dataUser.username + '\'s avatar'"
    />
    <h3 class="name">{{ dataUser.fullName }}</h3>

    <div class="container-username">
      <span class="text"> {{ dataUser.username }} </span>
      <span class="text mutted">
        {{ dataUser.age | showAge | mutedText }}
      </span>
    </div>
    <div class="container-data">
      <span class="text"> {{ dataUser.mail | splitEmail }} </span>
      <span class="text mutted"> {{ dataUser.country | mutedText }} </span>
    </div>
  </router-link>
</template>

<script>
/*
 tener una variable en el general y tener dos content, 
 uno con un v-if que si es distinto a "" muestre todo y
  sino vaya filtrando por el nombre a los usuarios.
 */
export default {
  name: "Card",
  props: ["data"],
  data: function () {
    return {
      dataUser: this.data,
    };
  },
  filters: {
    mutedText: function (value) {
      return " (" + value + ")";
    },
    showAge: function (value) {
      return value + " yo";
    },
    splitEmail: function (value) {
      if (value.length < 25) return value;

      const splitedEmail = value.split("@");
      return splitedEmail[0] + "\n @" + splitedEmail[1];
    },
  },
};
</script>

<style scoped>
.card {
  width: 100%;
  height: 100%;
  display: grid;
  grid-auto-rows: 40% 15% 20% 15%;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 1px solid transparent;
  background-color: #fff;
  text-decoration: none;
  transition: 100ms;
}
.card:hover {
  background-color: #EAECEE;
  border: 1px solid black;
  cursor: pointer;
}
.avatar {
  margin: 0 auto;
}
.text,
.name {
  text-align: center;
}
.mutted {
  color: rgba(0, 0, 0, 0.6) !important;
}
.name {
  color: #239B56;
}
.text {
  color: #000;
}
[class|="container"] {
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 4px;
}
</style>