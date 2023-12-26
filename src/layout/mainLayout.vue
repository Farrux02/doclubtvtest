<template>
  <side-bar />
  <div class="content" @click="closeModal">
    <the-header />
    <router-view />
  </div>
  <mobile-footer v-if="mobileLayout" />
</template>

<script>
import { TheHeader, SideBar, MobileFooter } from "@/widgets";
import { ref } from "vue";

export default {
  components: {
    TheHeader,
    SideBar,
    MobileFooter,
  },
  setup() {
    const mobileLayout = ref(false);

    if (window.innerWidth < 500) {
      mobileLayout.value = true;
    }

    const closeModal = () => {
      console.log('click');
      document.querySelector(".sidebar").classList.remove("sidebar--open");
    };

    return {
      mobileLayout,
      closeModal,
    };
  },
};
</script>

<style></style>
