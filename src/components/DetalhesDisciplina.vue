<template>
  <div>
    <h1>{{ disciplina.DISCIPLINA }}</h1>
    <p>SIGLA: {{ disciplina.SIGLA }}</p>
    <p>TPEI: {{ disciplina.TPEI }}</p>
    <p>RECOMENDAÇÃO: {{ disciplina.RECOMENDAÇÃO }}</p>
    <p>OBJETIVOS: {{ disciplina.OBJETIVOS }}</p>
    <p>EMENTA: {{ disciplina.EMENTA }}</p>
    <p>BIBLIOGRAFIA BÁSICA: {{ disciplina["BIBLIOGRAFIA BÁSICA"] }}</p>
    <p>
      BIBLIOGRAFIA COMPLEMENTAR: {{ disciplina["BIBLIOGRAFIA COMPLEMENTAR"] }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["disciplina"],
};
</script>

<style>
/* Estilize a página de detalhes da disciplina aqui */
</style>
