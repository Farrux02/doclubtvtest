<template>
  <el-select v-model="activeLang" class="lang">
    <el-option
      v-for="lang in langs"
      :key="lang?.value"
      :value="lang?.value"
      :label="lang?.label"
    />
  </el-select>
</template>

<script>
import { ref } from "vue";
import "./style/lang-change.css";

export default {
  setup() {
    const langs = [
      {
        value: "en",
        label: "English",
      },
      {
        value: "ru",
        label: "Russian",
      },
      {
        value: "uz",
        label: "Uzbek",
      },
    ];

    const activeLang = ref("en");

    return {
      langs,
      activeLang,
    };
  },
};
</script>

<style></style>
