<script setup>
import { ref } from 'vue'
import CoffeeCard from '../components/layout/CoffeCard.vue'
import RatingForm from '../components/layout/RatingForm.vue'

const cafesAvaliados = ref([
  {
    id: 1,
    nome: 'Bourbon Amarelo',
    produtor: 'Fazenda Boa Vista',
    nota: 9.3,
    medalha: '🥇',
    resumo: 'Notas marcantes de chocolate, acidez cítrica média e corpo muito aveludado.',
  },
  {
    id: 2,
    nome: 'Arara',
    produtor: 'Sítio das Flores',
    nota: 8.7,
    medalha: '🥈',
    resumo: 'Doçura extrema que lembra mel, corpo denso e finalização longa com notas florais.',
  },
  {
    id: 3,
    nome: 'Catuaí Vermelho',
    produtor: 'Café do Vale',
    nota: 8.1,
    medalha: '🥉',
    resumo: 'Café equilibrado com notas de castanhas, acidez média e excelente para o dia a dia.',
  },
  {
    id: 4,
    nome: 'Mundo Novo',
    produtor: 'Fazenda Horizonte',
    nota: 7.4,
    medalha: null,
    resumo: 'Café com notas de frutas secas, acidez baixa e corpo médio, ideal para blends.',
  },
  {
    id: 5,
    nome: 'Icatu Amarelo',
    produtor: 'Sítio Verdejante',
    nota: 7.1,
    medalha: null,
    resumo: 'Café com notas de caramelo, acidez suave e corpo leve, perfeito para espresso.',
  },
] )

const cadastrarNovoCafe = (novoCafe) => {
  cafesAvaliados.value.push(novoCafe)
}
</script>

<template>
  <div class="container">
    <div class="content-grid">
      <div class="lista-col">
        <h4>Cafés Avaliados ({{ cafesAvaliados.length }})</h4>
        
        <div class="cards-stack">
          <div v-for="cafe in cafesAvaliados" :key="cafe.id" class="mini-card">
            <div class="icon-cafe">🫘</div>
            <div class="info">
              <span class="nome">{{ cafe.nome }}</span>
              <span class="detalhe">Produtor: {{ cafe.produtor }}</span>
            </div>
            <div class="nota-media">
              <small>Média SCA</small>
              <strong>{{ cafe.pontuacao || cafe.nota }}</strong>
            </div>
          </div>
        </div>
      </div>

      <div class="form-col">
        <RatingForm @adicionar-cafe="cadastrarNovoCafe" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 20px 10%;
  background-color: #fdfbf7;
  min-height: 100vh;
}
.header-section {
  margin-bottom: 30px;
}
.content-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 30px;
}
.mini-card {
  display: flex;
  align-items: center;
  background: white;
  padding: 15px;
  border-radius: 12px;
  margin-bottom: 10px;
  border: 1px solid #eee;
}
.icon-cafe {
  background: #f5ede4;
  padding: 15px;
  border-radius: 10px;
  margin-right: 15px;
}
.info {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}
.nome {
  font-weight: bold;
  color: #59351f;
}
.nota-media {
  text-align: right;
  color: #2d5a27;
}
.nota-media strong {
  display: block;
  font-size: 20px;
}
.dicas-banner {
  margin-top: 30px;
  background: #fdf7f2;
  border: 1px solid #e9dbc3;
  padding: 20px;
  border-radius: 15px;
  display: flex;
  gap: 20px;
}
</style>
