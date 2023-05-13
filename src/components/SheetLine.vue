<script lang="ts">
import { categories } from "../utils";

export default {
  props: {
    lines: Number,
    line: Number,
  },
  data() {
    return {
      categories: categories,
      bGrammar: false,
      bVocabulary: false,
      bPronunciation: false,
      bFluency: false,
    };
  },
  methods: {
    onClickButton(category: string, clicked: boolean): void {
      switch (category) {
        case categories.grammar:
          this.bGrammar = !this.bGrammar;
          break;
        case categories.vocabulary:
          this.bVocabulary = !this.bVocabulary;
          break;
        case categories.pronunciation:
          this.bPronunciation = !this.bPronunciation;
          break;
        case categories.fluency:
          this.bFluency = !this.bFluency;
          break;
        default:
          break;
      }

      clicked = !clicked;

      this.$emit("clicked", [category, clicked]);
    },
    verifyLine(event: Event) {
      /** only apply rule in the last line on the sheet */
      if (this.line === this.lines) {
        const hasValue = (<HTMLInputElement>event.target).value !== "";

        this.$emit("new-line", hasValue);
      }
    },
  },
};
</script>

<template>
  <div class="line">
    <div>NOTE</div>
    <div>CATEGORIES</div>
    <div>HINTS</div>
    <input type="text" class="input" @input="verifyLine" />
    <button
      class="button"
      :class="{ clicked: bGrammar }"
      @click="(_$event) => onClickButton(categories.grammar, bGrammar)"
    >
      {{ categories.grammar }}
    </button>
    <button
      class="button"
      :class="{ clicked: bVocabulary }"
      @click="(_$event) => onClickButton(categories.vocabulary, bVocabulary)"
    >
      {{ categories.vocabulary }}
    </button>
    <button
      class="button"
      :class="{ clicked: bPronunciation }"
      @click="
        (_$event) => onClickButton(categories.pronunciation, bPronunciation)
      "
    >
      {{ categories.pronunciation }}
    </button>
    <button
      class="button"
      :class="{ clicked: bFluency }"
      @click="(_$event) => onClickButton(categories.fluency, bFluency)"
    >
      {{ categories.fluency }}
    </button>
    <input type="text" class="input" />
  </div>
</template>

<style scoped lang="scss">
.line {
  display: grid;
  grid-gap: var(--space-1);
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas:
    "t1 t1 t1 t1"
    "i1 i1 i1 i1"
    "t2 t2 t2 t2"
    "b1 b2 b3 b4"
    "t3 t3 t3 t3"
    "i2 i2 i2 i2";
  border: 1px solid var(--neutral400);
  padding: var(--space-2);
  border-radius: var(--space-1);
  margin-bottom: var(--space-2);

  :first-child {
    grid-area: t1;
  }
  :nth-child(2) {
    grid-area: t2;
  }
  :nth-child(3) {
    grid-area: t3;
  }
  :nth-child(4) {
    grid-area: i1;
  }
  :nth-child(5) {
    grid-area: b1;
  }
  :nth-child(6) {
    grid-area: b2;
  }
  :nth-child(7) {
    grid-area: b3;
  }
  :nth-child(8) {
    grid-area: b4;
  }
  :last-child {
    grid-area: i2;
  }

  div {
    padding-left: var(--space-1);
    color: var(--neutral500);
    font-weight: bold;
    font-size: 10px;
  }
}

.button,
.input {
  padding: var(--space-1);
  border-radius: 0;
  border: 1px solid var(--neutral500);
}

.button {
  &.clicked {
    color: var(--primary100);
    font-weight: bold;
    border-color: var(--primary500);
    background-color: var(--primary500);
  }
}

@media (min-width: 769px) {
  .line {
    grid-template-columns:
      1fr var(--space-7) var(--space-7) var(--space-7) var(--space-7)
      1fr;
    grid-template-areas: unset;
    border: none;
    padding: 0 0 var(--space-1);
    margin-bottom: 0;

    :first-child {
      display: none;
    }
    :nth-child(2) {
      display: none;
    }
    :nth-child(3) {
      display: none;
    }
    :nth-child(4) {
      grid-area: unset;
    }
    :nth-child(5) {
      grid-area: unset;
    }
    :nth-child(6) {
      grid-area: unset;
    }
    :nth-child(7) {
      grid-area: unset;
    }
    :nth-child(8) {
      grid-area: unset;
    }
    :last-child {
      grid-area: unset;
    }
  }
}
</style>
