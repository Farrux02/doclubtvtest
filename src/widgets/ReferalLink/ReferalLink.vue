<template>
  <div class="referal">
    <header class="referal__header">
      <h2 class="section__heading">Referral link</h2>
    </header>
    <main class="referal__body">
      <p class="referal__body__title">
        Invite your colleagues and get bonuses to your bonus account for their
        registration
      </p>
    </main>
    <footer class="referal__footer">
      <input type="text" v-model="referalLink" />
      <button class="referal__footer__btn">Copy link</button>
    </footer>
  </div>
</template>

<script>
import { ref } from "vue";
import "./style/referal.css";

export default {
  setup() {
    const referalLink = ref("docmed.space/doc/Giselle#ref_8s7");
    return {
      referalLink,
    };
  },
};
</script>

<style></style>
