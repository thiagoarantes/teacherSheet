<script lang="ts">
import SheetLine from "./SheetLine.vue";

export default {
  components: { SheetLine },
  data() {
    return {
      totalG: 0,
      totalV: 0,
      totalP: 0,
      totalF: 0,
      lines: [1, 2, 3, 4, 5],
    };
  },
};
</script>

<template>
  <div class="sheet">
    <div class="points">
      <div class="point" title="Grammar">{{ totalG }}</div>
      <div class="point" title="Vocabulary">{{ totalV }}</div>
      <div class="point" title="Pronunciation">{{ totalP }}</div>
      <div class="point" title="Fluency">{{ totalF }}</div>
    </div>
    <div class="title">
      <div>NOTE</div>
      <div>CATEGORIES</div>
      <div>HINTS</div>
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
  padding-bottom: var(--space-1);

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

.title {
  display: grid;
  grid-gap: var(--space-1);
  grid-template-columns:
    1fr calc(calc(var(--space-7) * 4) + calc(var(--space-1) * 3))
    1fr;
  padding-bottom: var(--space-1);

  div {
    padding-left: var(--space-1);
    color: var(--neutral500);
    font-weight: bold;
    font-size: 10px;
  }
}
</style>
