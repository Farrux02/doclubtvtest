<template>
  <main class="main auth">
    <div class="auth__left">
      <lang-change />
      <div class="auth__left__content">
        <p class="auth__logo">docmed.space</p>
        <h1 class="auth__heading">
          <p>Closed</p>
          Evidence-based Medicine Club
        </h1>
        <auth-verification />
      </div>
      <login-footer />
    </div>
    <div class="auth__right">
      <img src="../../assets/photos/auth_img.jpg" alt="big img" />
    </div>
  </main>
</template>

<script>
import { AuthVerification, LoginFooter } from "@/widgets";
import { LangChange } from "@/features";
import "./style/login.css";

export default {
  components: {
    AuthVerification,
    LoginFooter,
    LangChange,
  },
};
</script>
<style></style>
