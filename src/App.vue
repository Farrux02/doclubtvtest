<template>
  <component v-if="layout" :is="`${layout}Layout`" />
</template>

<script>
import mainLayout from "./layout/mainLayout.vue";
import authLayout from "./layout/authLayout.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";

export default {
  components: {
    mainLayout,
    authLayout,
  },
  setup() {
    const route = useRoute();
    const layout = computed(() => route.meta.layout);
    return {
      layout,
    };
  },
};
</script>

<style scoped lang="scss"></style>
