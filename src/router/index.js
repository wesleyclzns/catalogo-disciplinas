import { createRouter, createWebHistory } from 'vue-router';

// Importe seus componentes de página aqui
import PaginaInicial from '@/views/PaginaInicial.vue';
import PaginaDisciplina from '@/views/PaginaDisciplina.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: PaginaInicial,
  },
  {
    path: '/disciplina/:sigla',
    name: 'disciplina',
    component: PaginaDisciplina,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
