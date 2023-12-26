<template>
  <div class="auth__form__wrapper">
    <p class="auth__form__code_text">
      The code was sent.
      <span @click="this.$emit('changeNumber')">Change the number</span>
    </p>
    <form class="auth__form">
      <div class="auth__form__code_inp_wrapper">
        <input
          type="text"
          v-for="(item, idx) in codeInp"
          :key="item"
          v-model="codeInp[idx]"
          :ref="(el) => (inputRefs[idx - 1] = el)"
          @input="changeFocusedInput(idx)"
          :class="['auth__form__code_inp', codeStatus]"
        />
      </div>
      <div class="auth__form__btn_wrapper">
        <button
          class="auth__form__btn"
          :disabled="newCodeTimer !== 0"
          @click="getNewCode"
          type="button"
        >
          {{ changeBtnText }}
        </button>
        <button
          class="auth__form__btn auth__form__btn_lite"
          v-if="newCodeTimer === 0"
          type="button"
          @click="centerDialogVisible = true"
        >
          Code did not come
        </button>
      </div>
      <p class="auth__form__invalid_code" v-if="codeStatus === 'error'">
        <span
          ><i
            ><svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Icons/alert-danger">
                <g id="Vector">
                  <path
                    d="M10.8334 13.3332C10.8334 13.7934 10.4603 14.1665 10.0001 14.1665C9.53984 14.1665 9.16675 13.7934 9.16675 13.3332C9.16675 12.8729 9.53984 12.4998 10.0001 12.4998C10.4603 12.4998 10.8334 12.8729 10.8334 13.3332Z"
                    fill="#DA3F3D"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.0001 14.1665C10.4603 14.1665 10.8334 13.7934 10.8334 13.3332C10.8334 12.8729 10.4603 12.4998 10.0001 12.4998C9.53984 12.4998 9.16675 12.8729 9.16675 13.3332C9.16675 13.7934 9.53984 14.1665 10.0001 14.1665Z"
                    fill="#DA3F3D"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.0001 16.6665C13.682 16.6665 16.6667 13.6817 16.6667 9.99984C16.6667 6.31794 13.682 3.33317 10.0001 3.33317C6.31818 3.33317 3.33341 6.31794 3.33341 9.99984C3.33341 13.6817 6.31818 16.6665 10.0001 16.6665ZM10.0001 18.3332C14.6025 18.3332 18.3334 14.6022 18.3334 9.99984C18.3334 5.39746 14.6025 1.6665 10.0001 1.6665C5.39771 1.6665 1.66675 5.39746 1.66675 9.99984C1.66675 14.6022 5.39771 18.3332 10.0001 18.3332Z"
                    fill="#DA3F3D"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.0001 5.83317C10.4603 5.83317 10.8334 6.20627 10.8334 6.6665V9.99984C10.8334 10.4601 10.4603 10.8332 10.0001 10.8332C9.53984 10.8332 9.16675 10.4601 9.16675 9.99984V6.6665C9.16675 6.20627 9.53984 5.83317 10.0001 5.83317Z"
                    fill="#DA3F3D"
                  />
                </g>
              </g>
            </svg> </i
        ></span>
        Invalid code
      </p>
    </form>

    <el-dialog
      v-model="centerDialogVisible"
      title="What should I do if the code doesn't arrive?"
      align-center
    >
      <ol>
        <li>
          You may have entered the wrong number or made a mistake in the number.
          Check everything again.
        </li>
        <li>
          The problem may be on the part of your mobile operator. Contact
          customer support.
        </li>
      </ol>
      <template #footer>
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.4667 3.19984C14.2 2.8665 13.8 2.6665 13.3333 2.6665H2.86668C2.46668 2.6665 2.06668 2.8665 1.73334 3.19984C1.40001 3.53317 1.33334 3.93317 1.33334 4.39984V11.8665C1.33334 12.3332 1.46668 12.7332 1.80001 13.0665C2.13334 13.3998 2.46668 13.5998 2.93334 13.5998H13.4C13.8 13.5998 14.2 13.3998 14.5333 13.0665C14.8 12.7332 15 12.3332 15 11.8665V4.39984C14.9333 3.93317 14.8 3.53317 14.4667 3.19984ZM8.40001 8.2665C8.33334 8.33317 8.26668 8.33317 8.20001 8.33317C8.13334 8.33317 8.06668 8.33317 8.00001 8.2665L3.06668 3.93317H13.4667L8.40001 8.2665ZM13.8 11.7998C13.8 11.9332 13.7333 11.9998 13.6667 12.0665C13.6 12.1332 13.5333 12.1998 13.4 12.1998H2.93334C2.80001 12.1998 2.73334 12.1332 2.66668 12.0665C2.60001 11.9998 2.53334 11.8665 2.53334 11.7998V5.33317L7.20001 9.2665C7.73334 9.73317 8.53334 9.73317 9.06668 9.2665L13.7333 5.39984L13.8 11.6665V11.7998Z"
              fill="#9D9DBB"
            />
          </svg>
          help@decmed.space</a
        >
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M12.0293 13.8247C11.2116 13.8247 10.2771 13.1238 10.2771 13.1238C10.2771 13.1238 10.1603 13.0654 9.98506 12.9486C9.28418 12.4814 7.76561 11.4885 7.12314 10.9628C6.8311 10.7292 6.65588 10.3787 6.65588 10.0283C6.65588 9.79467 6.71429 9.44423 7.12314 9.09379C7.41517 8.80176 7.76561 8.50973 8.05764 8.21769L5.8966 9.67786C5.77978 9.73627 5.13731 10.1451 3.96918 9.79467C3.03468 9.50264 1.98336 9.1522 1.92495 9.1522L1.80814 9.09379C1.57451 8.91857 1.28248 8.62654 1.34088 8.15929C1.39929 7.45841 2.15858 7.16638 2.45061 7.04956L9.69303 4.07083C10.3939 3.77879 12.847 2.78588 12.847 2.78588C13.0222 2.72748 13.7231 2.49385 14.2487 2.9027C14.4824 3.07792 14.716 3.42835 14.6576 4.01242C14.6576 4.36286 14.4824 5.18055 14.3071 6.34868L14.1319 7.57522L13.3726 12.4814C13.3142 12.8902 13.0806 13.6495 12.3213 13.8247C12.2045 13.8247 12.1461 13.8247 12.0293 13.8247ZM7.82402 9.96989C7.82402 10.0283 7.82402 10.0283 7.82402 9.96989C8.46649 10.4956 9.98506 11.4885 10.6275 11.8973C10.8612 12.0141 10.978 12.1309 10.978 12.1309C11.2116 12.3062 11.8541 12.6566 12.0293 12.5982C12.0877 12.5982 12.1461 12.423 12.1461 12.2477L13.139 5.99824C13.3142 4.94693 13.431 4.07083 13.431 3.77879C13.431 3.72039 13.431 3.72039 13.431 3.72039C13.3726 3.72039 13.2558 3.72039 13.1974 3.77879C13.1974 3.77879 10.8028 4.77171 10.0435 5.06374L2.85946 8.10088C2.85946 8.10088 2.80105 8.10088 2.80105 8.15929C3.2099 8.2761 3.79396 8.50973 4.31962 8.62654C4.96209 8.80176 5.25413 8.62654 5.31253 8.62654L9.69303 5.70621C10.2187 5.35577 11.0948 4.77171 11.562 5.35577C11.9709 5.82302 11.5036 6.4655 11.2116 6.81594C10.3939 7.63363 9.05055 8.91857 7.94083 9.96989C7.88242 9.96989 7.82402 9.96989 7.82402 9.96989Z"
              fill="#9D9DBB"
            />
          </svg>
          Chatbot
        </a>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { computed, ref, watch } from "vue";
