<script setup>
defineProps({
  ranking: Array,
})

defineEmits(['ver-detalhes'])
</script>

<template>
  <div class="ranking-table">
    <div class="table-header">
      <span>Posição</span>
      <span>Café</span>
      <span>Produtor</span>
      <span>Nota Final</span>
      <span>Ações</span>
    </div>

    <div v-for="item in ranking" :key="item.id" class="table-row">
      <div class="pos">{{ item.medalha || item.id }}</div>
      <div class="cafe-nome">
        <strong>{{ item.nome }}</strong>
      </div>
      <div class="produtor">{{ item.produtor }}</div>
      <div class="nota">{{ item.nota }} </div>
      <div>
        <button class="btn-detalhes" @click="$emit('ver-detalhes', item)">Ver Detalhes</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ranking-table {
  background: white;
  border-radius: 15px;
  border: 1px solid #eee;
  overflow: hidden;
}
.table-header {
  display: grid;
  grid-template-columns: 0.5fr 1.5fr 1.5fr 1fr 1fr;
  padding: 15px 20px;
  background: #fafafa;
  font-weight: bold;
  font-size: 14px;
  color: #888;
}
.table-row {
  display: grid;
  grid-template-columns: 0.5fr 1.5fr 1.5fr 1fr 1fr;
  padding: 20px;
  border-top: 1px solid #eee;
  align-items: center;
}
.nota {
  color: #2d5a27;
  font-weight: bold;
  font-size: 18px;
}
.btn-detalhes {
  border: 1px solid #ddd;
  background: white;
  padding: 8px 15px;
  border-radius: 8px;
  cursor: pointer;
}
</style>
