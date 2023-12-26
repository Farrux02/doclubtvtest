<template>
  <main class="main">
    <div class="main__content">
      <stories-widget />
      <navigation-widget />
      <modules-widget />
      <section class="your-page">
        <h2 class="section__heading">Your page</h2>
        <div class="your-page__widgets">
          <div>
            <profile-widget />
            <referal-link />
          </div>
          <div>
            <rating-widget />
          </div>
        </div>
      </section>
      <recommendation-widget />
    </div>
    <aside class="aside">
      <calendar-widget />
      <events-widget />
    </aside>
  </main>
</template>

<script>
import {
  StoriesWidget,
  NavigationWidget,
  ModulesWidget,
  ProfileWidget,
  ReferalLink,
  RatingWidget,
  RecommendationWidget,
} from "@/widgets";
import { CalendarWidget, EventsWidget } from "@/widgets";
import "./style/mainpage.css";

export default {
  components: {
    StoriesWidget,
    NavigationWidget,
    ModulesWidget,
    ProfileWidget,
    ReferalLink,
    RatingWidget,
    RecommendationWidget,
    CalendarWidget,
    EventsWidget,
  },
};
</script>

<style></style>
