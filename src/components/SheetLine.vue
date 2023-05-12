<script lang="ts">
export default {};
</script>

<template>
  <div class="line">
    <input type="text" />
    <button>1</button>
    <button>2</button>
    <button>3</button>
    <button>4</button>
    <input type="text" />
  </div>
</template>

<style scoped lang="scss">
.line {
  display: grid;
  grid-gap: var(--space-1);
  grid-template-columns: auto var(--space-7) var(--space-7) var(--space-7) var(
      --space-7
    ) auto;
  padding-bottom: var(--space-1);
}
</style>
