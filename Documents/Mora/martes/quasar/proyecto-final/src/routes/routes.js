
import hello from '../components/hello.vue'
import {createRouter, createWebHashHistory} from "vue-router"
const routes = [
{path: "/", components: hello}
]
export const router = createRouter({
history:createWebHashHistory(),
routes
})
