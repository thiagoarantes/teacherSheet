<script lang="ts">
export default {
  data() {
    return {
      lGrammar: "G",
      lVocabulary: "V",
      lPronunciation: "P",
      lFluency: "F",
      bGrammar: false,
      bVocabulary: false,
      bPronunciation: false,
      bFluency: false,
    };
  },
  methods: {
    onClickButton(category: string, clicked: boolean): void {
      switch (category) {
        case this.lGrammar:
          this.bGrammar = !this.bGrammar;
          break;
        case this.lVocabulary:
          this.bVocabulary = !this.bVocabulary;
          break;
        case this.lPronunciation:
          this.bPronunciation = !this.bPronunciation;
          break;
        case this.lFluency:
          this.bFluency = !this.bFluency;
          break;
        default:
          break;
      }

      clicked = !clicked;
      this.$emit("clicked", [category, clicked]);
    },
  },
};
</script>

<template>
  <div class="line">
    <input type="text" class="input" />
    <button
      class="button"
      :class="{ clicked: bGrammar }"
      @click="(_$event) => onClickButton(lGrammar, bGrammar)"
    >
      {{ lGrammar }}
    </button>
    <button
      class="button"
      :class="{ clicked: bVocabulary }"
      @click="(_$event) => onClickButton(lVocabulary, bVocabulary)"
    >
      {{ lVocabulary }}
    </button>
    <button
      class="button"
      :class="{ clicked: bPronunciation }"
      @click="(_$event) => onClickButton(lPronunciation, bPronunciation)"
    >
      {{ lPronunciation }}
    </button>
    <button
      class="button"
      :class="{ clicked: bFluency }"
      @click="(_$event) => onClickButton(lFluency, bFluency)"
    >
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

.button {
  &.clicked {
    color: var(--primary500);
    font-weight: bold;
    border-color: var(--primary500);
    background-color: var(--primary100);
  }
}
</style>
