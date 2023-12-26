<template>
  <div class="rating">
    <header class="rating__header">
      <h2 class="section__heading">Rating</h2>
    </header>
    <main class="rating__body">
      <el-tabs v-model="ratingType" type="card" class="rating__tabs">
        <el-tab-pane label="Overall" name="first">
          <ul class="rating__list">
            <li class="rating__list_item">
              <span class="rating__list_item__order">#122</span>
              <img
                class="rating__list_item__img"
                src="@/assets/photos/rating-avatar1.png"
                alt="avatar"
              />
              <div class="rating__list_item__text_wrapper">
                <p class="rating__list_item__name">
                  Dmitry Yuryevich Ovsyannikov
                </p>
              </div>
            </li>
            <li class="rating__list_item">
              <span class="rating__list_item__order">#123</span>
              <img
                class="rating__list_item__img"
                src="@/assets/photos/rating-avatar2.png"
                alt="avatar"
              />
              <div class="rating__list_item__text_wrapper">
                <p class="rating__list_item__name">
                  Tatiana Mikhailovna Ryabova
                </p>
              </div>
            </li>
            <li class="rating__list_item">
              <span class="rating__list_item__order">#124</span>
              <img
                class="rating__list_item__img"
                src="@/assets/photos/rating-avatar3.png"
                alt="avatar"
              />
              <div class="rating__list_item__text_wrapper">
                <p class="rating__list_item__name rating__list_item__name--me">
                  Giselle Saint Claire
                </p>
              </div>
            </li>
            <li class="rating__list_item">
              <span class="rating__list_item__order">#125</span>
              <img
                class="rating__list_item__img"
                src="@/assets/photos/rating-avatar4.png"
                alt="avatar"
              />
              <div class="rating__list_item__text_wrapper">
                <p class="rating__list_item__name">
                  Аширматов Бахрам Маджидович
                </p>
              </div>
            </li>
            <li class="rating__list_item">
              <span class="rating__list_item__order">#126</span>
              <img
                class="rating__list_item__img"
                src="@/assets/photos/rating-avatar5.png"
                alt="avatar"
              />
              <div class="rating__list_item__text_wrapper">
                <p class="rating__list_item__name">
                  Умурзакова Дилором Хашимовна
                </p>
                <p class="rating__list_item__info">Region / Specialty</p>
              </div>
            </li>
          </ul>
        </el-tab-pane>
        <el-tab-pane label="Region" name="second">Region</el-tab-pane>
        <el-tab-pane label="Specialization" name="third"
          >Specialization</el-tab-pane
        >
      </el-tabs>
    </main>
    <footer class="rating__footer">
      <button class="rating__footer__btn">Open rating</button>
    </footer>
  </div>
</template>

<script>
import { ref } from "vue";
import "./style/rating.css";

export default {
  setup() {
    const ratingType = ref("first");

    return {
      ratingType,
    };
  },
};
</script>

<style></style>
