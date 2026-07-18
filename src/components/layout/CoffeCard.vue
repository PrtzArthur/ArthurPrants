<script setup>
defineProps({
  nome: String,
  produtor: String,
  pontuacao: Number,
  resumo: String
})
</script>

<template>
  <div class="coffee-card">
    <div class="card-header">
      <h3>{{ nome }}</h3>
      <span class="badge-pontuacao">{{ pontuacao }} pts</span>
    </div>
    <p class="produtor"><strong>Produtor:</strong> {{ produtor }}</p>
    <p class="resumo">{{ resumo }}</p>
  </div>
</template>

<style scoped>
.coffee-card {
  background-color: #f9f5f2;
  border: 1px solid #DCDCDC;
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 15px;
  color: #52453C;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.badge-pontuacao {
  background-color: #59351F;
  color: #FEFBF3;
  padding: 5px 10px;
  border-radius: 20px;
  font-weight: bold;
  font-size: 14px;
}

.produtor {
  font-size: 14px;
  opacity: 0.8;
  margin: 5px 0;
}

.resumo {
  font-size: 16px;
  margin-top: 10px;
}
</style>