import { useRouter } from "vue-router";
export default {
  emits: ["changeNumber"],
  setup() {
    const codeInp = ref(["", "", "", ""]);
    const inputRefs = ref([]);

    let code = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;

    alert(code);

    const router = useRouter();

    const changeFocusedInput = (index) => {
      if (codeInp.value[index].length === 1 && index < 4) {
        const nextInput = inputRefs.value[index];
        if (nextInput) {
          nextInput.focus();
        }
      }
    };

    const newCodeTimer = ref(10);
    const startTimer = () => {
      const intervalId = setInterval(() => {
        if (newCodeTimer.value > 0) {
          newCodeTimer.value -= 1;
        } else {
          clearInterval(intervalId);
        }
      }, 1000);
    };

    startTimer();

    const changeBtnText = computed(() => {
      if (newCodeTimer.value !== 0) {
        return `New code in ${newCodeTimer.value} seconds.`;
      } else {
        return `Get a new code`;
      }
    });

    const getNewCode = () => {
      if (newCodeTimer.value === 0) {
        code = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
        alert(code);
        newCodeTimer.value = 10;
        codeInp.value = ["", "", "", ""];
        codeStatus.value = null;
      }
    };

    const codeStatus = ref(null);

    watch(
      () => codeInp.value.at(-1),
      (val) => {
        if (val && +codeInp.value.join("") === code) {
          codeStatus.value = "success";
          setTimeout(() => {
            localStorage.setItem("token", 'token');
            router.push("/main");
          }, 1000);
        } else {
          codeStatus.value = "error";
        }
      }
    );

    const centerDialogVisible = ref(false);

    return {
      codeInp,
      changeFocusedInput,
      inputRefs,
      newCodeTimer,
      changeBtnText,
      getNewCode,
      codeStatus,
      centerDialogVisible,
    };
  },
};
</script>

<style></style>
