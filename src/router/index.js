import Vue from "vue";
import VueRouter from "vue-router";
import PaginaInicial from "@/views/PaginaInicial.vue"; // Importe o componente da página inicial
import PaginaDisciplina from "@/views/PaginaDisciplina.vue"; // Importe o componente da página de disciplina

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: PaginaInicial,
  },
  {
    path: "/disciplina/:sigla", // Defina um parâmetro :sigla na rota
    name: "disciplina",
    component: PaginaDisciplina,
    props: true, // Permite passar a SIGLA como prop para o componente
  },
];

const router = new VueRouter({
  routes,
});

export default router;
