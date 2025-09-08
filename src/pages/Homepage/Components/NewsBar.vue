<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const reports = [
  {
    title: 'Narozeniny',
    icon: 'mdi-email-outline',
    category: 'Selecro',
    description: 'Selecro slaví 5. narozeniny!',
    date: "21.10.2024",
  },
  {
    title: 'Nový barevný režim',
    icon: 'mdi-account-outline',
    category: 'System',
    description: 'Je možné změnit barvu na červenou.',
    date: "21.10.2024",
  },
  {
    title: 'Nový příspěvek',
    icon: 'mdi-cog-outline',
    category: 'Personal',
    description: 'Je možné změnit barvu na červenou.',
    date: "21.10.2024",
  },
  {
    title: 'Selecro slevy',
    icon: 'mdi-bell-outline',
    category: 'Selecro',
    description: 'Je možné změnit barvu na červenou.',
    date: "21.10.2024",
  },
  {
    title: '1 rok s námi',
    icon: 'mdi-email-outline',
    category: 'Selecro',
    description: 'Je možné změnit barvu na červenou.',
    date: "21.10.2024",
  },
  {
    title: 'Nový návod',
    icon: 'mdi-account-outline',
    category: 'System',
    description: 'Je možné změnit barvu na červenou.',
    date: "21.10.2024",
  },
  {
    title: 'Dochází mi nápady',
    icon: 'mdi-cog-outline',
    category: 'System',
    description: 'Je možné změnit barvu na červenou.',
    date: "21.10.2024",
  },
  {
    title: 'Alert Report',
    icon: 'mdi-bell-outline',
    category: 'System',
    description: 'Je možné změnit barvu na červenou.',
    date: "21.10.2024",
  },
  {
    title: 'Email Report',
    icon: 'mdi-email-outline',
    category: 'System',
    description: 'Je možné změnit barvu na červenou.',
    date: "21.10.2024",
  },
  {
    title: 'User Report',
    icon: 'mdi-account-outline',
    category: 'System',
    description: 'Je možné změnit barvu na červenou.',
    date: "21.10.2024",
  },
  {
    title: 'System Report',
    icon: 'mdi-cog-outline',
    category: 'System',
    description: 'Je možné změnit barvu na červenou.',
    date: "21.10.2024",
  },
  {
    title: 'Alert Report',
    icon: 'mdi-bell-outline',
    category: 'Personal',
    description: 'Je možné změnit barvu na červenou.',
    date: "21.10.2024",
  },
]
</script>

<template>
  <v-container class="news-container">
    <v-card
      color="var(--primary-color)"
      max-width="80%">
      <v-card-title class="text-center">{{ t('message.newTitle') }}</v-card-title>
      <div class="scroll">
        <v-list
          density="compact"
          style="background-color: var(--primary-hover-color);"
        >
          <template
             v-for="(r, i) in reports"
             :key="i">
          <v-list-item >
            <template #prepend>
              <img v-if="r.category === 'Selecro'" src="/public/logo-without-bg.png" class="icon-on-the-card"/>

              <Icon v-else-if="r.category === 'System'" icon="material-symbols:build-outline" class="icon-on-the-card"/>

              <Icon v-else icon="mdi:account-outline" class="icon-on-the-card"/>
            </template>
            <v-list-item-title>
              <div class="item-title">
                <div>
                  {{ r.title }}
                </div>
                <div>
                  {{ r.date }}
                </div>
              </div>
            </v-list-item-title>
            <v-list-item-subtitle>{{ r.description }}</v-list-item-subtitle>
          </v-list-item>
          <v-divider class="border-opacity-50"/>
          </template>
        </v-list>
      </div>
    </v-card>
  </v-container>
</template>

<style scoped>
.news-container {
  width: 100%;
  height: 100%;
}

.scroll {
  overflow-y: auto;
  overflow-x: hidden;
  height: 450px;
}

.icon-on-the-card {
  margin-right: 1em;
  width: 2.5em;
  height: 2.5em;
}

.item-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.item-title div:last-child {
  font-size: small;
}
</style>
