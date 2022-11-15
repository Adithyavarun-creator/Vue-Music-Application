<template>
  <app-header></app-header>
  <!-- Introduction -->

  <!-- Main Content -->
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>

  <!-- Player -->
  <app-player />

  <!-- Auth Modal -->
  <app-auth></app-auth>
</template>

<style>
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.5s linear;
}
.fade-enter-from {
  transition: all 0.5s linear;
  opacity: 0;
}
</style>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppAuth from "@/components/AppAuth.vue";
import AppPlayer from "@/components/AppPlayer.vue";
import { mapWritableState } from "pinia";
import useUserStore from "@/stores/user";
import { auth } from "@/includes/firebase";

export default {
  name: "App",
  components: {
    AppHeader: AppHeader,
    AppAuth: AppAuth,
    AppPlayer: AppPlayer,
  },
  computed: {
    ...mapWritableState(useUserStore, ["userLoggedIn"]),
  },
  //lifecycle method
  created() {
    if (auth.currentUser) {
      this.userLoggedIn = true;
    }
  },
};
</script>
