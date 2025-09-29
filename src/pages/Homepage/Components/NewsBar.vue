<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const reports = [
  {
    title: 'Narozeniny',
    icon: 'mdi-email-outline',
    category: 'Selecro',
    description: 'Contrary to <a href="/profile"> popular belief,</a> Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discoveredand scrambled it to make a type s and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining ',
    date: "21.10.2024",
  },
  {
    title: 'Nový barevný režim',
    icon: 'mdi-account-outline',
    category: 'System',
    description: 'and scrambled it toContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered make and scrambled it to make a type s a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining ',
    date: "21.10.2024",
  },
  {
    title: 'Nový příspěvek',
    icon: 'mdi-cog-outline',
    category: 'Personal',
    description: 'and scrambled it to make a type and scrambled it to make a type sspecimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining ',
    date: "21.10.2024",
  },
  {
    title: 'Selecro slevy',
    icon: 'mdi-bell-outline',
    category: 'Selecro',
    description: 'and scrambled it to make a type specimen book. and scrambled it to make a type sIt has survived not only five centuries, but also the leap into electronic typesetting, remaining ',
    date: "21.10.2024",
  },
  {
    title: '1 rok s námi',
    icon: 'mdi-email-outline',
    category: 'Selecro',
    description: 'and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining ',
    date: "21.10.2024",
  },
  {
    title: 'Nový návod',
    icon: 'mdi-account-outline',
    category: 'System',
    description: 'and scrambled it to make a type specimen booand scrambled it to make a type sk. It has survived not only five centuries, but also the leap into electronic typesetting, remaining ',
    date: "21.10.2024",
  },
  {
    title: 'Dochází mi nápady',
    icon: 'mdi-cog-outline',
    category: 'System',
    description: 'and scrambled it to make a type specimenand scrambled it to make a type s book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining ',
    date: "21.10.2024",
  },
  {
    title: 'Alert Report',
    icon: 'mdi-bell-outline',
    category: 'System',
    description: 'and scrambled it to make a type speciand scrambled it to make a type smen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining ',
    date: "21.10.2024",
  },
  {
    title: 'Email Report',
    icon: 'mdi-email-outline',
    category: 'System',
    description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discoveredJe možné změnit barvu na červenou. and scrambled it to make a type sand scrambled it to make a type sand scrambled it to make a type sand scrambled it to make a type sand scrambled it to make a type s',
    date: "21.10.2024",
  },
  {
    title: 'User Report',
    icon: 'mdi-account-outline',
    category: 'System',
    description: 'Je možné změnit barvu na červenouContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered.',
    date: "21.10.2024",
  },
  {
    title: 'System Report',
    icon: 'mdi-cog-outline',
    category: 'System',
    description: 'Je možné změnit barvu na červenou. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered',
    date: "21.10.2024",
  },
  {
    title: 'Alert Report',
    icon: 'mdi-bell-outline',
    category: 'Personal',
    description: 'Je možné změnit Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered barvu na červenou.',
    date: "21.10.2024",
  },
]

const dialog = ref(false)
const selectedReport = ref<any | null>(null)

const clickOnNotification = (report: any) => {
  selectedReport.value = report
  dialog.value = true
}
</script>

<template>

  <h1>Co je nového?</h1>

  <v-container class="news-container">
      <div class="scroll">
        <v-list>
          <template
             v-for="(r, i) in reports"
             :key="i">
            <v-list-item
              class="pb-3 pr-6 pt-3 pl-6 new-item"
              clickable
              @click="clickOnNotification(r)"
              rounded="20"
            >
              <template #prepend>
                <img v-if="r.category === 'Selecro'" src="/public/logo-without-bg.png" class="icon-on-the-card"/>

                <Icon v-else-if="r.category === 'System'" icon="material-symbols:build-outline" class="icon-on-the-card"/>

                <Icon v-else icon="mdi:account-outline" class="icon-on-the-card"/>
              </template>
              <v-list-item-title>
                <div class="item-title">
                  <h4>{{ r.title }}</h4>
                </div>
              </v-list-item-title>
              <v-list-item-subtitle class="truncate-2">
                {{ r.description.replace(/<[^>]+>/g, '') }}
              </v-list-item-subtitle>
            </v-list-item>
          </template>
        </v-list>
      </div>
  </v-container>

  <v-dialog
    v-model="dialog"
    max-width="763"
  >
    <v-card
      class="pa-10"
      color="var(--primary-div-color)"
      rounded="lx"
    >
      <v-card-text class="d-flex justify-space-between pa-0">
        <h5>{{ selectedReport?.date }}</h5>
        <Icon icon="bxs:trash" height="26"/>
      </v-card-text>
      <v-card-title class="text-h6 pt-3 d-flex align-center pl-0 ml-0">
        <v-card-item>
          <img v-if="selectedReport?.category === 'Selecro'" src="/public/logo-without-bg.png" class="icon-on-the-dialog"/>

          <Icon v-else-if="selectedReport?.category === 'System'" icon="material-symbols:build-outline" class="icon-on-the-dialog"/>

          <Icon v-else icon="mdi:account-outline" class="icon-on-the-dialog"/>
        </v-card-item>
        <h4>{{ selectedReport?.title }}</h4>
      </v-card-title>
      <v-card-text class="pa-0 pb-3">
        <h5 class="full-desc" v-html="selectedReport?.description"></h5>
      </v-card-text>
      <v-card-actions class="pa-0">
        <v-spacer></v-spacer>
        <v-btn @click="dialog = false"><strong>Ok</strong></v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
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

.scroll::-webkit-scrollbar {
  width: 12px;
}

.scroll::-webkit-scrollbar-thumb {
  background: var(--primary-hover-color);
  border-radius: 12px;
  background-clip: padding-box;
}

.icon-on-the-card {
  margin-right: 1em;
  width: 70px;
  height: 70px;
}

.icon-on-the-dialog {
  height: 50px;
  width: auto;
}

.truncate-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #000000 !important;
}

.new-item {
  border-radius: 20px;
}

.new-item:hover {
  background-color: rgba(0, 0, 0, 0.17);
  border-radius: 20px;
}

.full-desc a {
  text-decoration: underline !important;
}

/*
.item-title div:last-child {
  font-size: small;
}*/
</style>
