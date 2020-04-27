import Vue from "vue"
import VueCompositionApi from "@vue/composition-api"
import { Pagination } from "element-ui"
import "@/styles/element-variables.scss"
import { useProvider } from "@/context"
import App from "./App.vue"
import router from "./router"

Vue.use(VueCompositionApi)
Vue.component(Pagination.name, Pagination)
Vue.config.productionTip = false

new Vue({
  router,
  setup() {
    useProvider()
    return {}
  },
  render: h => h(App)
}).$mount("#app")
