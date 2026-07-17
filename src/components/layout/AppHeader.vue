<script setup>
</script>
<template>
  <header>
    <div class="header-content">
      <h1><img src="@/assets/coffee-break.png" alt="Logo" />COFFEE QUALITY <br> CHALLENGE</h1>
      <ul>
        <router-link to="/">Home</router-link>
        <router-link to="/avaliacao">Avaliações</router-link>
        <router-link to="/ranking">Ranking</router-link>
      </ul>
    </div>
  </header>
</template>
<style scoped>

.header-content {
  background-color: #FEFEFE;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color:#52453C;
  border-bottom: 3px solid #DCDCDC;
  border-radius: 30px;
}

img {
  height: 50px;
  width: 50px;
  padding-right: 20px;
  display: block;
  padding-left: 40px;
}

h1 {
  font-size: 24px;
  margin: 0;
  display: flex;
  align-items: center;
}

ul {
  display: flex;
  gap: 30px;
  font-size: 22px;
  font-weight: bold;
  padding-right: 10vw;
}

ul a {
  text-decoration: none;
  color: #52453C;
}

ul a:hover {
  color: #a0785c;
}

</style>