import Vue from "vue";
import VueRouter from "vue-router";
import ContactBook from "@/views/ContactBook.vue"
import ContactInfo from "@/views/ContactInfo.vue"

Vue.use(VueRouter);

const routes = [
  {
    path:'/',
    name:"Contact Book",
    component:ContactBook,
  },
  {
    path:'/contact_info/:contact_id',
    name:"Contact Info",
    component:ContactInfo,
  }

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
