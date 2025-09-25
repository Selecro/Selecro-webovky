<script setup>
import { ref } from 'vue'

const length = ref(5)
const onboarding = ref(0)
</script>

<template>
  <v-window
    v-model="onboarding"
    show-arrows="hover"
    rounded="lx"
    class="banner-size"
  >
    <v-window-item
      v-for="n in length"
      :key="`card-${n}`"
    >
      <div class="welcome-banner">
        <div style="display: block; width: 80%;">
          <h1>Vítej na stránce</h1>
          <p class="pb-6 pt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa.</p>
          <v-btn
            href="/profile"
            class="custom-btn"
          >
            Přihlásit se
          </v-btn>
        </div>
      </div>
    </v-window-item>
  </v-window>
</template>

<style>
.banner-size {
  max-width: 1300px;
  border-radius: 20px;
  margin: 1em 0em;
}

.welcome-banner {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 433px;
  width: 100%;
  margin: 0;
  background-image: url('/wel-test1.jpg');
  background-size: cover;
  background-position: center;
}
</style>
