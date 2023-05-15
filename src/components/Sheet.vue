<script lang="ts">
import html2pdf from "html2pdf.js";
import SheetLine from "./SheetLine.vue";
import { Line } from "./types";
import { categories } from "../utils";
import { faLine } from "@fortawesome/free-brands-svg-icons";

export default {
  components: { SheetLine },
  data() {
    return {
      categories: categories,
      state: {
        score: 2.5,
        totalG: 0,
        totalV: 0,
        totalP: 0,
        totalF: 0,
        lines: [
          {
            note: "",
            categories: [""],
            hints: "",
          },
        ],
      },
    };
  },
  methods: {
    updateLine(line: Line, index: number): void {
      if (index !== -1) {
        this.state.lines[index] = line;

        /** Add new line automatically */
        if (this.state.lines.length === index + 1) {
          this.state.lines.push({ note: "", categories: [""], hints: "" });
        }

        this.updateCategoriesScore();
      }
    },
    updateCategoriesScore(): void {
      this.state.totalG = 0;
      this.state.totalV = 0;
      this.state.totalP = 0;
      this.state.totalF = 0;

      for (const line of this.state.lines) {
        this.state.totalG += line.categories[0] ? 1 : 0;
        this.state.totalV += line.categories[1] ? 1 : 0;
        this.state.totalP += line.categories[2] ? 1 : 0;
        this.state.totalF += line.categories[3] ? 1 : 0;
      }

      this.updateScore();
    },
    updateScore(): void {
      const totalPoints =
        this.state.totalG +
        this.state.totalV +
        this.state.totalP +
        this.state.totalF;

      switch (totalPoints) {
        case 0:
          this.state.score = 2.5;
          break;
        case 1:
        case 2:
          this.state.score = 2.0;
          break;
        case 3:
        case 4:
          this.state.score = 1.5;
          break;
        case 5:
        case 6:
          this.state.score = 1.0;
          break;
        case 7:
        case 8:
          this.state.score = 0.5;
          break;
        default:
          this.state.score = 0.25;
          break;
      }
    },
    exportToPDF() {
      html2pdf(document.querySelector(".sheet"), {
        margin: 1,
        filename: "correction-result.pdf",
      });
    },
  },
};
</script>

<template>
  <div class="sheet">
    <div class="header">
      <div class="score">Score: {{ state.score }}</div>
      <div class="points">
        <div class="point" title="Grammar">
          <div>{{ categories.grammar }}</div>
          <div>{{ state.totalG }}</div>
        </div>
        <div class="point" title="Vocabulary">
          <div>{{ categories.vocabulary }}</div>
          <div>{{ state.totalV }}</div>
        </div>
        <div class="point" title="Pronunciation">
          <div>{{ categories.pronunciation }}</div>
          <div>{{ state.totalP }}</div>
        </div>
        <div class="point" title="Fluency">
          <div>{{ categories.fluency }}</div>
          <div>{{ state.totalF }}</div>
        </div>
      </div>
    </div>
    <div class="title">
      <div>NOTE</div>
      <div>CATEGORIES</div>
      <div>HINTS</div>
    </div>
    <SheetLine
      v-for="(line, index) in state.lines"
      :lineNumber="index"
      :line="line"
      :key="index"
      @update-line="updateLine"
    />
  </div>
  <div class="footer">
    <button class="button" @click="exportToPDF">Export results</button>
  </div>
</template>

<style scoped lang="scss">
.sheet {
  padding: calc(var(--space-7) + var(--space-2)) var(--space-2);
}

.header {
  display: flex;
  gap: var(--space-1);
  padding-bottom: var(--space-3);
  justify-content: center;
  align-items: stretch;
}

.score {
  display: flex;
  align-items: center;
  background-color: var(--primary500);
  border-radius: var(--space-1);
  color: var(--neutral100);
  font-size: 1.5rem;
  padding: var(--space-1);
  text-align: center;
}

.points {
  display: flex;
  gap: var(--space-1);
  width: fit-content;

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
}

.title {
  display: none;
}

.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: var(--space-2);
  background-color: var(--neutral100);

  .button {
    width: 100%;
    padding: var(--space-2);
    border-radius: var(--space-2);
    background-color: var(--primary500);
    border: none;
    color: var(--neutral100);
    font-weight: bold;
  }
}

@media (min-width: 769px) {
  .sheet {
    padding-bottom: var(--space-2);
  }

  .header {
    display: block;
    height: max-content;
  }

  .score {
    display: block;
    width: 248px;
    margin: 0 auto var(--space-1);
    font-size: 2rem;
  }

  .points {
    margin: 0 auto;
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

  .footer {
    position: unset;
    text-align: center;

    .button {
      width: unset;
      width: 250px;
    }
  }
}

@media print {
  button {
    display: none;
  }
}
</style>
