<script lang="ts">
import { calculateScore } from "../utils";

export default {
  props: {
    category: String,
    points: Number,
  },
  data() {
    return {
      calculateScore: calculateScore,
    };
  },
};
</script>

<template>
  <div class="point" title="Grammar">
    <div>
      {{ category }} -
      {{ calculateScore(points || 0) }}
    </div>
    <div>{{ points }}</div>
  </div>
</template>

<style scoped lang="scss">
.point {
  width: var(--space-7);
  text-align: center;

  :first-child {
    background-color: var(--primary500);
    color: var(--neutral100);
    border-radius: var(--space-1) var(--space-1) 0 0;
    font-size: 0.8rem;
    padding: var(--space-0-5);
  }

  :last-child {
    background-color: var(--neutral400);
    color: var(--neutral500);
    font-size: 2rem;
    padding: var(--space-0-5) var(--space-1) var(--space-1);
    border-radius: 0 0 var(--space-1) var(--space-1);
  }
}
</style>
