import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./views/Home")
    },
    {
      //path: "/user/:id/:age/:country/:bio/:fullName/:mail/:photo/:username",
      path: "/user/:id",
      props: true,
      alias: "/userTest",
      /*id,
        age,
        country,
        biografy,
        full_name,
        mail,
        photo,
        username,*/
      name: "user",
      component: () => import("./views/Profile")
    }
  ]
});
