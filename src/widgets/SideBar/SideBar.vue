<template>
  <div class="sidebar">
    <router-link to="/main">
      <img
        class="sidebar__logo"
        src="@/assets/photos/docmed.space.png"
        alt="logo"
      />
    </router-link>
    <nav class="sidebar__nav">
      <div>
        <p class="sidebar__nav__title">Navigation</p>
        <ul class="sidebar__nav__list">
          <li class="sidebar__nav__list_item">
            <router-link to="/main">Main page</router-link>
          </li>
          <li class="sidebar__nav__list_item">
            <router-link to="!#">Education</router-link>
          </li>
          <li class="sidebar__nav__list_item">
            <router-link to="!#">Events</router-link>
          </li>
          <li class="sidebar__nav__list_item">
            <router-link to="!#">Media</router-link>
          </li>
          <li class="sidebar__nav__list_item">
            <router-link to="!#">About</router-link>
          </li>
          <li class="sidebar__nav__list_item">
            <router-link to="!#">Community</router-link>
          </li>
          <li class="sidebar__nav__list_item">
            <router-link to="!#">Medication</router-link>
          </li>
        </ul>
      </div>
      <div>
        <p class="sidebar__nav__title">Profile</p>
        <ul class="sidebar__nav__list">
          <li class="sidebar__nav__list_item">
            <router-link to="/main">Personal page</router-link>
          </li>
          <li class="sidebar__nav__list_item">
            <router-link to="!#">Settings</router-link>
          </li>
          <li class="sidebar__nav__list_item">
            <router-link to="!#">Exit</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import "./style/sidebar.css";

export default {};
</script>

<style></style>
