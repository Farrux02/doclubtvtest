<template>
  <component
    :is="`Auth${authStatus}`"
    @confirmNumber="authStatus = 'Code'"
    @changeNumber="authStatus = 'Number'"
  />
</template>

<script>
import { ref } from "vue";
import { AuthNumber, AuthCode } from "../../features";
import "./style/auth-form.css";

export default {
  components: {
    AuthNumber,
    AuthCode,
  },
  setup() {
    const authStatus = ref("Number");

    return {
      authStatus,
    };
  },
};
</script>

<style></style>
