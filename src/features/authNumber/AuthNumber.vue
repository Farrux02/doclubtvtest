<template>
  <div class="auth__form-wrapper">
    <label for="tel">Phone number</label>
    <form>
      <div class="auth__form__input-wrapper">
        <el-select
          popper-class="custom-header"
          placeholder="+998"
          v-model="telCode"
        >
          <template #header>
            <p>Select region</p>
          </template>
          <el-option
            v-for="region in regions"
            :key="region.value"
            :value="region.value"
            :label="region.value"
          >
            <span>{{ region.label }}</span>
          </el-option>
        </el-select>
        <input
          type="number"
          id="tel"
          class="auth__form__input"
          v-model="telNumber"
        />
      </div>
      <button
        class="auth__form__btn"
        :disabled="!telNumber"
        @click="confirmNumber"
      >
        Send code
      </button>
    </form>
    <p class="auth__form__agreements">
      I hereby agree to the
      <span>Terms of processing of my personal data.</span>
    </p>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  emits: ["confirmNumber"],
  setup(_, { emit }) {
    const regions = [
      {
        value: "+998",
        label: "Uzbekistan (+998)",
      },
      {
        value: "+971",
        label: "UAE (+971)",
      },
      {
        value: "+7",
        label: "Russia (+7)",
      },
    ];

    const telNumber = ref(null);

    const telCode = ref("+998");

    const confirmNumber = () => {
      if (telNumber.value) {
        console.log(telCode.value + telNumber.value);
        emit("confirmNumber");
      }
    };

    return {
      regions,
      telNumber,
      telCode,
      confirmNumber,
    };
  },
};
</script>

<style></style>
