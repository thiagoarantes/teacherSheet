<script lang="ts">
import SheetLine from "./SheetLine.vue";

export default {
  components: { SheetLine },
  data() {
    return {
      pointsG: 0,
      pointsV: 0,
      pointsP: 0,
      pointsF: 0,
      lines: [1, 2, 3, 4, 5],
    };
  },
};
</script>

<template>
  <div class="sheet">
    <div class="points">
      <div class="point">{{ pointsG }}</div>
      <div class="point">{{ pointsV }}</div>
      <div class="point">{{ pointsP }}</div>
      <div class="point">{{ pointsF }}</div>
    </div>
    <SheetLine v-for="line in lines" :key="line" />
  </div>
</template>

<style scoped lang="scss">
.sheet {
  padding: calc(var(--space-7) + var(--space-2)) var(--space-2) var(--space-2);
}

.points {
  display: flex;
  gap: var(--space-1);
  margin: 0 auto;
  width: fit-content;

  .point {
    background-color: var(--neutral400);
    color: var(--neutral500);
    font-size: 2rem;
    padding: var(--space-1);
    border-radius: var(--space-1);
    width: var(--space-7);
    text-align: center;
  }
}
</style>
