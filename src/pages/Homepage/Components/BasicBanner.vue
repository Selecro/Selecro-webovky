<script setup>
import { ref } from 'vue'

const length = ref(3)
const onboarding = ref(0)
</script>

<template>
  <v-window
    v-model="onboarding"
    show-arrows="hover"
  >
    <v-window-item
      v-for="n in length"
      :key="`card-${n}`"
    >
      <v-card
        class="d-flex align-center justify-center ma-2"
        elevation="2"
        height="433"
        rounded="lx"
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
      </v-card>
    </v-window-item>
  </v-window>
</template>

<style>
.welcome-banner {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 433px;
  width: 1300px;
  margin: 2em 0em;
  background-image: url('/wel-test1.jpg');
  background-size: cover;
  background-position: center;
  border-radius: 20px;
}
</style>
