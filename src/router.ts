import { createMemoryHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import switchDemo from './components/SwitchDemo.vue'


const history = createMemoryHistory()
export const router = createRouter({
  history: history,
  routes: [
    { path: '/', component: Home },
    {
      path: '/doc',
      component: Doc,
      children: [{ path: 'switch', component: switchDemo }],
    },
  ],
})
