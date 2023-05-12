<script lang="ts">
export default {};
</script>

<template>
  <div class="line">
    <input type="text" class="input" />
    <button class="button">G</button>
    <button class="button">V</button>
    <button class="button">P</button>
    <button class="button">F</button>
    <input type="text" class="input" />
  </div>
</template>

<style scoped lang="scss">
.line {
  display: grid;
  grid-gap: var(--space-1);
  grid-template-columns:
    1fr var(--space-7) var(--space-7) var(--space-7) var(--space-7)
    1fr;
  padding-bottom: var(--space-1);
}

.button,
.input {
  padding: var(--space-1);
}
</style>
