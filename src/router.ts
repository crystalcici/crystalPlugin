import { createMemoryHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import switchDemo from './components/switch/SwitchDemo.vue'
import buttonDemo from './components/button/buttonDemo.vue'
import dialogDemo from './components/dialog/dialogDemo.vue'
import tabsDemo from './components/tabs/tabsDemo.vue'

const history = createMemoryHistory()
export const router = createRouter({
  history: history,
  routes: [
    { path: '/', component: Home },
    {
      path: '/doc',
      component: Doc,
      children: [
        { path: 'switch', component: switchDemo },
        { path: 'dialog', component: dialogDemo },
        { path: 'button', component: buttonDemo },
        { path: 'tabs', component: tabsDemo },
      ],
    },
  ],
})
