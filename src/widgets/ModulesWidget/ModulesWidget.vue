<template>
  <section class="modules">
    <h2 class="section__heading">Your modules</h2>
    <ul class="modules__list">
      <!-- Каждый элемент li должен стоять в entities, и затем через vfor добавлен в widgetr -->
      <li class="modules__list_item">
        <header class="modules__list_item__header">
          <span
            class="modules__list_item__header__tag modules__list_item__header__tag-active"
            >Pediatrics</span
          >
          <span
            class="modules__list_item__header__tag modules__list_item__header__tag"
            >Pulmonology</span
          >
        </header>
        <main class="modules__list_item__main">
          <p>Antibacterial therapy. Pediatric pulmonology</p>
        </main>
        <footer class="modules__list_item__footer">
          <span>Online test</span>
          <span>materials</span>
        </footer>
      </li>
      <li class="modules__list_item">
        <header class="modules__list_item__header">
          <span
            class="modules__list_item__header__tag modules__list_item__header__tag-active"
            >Pediatrics</span
          >
          <span
            class="modules__list_item__header__tag modules__list_item__header__tag"
            >Pulmonology</span
          >
        </header>
        <main class="modules__list_item__main">
          <p>Antibacterial therapy. Pediatric pulmonology</p>
        </main>
        <footer class="modules__list_item__footer">
          <span>Online test</span>
          <span>materials</span>
        </footer>
      </li>
    </ul>
  </section>
</template>

<script>
import "./style/modules.css";

export default {};
</script>

<style></style>
