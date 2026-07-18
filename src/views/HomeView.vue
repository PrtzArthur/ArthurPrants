<script setup></script>
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
      <p>
        O CQC é um campeonato de avaliação de cafés, onde os participantes podem avaliar diferentes
        tipos de café e comparar suas notas com outros participantes. O objetivo é descobrir qual é
        o melhor café!
      </p>
    </div>
    <div class="card">
      <h2>Como participar?</h2>
      <p>
        Para participar do CQC, basta avaliar os cafés disponíveis. Cada avaliação conta pontos para
        o ranking geral, então quanto mais você avaliar, mais chances tem de ganhar!
      </p>
    </div>
    <div class="card">
      <h2>Ranking</h2>
      <p>
        O ranking do CQC mostra os participantes com as melhores avaliações. Acompanhe seu progresso
        e veja como você se compara aos outros participantes!
      </p>
    </div>
  </div>
  <div class="botao">
    <router-link to="/avaliacao" class="link-botao">Ver avaliações</router-link>
  </div>
  <div class="anuncio">
    <img class="anuncio-img" src="@/assets/megaphone.png" alt="Anuncio-img" />
    <ul>
      <h2>Participe do CQC e descubra o melhor café!</h2>
      <p class="p-anuncio">Cada avaliação conta! Faça a diferença!</p>
    </ul>
  </div>
</template>
<style scoped>

.p-anuncio {
  margin: 0;
  padding: 0;
}

.anuncio-img {
  width: 5vw;
  padding-right: 20px;
}

.anuncio {
  padding-bottom: 10px;
  padding-top: 10px;
  margin-right: 10vw;
  margin-left: 10vw;
  margin-top: 30px;
  text-align: center;
  align-items: center;
  background-color: #f9f5f2;
  display: flex;
  justify-content: center;
  border-bottom: 3px solid #dcdcdc;
  border-radius: 50px;
}

.botao {
  text-align: center;
  padding: 10px 40px;
  width: fit-content;
  margin: 30px auto 0 auto;
  border-radius: 10px;
  background-color: #59351f;
}

.link-botao {
  font-size: 22px;
  text-decoration: none;
  color: #fefbf3;
  display: inline-block;
}

.hero {
  margin-right: 20px;
  margin-left: 20px;
  margin-top: 20px;
  text-align: center;
  align-items: center;
  background-color: #f9f5f2;
  display: flex;
  justify-content: center;
  border-bottom: 3px solid #dcdcdc;
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

.card {
  background-color: #f9f5f2;
  border: 1px solid #dcdcdc;
  border-radius: 20px;
  padding: 20px;
  width: 30%;
  text-align: center;
}
</style>
