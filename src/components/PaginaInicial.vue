<template>
  <div>
    <h1>Pesquisa de Disciplinas</h1>
    <input v-model="searchQuery" placeholder="Digite a disciplina" />
    <button @click="search">Pesquisar</button>

    <ul>
      <li v-for="disciplina in disciplinas" :key="disciplina.SIGLA">
        <router-link
          :to="{ name: 'disciplina', params: { sigla: disciplina.SIGLA } }"
        >
          {{ disciplina.DISCIPLINA }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
      disciplinas: [], // Você preencherá isso com os dados das disciplinas
    };
  },
  methods: {
    search() {
      // Implemente a lógica de pesquisa aqui e atualize this.disciplinas
    },
  },
};
</script>

<style>
/* Estilize a página inicial aqui */
</style>
