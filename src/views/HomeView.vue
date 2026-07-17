<script></script>
<template>
  <div class="home">
    <div class="hero">
      <img src="@/assets/coffee-banner-homeView.png" alt="Banner-img" />
      <ul>
        <h1>Campeonato de Café 2026</h1>
        <p>Avalie, compare e descubra qual o melhor café!</p>
      </ul>
    </div>
  </div>
  <div class="cards">
    <div class="card">
      <h2>O que é o Coffee Quality Challenge (CQC) ?</h2>
      <p>O CQC é um campeonato de avaliação de cafés, onde os participantes podem avaliar diferentes tipos de café e comparar suas notas com outros participantes. O objetivo é descobrir qual é o melhor café!</p>
    </div>
    <div class="card">
      <h2>Como participar?</h2>
      <p>Para participar do CQC, basta avaliar os cafés disponíveis. Cada avaliação conta pontos para o ranking geral, então quanto mais você avaliar, mais chances tem de ganhar!</p>
    </div>
    <div class="card">
      <h2>Ranking</h2>
      <p>O ranking do CQC mostra os participantes com as melhores avaliações. Acompanhe seu progresso e veja como você se compara aos outros participantes!</p>
    </div>
  </div>
  <div class="botao">
    <a href="/avaliacao">Ver avaliações</a>
  </div>
</template>
<style scoped>

.botao {
  text-align: center;
  margin-top: 20px;
  border-bottom: 3px #DCDCDC;
  border-width: 100px;
  background-color: #59351F;;
}

a {
  color:#FEFBF3;
}

.hero {
  margin-top: 20px;
  text-align: center;
  align-items: center;
  background-color: #f9f5f2;
  display: flex;
  justify-content: center;
  border-bottom: 3px solid #DCDCDC;
  border-radius: 50px;
}
img {
  width: 10vw;
}

.cards {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  padding: 20px;
}

.card{
  background-color: #f9f5f2;
  border: 1px solid #DCDCDC;
  border-radius: 20px;
  padding: 20px;
  width: 30%;
  text-align: center;
}
</style>
