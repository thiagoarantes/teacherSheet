<script lang="ts">
import { PropType } from "vue";
import { Line } from "./types";
import { categories } from "../utils";

export default {
  props: {
    lineNumber: Number,
    line: Object as PropType<Line>,
  },
  data() {
    return {
      categories: categories,
      note: this.line?.note || "",
      hints: this.line?.hints || "",
      bGrammar: this.line?.categories.indexOf(categories.grammar) !== -1,
      bVocabulary: this.line?.categories.indexOf(categories.vocabulary) !== -1,
      bPronunciation:
        this.line?.categories.indexOf(categories.pronunciation) !== -1,
      bFluency: this.line?.categories.indexOf(categories.fluency) !== -1,
    };
  },
  methods: {
    onClickButton(category: string): void {
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

      this.updateLine();
    },
    updateLine() {
      const newLine: Line = {
        note: this.note,
        categories: [
          this.bGrammar ? categories.grammar : "",
          this.bVocabulary ? categories.vocabulary : "",
          this.bPronunciation ? categories.pronunciation : "",
          this.bFluency ? categories.fluency : "",
        ],
        hints: this.hints,
      };

      this.$emit(
        "update-line",
        newLine,
        this.lineNumber === undefined ? -1 : this.lineNumber
      );
    },
  },
};
</script>

<template>
  <div class="line">
    <div class="label">NOTE</div>
    <div class="label">CATEGORIES</div>
    <div class="label">HINTS</div>
    <input type="text" class="input" v-model="note" @input="updateLine" />
    <button
      class="button"
      :class="{ clicked: bGrammar }"
      @click="() => onClickButton(categories.grammar)"
    >
      {{ categories.grammar }}
    </button>
    <button
      class="button"
      :class="{ clicked: bVocabulary }"
      @click="() => onClickButton(categories.vocabulary)"
    >
      {{ categories.vocabulary }}
    </button>
    <button
      class="button"
      :class="{ clicked: bPronunciation }"
      @click="() => onClickButton(categories.pronunciation)"
    >
      {{ categories.pronunciation }}
    </button>
    <button
      class="button"
      :class="{ clicked: bFluency }"
      @click="() => onClickButton(categories.fluency)"
    >
      {{ categories.fluency }}
    </button>
    <input type="text" class="input" v-model="hints" @input="updateLine" />
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
