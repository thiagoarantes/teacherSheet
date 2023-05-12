<script lang="ts">
export default {
  data() {
    return {
      lGrammar: "G",
      lVocabulary: "V",
      lPronunciation: "P",
      lFluency: "F",
    };
  },
  methods: {
    onClickButton(category: string): void {
      this.$emit("clicked", category);
    },
  },
};
</script>

<template>
  <div class="line">
    <input type="text" class="input" />
    <button class="button" @click="(_$event) => onClickButton(lGrammar)">
      {{ lGrammar }}
    </button>
    <button class="button" @click="(_$event) => onClickButton(lVocabulary)">
      {{ lVocabulary }}
    </button>
    <button class="button" @click="(_$event) => onClickButton(lPronunciation)">
      {{ lPronunciation }}
    </button>
    <button class="button" @click="(_$event) => onClickButton(lFluency)">
      {{ lFluency }}
    </button>
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
