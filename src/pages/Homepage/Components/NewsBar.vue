<script setup lang="ts">
import { Icon } from '@iconify/vue'

const reports = [
  {
    title: 'Narozeniny',
    icon: 'mdi-email-outline',
    category: 'Selecro',
    description: 'Selecro slaví 5. narozeniny!',
  },
  {
    title: 'Nový barevný režim',
    icon: 'mdi-account-outline',
    category: 'System',
    description: 'Je možné změnit barvu na červenou.',
  },
  {
    title: 'Nový příspěvek',
    icon: 'mdi-cog-outline',
    category: 'Personal',
    description: 'Je možné změnit barvu na červenou.',
  },
  {
    title: 'Selecro slevy',
    icon: 'mdi-bell-outline',
    category: 'Selecro',
    description: 'Je možné změnit barvu na červenou.',
  },
  {
    title: '1 rok s námi',
    icon: 'mdi-email-outline',
    category: 'Selecro',
    description: 'Je možné změnit barvu na červenou.',
  },
  {
    title: 'Nový návod',
    icon: 'mdi-account-outline',
    category: 'System',
    description: 'Je možné změnit barvu na červenou.',
  },
  {
    title: 'Dochází mi nápady',
    icon: 'mdi-cog-outline',
    category: 'System',
    description: 'Je možné změnit barvu na červenou.',
  },
  {
    title: 'Alert Report',
    icon: 'mdi-bell-outline',
    category: 'System',
    description: 'Je možné změnit barvu na červenou.',
  },
  {
    title: 'Email Report',
    icon: 'mdi-email-outline',
    category: 'System',
    description: 'Je možné změnit barvu na červenou.',
  },
  {
    title: 'User Report',
    icon: 'mdi-account-outline',
    category: 'System',
    description: 'Je možné změnit barvu na červenou.',
  },
  {
    title: 'System Report',
    icon: 'mdi-cog-outline',
    category: 'System',
    description: 'Je možné změnit barvu na červenou.',
  },
  {
    title: 'Alert Report',
    icon: 'mdi-bell-outline',
    category: 'Personal',
    description: 'Je možné změnit barvu na červenou.',
  },
]
</script>

<template>
  <v-app>
    <v-main>
      <v-container
        min-width="500px">
        <v-card
          color="var(--primary-color)"
          min-width="100%">
          <v-card-title> Novinky </v-card-title>
          <v-list
            density="compact"
            color="var(--primary-color)"
          >
            <div class="scroll">
              <v-list-item
                v-for="(r, i) in reports"
                :key="i">
                <template #prepend>
                  <img v-if="r.category === 'Selecro'" src="/public/logo-without-bg.png" class="icon-on-the-card"/>

                  <Icon v-else-if="r.category === 'System'" icon="material-symbols:build-outline" class="icon-on-the-card"/>

                  <Icon v-else icon="mdi:account-outline" class="icon-on-the-card"/>
                </template>
                <v-list-item-title>{{ r.title }}</v-list-item-title>
                <v-list-item-subtitle>{{ r.description }}</v-list-item-subtitle>
              </v-list-item>
            </div>
          </v-list>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
.scroll {
  overflow-y: auto;
  overflow-x: hidden;
  height: 300px;
}

.icon-on-the-card {
  margin-right: 1em;
  width: 2.5em;
  height: 2.5em;
}
</style>
