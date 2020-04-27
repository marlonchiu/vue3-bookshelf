import Vue from "vue"
import VueRouter, { RouteConfig } from "vue-router"
import AllBooks from "@/views/AllBooks.vue"
import FinishedBooks from "@/views/FinishedBooks.vue"

Vue.use(VueRouter)

export const routeMaps = {
  all: {
    name: "all",
    path: "/"
  },
  finished: {
    name: "finished",
    path: "/finished"
  }
}
const routes: Array<RouteConfig> = [
  {
    ...routeMaps.all,
    component: AllBooks
  },
  {
    ...routeMaps.finished,
    component: FinishedBooks
  }
]

// @ts-ignore
const router = new VueRouter({
  mode: "history",
  routes
})

export default router
