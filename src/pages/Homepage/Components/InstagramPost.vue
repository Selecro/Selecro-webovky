<script setup lang="ts">
import { ref, onMounted } from "vue"
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const post = ref(null)
const username = ref("")
const profilePic = ref("")

const token = ""

async function getLatestPost() {
  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&limit=1&access_token=${token}`
  const res = await fetch(url)
  const data = await res.json()
  return data.data[0]
}

async function getAccountInfo() {
  const url = `https://graph.instagram.com/me?fields=id,username,profile_picture_url&access_token=${token}`
  const res = await fetch(url)
  const data = await res.json()
  return data
}

onMounted(async () => {
  post.value = await getLatestPost()
  const account = await getAccountInfo()
  username.value = account.username
  profilePic.value = account.profile_picture_url || ""
})
</script>

<template>
  <div class="ig-wrapper">
    <div v-if="post" class="ig-post" >
      <div>
        <div class="header">
          <img v-if="profilePic" :src="profilePic" class="profile-picture" />
          <span class="font-semibold text-sm">@{{ username }}</span>
        </div>

        <img :src="post.media_url" alt="IG post" class="ig-post-picture"/>

        <div class="p-3">
          <p class="text-gray-800 line-clamp-3 truncate-3">
            <h5>{{ post.caption }}</h5>
          </p>
        </div>
      </div>
      <div class="d-flex align-center justify-center">
        <v-btn
          :href="post.permalink"
          class="w-full text-center block text-black"
          target="_blank"
          rel="noopener"
          variant="plain"
        >
          <strong>{{ t('message.igButton')}}</strong>
        </v-btn>
      </div>
    </div>
    <div v-else>
      Příspěvěk není k dispozici
    </div>
  </div>
</template>

<style>
.ig-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100%;
}

.ig-post {
  width: 350px;
  height: auto;
  text-align: left;
  justify-content: center;
  align-content: center;
}

.ig-post div:first-child {
  padding: 0.5em;
}

.header {
  display: flex;
  align-items: center;
  gap: 1em;
  padding-bottom: 0.5em;
}

.profile-picture {
  width: 2.5em;
  height: 2.5em;
  border-radius: 60px;
}

.ig-post-picture {
  width: 100%;
}

a:hover {
  background-color: var(--primary-hover-color);
}

.truncate-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
