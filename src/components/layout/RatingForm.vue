<script setup>
import { ref, computed } from 'vue'

const emit = defineEmits(['adicionar-cafe'])

const nome = ref('')
const produtor = ref('')
const notas = ref({ aroma: 0, sabor: 0, acidez: 0, corpo: 0, finalizacao: 0 })
const obs = ref('')

const mediaSca = computed(() => {
  const total = notas.value.aroma + notas.value.sabor + notas.value.acidez + notas.value.corpo + notas.value.finalizacao
  return (total / 5).toFixed(1)
})

const enviarAvaliacao = () => {
  if (!nome.value || !produtor.value) return

  emit('adicionar-cafe', {
    id: Date.now(), 
    nome: nome.value,
    produtor: produtor.value,
    pontuacao: parseFloat(mediaSca.value) 
  })

  nome.value = ''
  produtor.value = ''
  notas.value = { aroma: 0, sabor: 0, acidez: 0, corpo: 0, finalizacao: 0 }
  obs.value = ''
}
</script>

<template>
  <div class="rating-form">
    <div class="form-header">
      <span class="icon"></span>
      <h3>Nova Avaliação</h3>
    </div>

    <div class="row">
      <div class="field">
        <label>Nome do Café</label>
        <input v-model="nome" placeholder="Ex: Bourbon Amarelo" />
      </div>
      <div class="field">
        <label>Produtor</label>
        <input v-model="produtor" placeholder="Ex: Fazenda Boa Vista" />
      </div>
    </div>

    <label class="section-label">Notas SCA (0 a 10)</label>
    <div class="notas-grid">
      <div v-for="(val, tipo) in notas" :key="tipo" class="nota-input">
        <label>{{ tipo.charAt(0).toUpperCase() + tipo.slice(1) }}</label>
        <input type="number" v-model="notas[tipo]" min="0" max="10" />
      </div>
    </div>

    <label>Observações</label>
    <textarea v-model="obs" placeholder="Digite suas observações..."></textarea>

    <div class="form-footer">
      <div class="media-box">
        <span>Média SCA</span>
        <div class="valor-media">{{ mediaSca }}</div>
      </div>
      <div class="actions">
        <button type="button" class="btn-limpar" @click="nome = ''; produtor = ''; notas = { aroma: 0, sabor: 0, acidez: 0, corpo: 0, finalizacao: 0 }; obs = '';">Limpar</button>
        <button type="button" class="btn-salvar" @click="enviarAvaliacao">Salvar Avaliação</button>
        </div>
    </div>
  </div>
</template>

<style scoped>
.rating-form {
  background: white;
  padding: 20px;
  border-radius: 15px;
  border: 1px solid #eee;
}
.form-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  color: #59351f;
}
.row {
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
}
.field {
  flex: 1;
}
input,
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fafafa;
}
.notas-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  margin-bottom: 15px;
}
.nota-input label {
  font-size: 12px;
  display: block;
  margin-bottom: 5px;
}
.section-label {
  display: block;
  margin: 15px 0 10px;
  font-weight: bold;
}
.form-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}
.media-box {
  background: #fff8f0;
  padding: 10px 20px;
  border-radius: 10px;
  text-align: center;
  border: 1px solid #f2e0cf;
}
.valor-media {
  font-size: 24px;
  font-weight: bold;
  color: #2d5a27;
}
.actions {
  display: flex;
  gap: 10px;
}
.btn-salvar {
  background: #59351f;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  cursor: pointer;
}
.btn-limpar {
  background: white;
  border: 1px solid #ddd;
  padding: 12px 20px;
  border-radius: 8px;
}
</style>