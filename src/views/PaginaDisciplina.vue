<template>
  <div>
    <DetalhesDisciplina :disciplina="disciplina" />
  </div>
</template>

<script>
import DetalhesDisciplina from "@/components/DetalhesDisciplina.vue";

export default {
  components: {
    DetalhesDisciplina,
  },
  data() {
    return {
      disciplina: {}, // Você preencherá isso com os dados da disciplina selecionada
    };
  },
  created() {
    // Carregue os dados da disciplina com base nos parâmetros da rota
    const sigla = this.$route.params.sigla;
    // Implemente a lógica de carregamento de dados aqui
  },
};
</script>

<style>
/* Estilize a página de detalhes da disciplina aqui */
</style>
