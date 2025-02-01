<script lang="ts">
// @ts-ignore
import { defineComponent } from 'vue';
import TheHeader from './layouts/TheHeader.vue';

export default defineComponent({
  components: {
    TheHeader
  },
});
</script>

<template>
  <the-header></the-header>
   <router-view class="wrapper" v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component v-if="slotProps.Component" :is="slotProps.Component" class="component"></component>
      <div v-else>No component found</div>
    </transition>
  </router-view>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
