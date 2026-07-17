import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RankingView from '../views/RankingView.vue'
import FormularioView from '../views/FormularioView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/avaliacao', 
    name: 'avaliacao',
    component: FormularioView
  },
  {
    path: '/ranking',
    name: 'ranking',
    component: RankingView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router