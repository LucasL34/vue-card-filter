<template>
  <div class="app">
    <Nav page="Volver" />
    <div class="profile">
      <div class="profile-header">
        <div class="part-photo">
          <img
            :src="profile.user.photo"
            :alt="profile.user.username + '\'s avatar'"
            :title="profile.user.username + '\'s avatar'"
            class="photo"
          />
        </div>
        <div class="part-info">
          <h3 class="name-data">
            {{ profile.user.fullName }}
            <i class="username">{{ profile.user.username | resalter }}</i>
          </h3>
          <span class="text"> {{ profile.user.mail }} </span>
        </div>
      </div>
      <div class="profile-body">
        <p class="text">{{ profile.user.biografy }}</p>
      </div>
      <div class="profile-footer">
        <span class="text">
          Age: <b>{{ profile.user.age }}</b>
        </span>
        <span class="text">
          Country: <b>{{ profile.user.country }}</b>
        </span>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Vue from "vue";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

import allData from "../assets/users";

export default {
  name: "profile",
  data: function () {
    return {
      profile: {},
    };
  },
  components: {
    Nav,
    Footer,
  },
  created: function () {
    const id = this.$route.params.id;

    const data = allData.find((element) => id === element.id);

    Vue.set(this.profile, "user", data);
  },
  mounted: function () {
    const IsValidData = this.profile.user

    // refresh and lost data 
    if(!IsValidData){
      window.location.href = "/"
    }
  },
  filters: {
    resalter: function (value) {
      return "(" + value + ")";
    },
  },
};
</script>

<style scoped>
.profile {
  width: 80%;
  height: auto;
  min-height: 60vh;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  padding: 1.5rem;
  margin: 1rem 0;
}
.profile-header {
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.part-photo,
.part-info {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.profile-body {
  width: 100%;
  height: 70%;
  text-align: center;
}
.profile-footer {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.profile-header,
.profile-footer {
  margin: 20px 0;
}
.username {
  color: rgba(0, 0, 0, 0.5);
}
@media screen and (max-width: 480px) {
  .profile {
    width: 100%;
    height: 100%;
    min-height: 65vh;
    justify-content: center;
    margin: 0;
  }
}
@media screen and (max-height: 750px){
  .profile{
    min-height: 85vh;
  }
}
</style>