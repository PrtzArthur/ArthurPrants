<script setup>
import { ref } from 'vue'
import CoffeeCard from '../components/layout/CoffeCard.vue'
import LeaderboardTable from '../components/layout/LeaderboardTable.vue'

const ranking = [
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
]

const cafeSelecionado = ref(null)

const abrirDetalhes = (cafe) => {
  cafeSelecionado.value = cafe
}

const fecharDetalhes = () => {
  cafeSelecionado.value = null
}
</script>

<template>
  <div class="container">
    <div class="ranking-header">
      <div>
        <h2> Ranking Geral</h2>
        <p>Classificação dos melhores cafés do campeonato.</p>
      </div>
      <div class="total-box">
        <span>Total de Cafés Avaliados</span>
        <strong>{{ ranking.length }}</strong>
      </div>
    </div>

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
          <button class="btn-detalhes" @click="abrirDetalhes(item)">Ver Detalhes</button>
        </div>
      </div>
    </div>

    <div class="segunda-exibicao">
      <h3>Visualização Alternativa</h3>
      <LeaderboardTable :ranking="ranking" />
    </div>

    <div v-if="cafeSelecionado" class="modal-overlay" @click.self="fecharDetalhes">
      <div class="modal-content">
        <button class="btn-fechar" @click="fecharDetalhes">✕</button>
        <CoffeeCard
          :nome="cafeSelecionado.nome"
          :produtor="cafeSelecionado.produtor"
          :pontuacao="cafeSelecionado.nota"
          :resumo="cafeSelecionado.resumo"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.modal-content {
  background: white;
  padding: 30px 20px 20px 20px;
  border-radius: 20px;
  position: relative;
  width: 90%;
  max-width: 450px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.btn-fechar {
  position: absolute;
  top: 10px;
  right: 15px;
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #888;
}

.btn-fechar:hover {
  color: #59351f;
}

.container {
  padding: 40px 10%;
  background-color: #fdfbf7;
}
.ranking-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}
.total-box {
  background: white;
  padding: 15px 25px;
  border-radius: 12px;
  border: 1px solid #eee;
  text-align: center;
}
.total-box strong {
  display: block;
  font-size: 24px;
  color: #59351f;
}

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
