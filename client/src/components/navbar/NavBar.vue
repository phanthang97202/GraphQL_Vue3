<template>
  <div class="navbar">
    <a-menu mode="horizontal">
      <a-menu-item v-for="link in links" :key="link.key" :icon="link.icon">
        <RouterLink class="navbar_text" :to="`/${link.key}`">
          {{ link.title }}
        </RouterLink>
      </a-menu-item>
    </a-menu>
  </div>
</template>
<script setup>
import { RouterLink } from 'vue-router'
import { HomeOutlined, EyeOutlined, UserOutlined } from '@ant-design/icons-vue'
import { h } from 'vue'

const links = [
  {
    key: '',
    title: 'Home',
    icon: () => h(HomeOutlined)
  },
  {
    key: 'about',
    title: 'About',
    icon: () => h(UserOutlined)
  },
  {
    key: 'more',
    title: 'More',
    icon: () => h(EyeOutlined)
  }
]
</script>

<style scoped>
.navbar {
  padding-bottom: 10px;
}
.navbar_text {
  font-size: 1rem;
}
</style>
