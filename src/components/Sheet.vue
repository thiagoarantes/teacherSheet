<script lang="ts">
import SheetLine from "./SheetLine.vue";

export default {
  components: { SheetLine },
  data() {
    return {
      lines: 1,
      score: 2.5,
      totalG: 0,
      totalV: 0,
      totalP: 0,
      totalF: 0,
    };
  },
  methods: {
    addNewLine(isAddingNewLine: boolean): void {
      isAddingNewLine && this.lines++;
    },
    onChildClick([category, clicked]: [string, boolean]): void {
      switch (category) {
        case "G":
          clicked ? this.totalG++ : this.totalG--;
          break;
        case "V":
          clicked ? this.totalV++ : this.totalV--;
          break;
        case "P":
          clicked ? this.totalP++ : this.totalP--;
          break;
        case "F":
          clicked ? this.totalF++ : this.totalF--;
          break;
        default:
          break;
      }

      this.updateScore();
    },
    updateScore(): void {
      const totalPoints = this.totalG + this.totalV + this.totalP + this.totalF;

      switch (totalPoints) {
        case 0:
          this.score = 2.5;
          break;
        case 1:
        case 2:
          this.score = 2.0;
          break;
        case 3:
        case 4:
          this.score = 1.5;
          break;
        case 5:
        case 6:
          this.score = 1.0;
          break;
        case 7:
        case 8:
          this.score = 0.5;
          break;
        default:
          this.score = 0.25;
          break;
      }
    },
  },
};
</script>

<template>
  <div class="sheet">
    <div class="score">Score: {{ score }}</div>
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
    <SheetLine
      v-for="index in lines"
      :lines="lines"
      :line="index"
      :key="index"
      @clicked="onChildClick"
      @new-line="addNewLine"
    />
  </div>
</template>

<style scoped lang="scss">
.sheet {
  padding: calc(var(--space-7) + var(--space-2)) var(--space-2) var(--space-2);
}

.score {
  width: 248px;
  margin: 0 auto var(--space-1);
  background-color: var(--neutral400);
  border-radius: var(--space-1);
  color: var(--neutral500);
  font-size: 2rem;
  padding: var(--space-1);
  text-align: center;
}

.points {
  display: flex;
  gap: var(--space-1);
  margin: 0 auto;
  width: fit-content;
  padding-bottom: var(--space-3);

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
