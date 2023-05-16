<script lang="ts">
import html2pdf from "html2pdf.js";
import SheetLine from "./SheetLine.vue";
import ToExport from "./ToExport.vue";
import { Line } from "./types";
import { categories } from "../utils";

export default {
  components: { SheetLine, ToExport },
  data() {
    return {
      categories: categories,
      state: {
        name: "",
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
    filterEmptyLines(): Line[] {
      return this.state.lines.filter((item) => {
        if (item.note !== "") return true;
        if (item.hints !== "") return true;
        if (item.categories.join("") !== "") return true;

        return false;
      });
    },
    formatDocumentName(value: string): string {
      return value.replace(/[^a-z0-9]/gi, "-").toLowerCase();
    },
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
    },
    displayScore(): number {
      const totalPoints =
        this.state.totalG +
        this.state.totalV +
        this.state.totalP +
        this.state.totalF;

      switch (totalPoints) {
        case 0:
          return 2.5;
        case 1:
        case 2:
          return 2.0;
        case 3:
        case 4:
          return 1.5;
        case 5:
        case 6:
          return 1.0;
        case 7:
        case 8:
          return 0.5;
        default:
          return 0.25;
      }
    },
    exportSheet() {
      this.exportToPDF();
      this.exportToWord();
    },
    exportToPDF() {
      html2pdf(document.querySelector(".sheet"), {
        margin: 1,
        filename: `${
          this.formatDocumentName(this.state.name) || "correction"
        }.pdf`,
      });
    },
    exportToWord() {
      var html = `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
        <html xmlns:office="urn:schemas-microsoft-com:office:office" xmlns:word="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40">
          <head>
            <style>
              @page Section1 {size:595.45pt 841.7pt; margin:0.25in 0.25in 0.25in 0.25in;mso-header-margin:.5in;mso-footer-margin:.5in;mso-paper-source:0;}
                div.Section1 {page:Section1;}
              @page Section2 {size:841.7pt 595.45pt;mso-page-orientation:landscape;margin:0.25in 0.25in 0.25in 0.25in;mso-header-margin:.5in;mso-footer-margin:.5in;mso-paper-source:0;}
                div.Section2 {page:Section2;}
            </style>
            <meta charset='utf-8'>
            <title>Correction Sheet</title>
          </head>
          <body>
            <div class=Section2>
              ${document.querySelector(".print")?.innerHTML}
            </div>
          </body>
        </html>`;

      // Specify link url
      var url =
        "data:application/vnd.ms-word;charset=utf-8," +
        encodeURIComponent(html);

      // Create download link element
      var downloadLink = document.createElement("a");

      document.body.appendChild(downloadLink);

      // Create a link to the file
      downloadLink.href = url;

      // Setting the file name
      downloadLink.download = `${
        this.formatDocumentName(this.state.name) || "correction"
      }.doc`;

      //triggering the function
      downloadLink.click();

      document.body.removeChild(downloadLink);
    },
  },
};
</script>

<template>
  <div class="sheet">
    <div class="name">
      <div class="label">NAME</div>
      <input class="input" type="text" v-model="state.name" />
    </div>
    <div class="header">
      <div class="score">Score: {{ displayScore() }}</div>
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
  <div class="print">
    <ToExport :name="state.name" :lines="filterEmptyLines()" />
  </div>
  <div class="footer">
    <button class="button pdf" @click="exportToPDF">
      <font-awesome-icon icon="fa-solid fa-file-pdf" />
    </button>
    <button class="button word" @click="exportToWord">
      <font-awesome-icon icon="fa-solid fa-file-word" />
    </button>
    <button class="button" @click="exportSheet">Export both files</button>
  </div>
</template>

<style scoped lang="scss">
.sheet {
  padding: calc(var(--space-7) + var(--space-2)) var(--space-2);
  max-width: 1240px;
  margin: 0 auto;
}

.name {
  display: flex;
  gap: var(--space-2);
  align-items: center;
  margin-bottom: var(--space-2);

  .label {
    padding: 0;
  }

  .input {
    width: 100%;
  }
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
  display: grid;
  grid-gap: var(--space-1);
  grid-template-columns: 1fr 1fr 3fr;

  .button {
    width: 100%;
    height: 52px;
    border-radius: var(--space-2);
    background-color: var(--primary500);
    border: none;
    color: var(--neutral100);
    font-weight: bold;
    display: flex;
    gap: var(--space-2);
    align-items: center;
    justify-content: center;

    svg {
      height: var(--space-3);
    }
  }
}

.print {
  display: none;
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
    display: flex;
    justify-content: center;

    .button {
      width: unset;
      width: 250px;

      &.pdf:after {
        content: "Export PDF";
      }

      &.word::after {
        content: "Export Word";
      }
    }
  }
}
</style>
