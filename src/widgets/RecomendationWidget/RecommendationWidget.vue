<template>
  <section class="recommend">
    <header class="recommend__header">
      <h2 class="section__heading">Recommended media</h2>
      <router-link to="#">Read more</router-link>
    </header>
    <main class="recommend__body">
      <ul class="recommend__body__list">
        <li class="recommend__body__list_item">
          <div class="recommend__body__list_item__cover">
            <img src="@/assets/photos/news1.jpg" alt="news photo" />
            <div class="recommend__body__list_item__tags">
              <span class="recommend__body__list_item__tag">News</span>
              <span class="recommend__body__list_item__tag">Beginners</span>
            </div>
          </div>
          <h4 class="recommend__body__list_item__heading">
            Inflammatory bowel disease and mental disorders found to be linked
          </h4>
          <p class="recommend__body__list_item__views">Not viewed</p>
        </li>
        <li class="recommend__body__list_item">
          <div class="recommend__body__list_item__cover">
            <img src="@/assets/photos/news2.jpg" alt="news photo" />
            <div class="recommend__body__list_item__tags">
              <span class="recommend__body__list_item__tag">News</span>
              <span class="recommend__body__list_item__tag">Beginners</span>
            </div>
          </div>
          <h4 class="recommend__body__list_item__heading">
            Uzbekistan will strengthen its fight against tuberculosis
          </h4>
          <p class="recommend__body__list_item__views">Not viewed</p>
        </li>
      </ul>
    </main>
  </section>
</template>

<script>
import "./style/recommend.css";

export default {};
</script>

<style></style>
