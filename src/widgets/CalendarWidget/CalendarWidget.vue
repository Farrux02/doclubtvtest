<template>
  <Calendar class="calendar" :attributes="attributes" />
</template>

<script>
import { Calendar } from "v-calendar";
import "v-calendar/style.css";
import "./style/calendar.css";

export default {
  components: {
    Calendar,
  },
  setup() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();

    const attributes = [
      {
        dot: true,
        dates: [
          new Date(year, month, 3),
          new Date(year, month, 4),
          new Date(year, month, 8),
          new Date(year, month, 13),
          new Date(year, month, 23),
        ],
      },
      {
        highlight: {
          contentClass: "active",
        },
        dates: [new Date(year, month, 3)],
      },
    ];

    return {
      attributes,
    };
  },
};
</script>
