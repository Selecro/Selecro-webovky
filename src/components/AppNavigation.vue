<script setup lang="ts">
import { RouterLink } from 'vue-router'

</script>

<template>
  <header>
    <div>
      <div>
        <h1>Selecro</h1>
      </div>
      <div>
        <span class="material-icons">search</span>
        <span><h2>CZ</h2></span>


        <span class="material-icons">shopping_cart</span>
        <span class="material-icons">account_circle</span>
      </div>
    </div>
    <nav>
      <RouterLink to="/"><span class="material-icons">info</span>Selecro</RouterLink>
      <RouterLink to="/tool"><span class="material-icons">style</span>Pomůcky</RouterLink>
      <RouterLink to="/dictionary"><span class="material-icons">book</span>Slovník</RouterLink>
      <RouterLink to="/education"><span class="material-icons">school</span>Výuka</RouterLink>
      <RouterLink to="/manual"><span class="material-icons">view_in_ar</span>Návody</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>

<style scoped>
header {
  background-color: #86D1EA;
  color-text: black;

/*  padding: 1rem 2rem;
  */position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}

header div {
  display: flex;
}

header div :last-child {
  margin-left: auto;
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;

}

a {
  color: white;
  text-decoration: none;
  text-align: center;
  font-weight: bold;
  transition: background 0.3s;
  width: 20%;
  padding: 1rem 2rem;
  justify-content: center;
  align-items: center;

}

a:hover {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 5px;

}
</style>
