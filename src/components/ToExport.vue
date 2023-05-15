<script lang="ts">
import { Line } from "./types";
import { categories } from "../utils";

export default {
  props: {
    name: String,
    lines: Array<Line>,
  },
  methods: {
    formatCategories(values: string[]): string {
      return values
        .map((item) => {
          switch (item) {
            case categories.grammar:
              return "Grammar";
            case categories.pronunciation:
              return "Pronunciation";
            case categories.vocabulary:
              return "Vocabulary";
            case categories.fluency:
              return "Fluency";
            default:
              return "";
          }
        })
        .filter((item) => item !== "")
        .join(", ");
    },
  },
};
</script>

<template>
  <div
    style="
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      font-size: 10px;
      margin-bottom: 16px;
    "
  >
    Name: <b>{{ name }}</b>
  </div>
  <table
    style="
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      font-size: 10px;
      border: 1px solid black;
      width: 100%;
    "
    cellspacing="0"
    cellpadding="3"
  >
    <tr style="background-color: #ececec">
      <td style="padding: 4px; width: 25%"><b>Note</b></td>
      <td style="padding: 4px; width: 25%"><b>Categories</b></td>
      <td style="padding: 4px; width: 25%"><b>Hints</b></td>
      <td style="padding: 4px; width: 25%"><b>Correction</b></td>
    </tr>
    <tr v-for="(line, index) of lines">
      <td
        style="padding: 4px; width: 25%"
        :style="{
          backgroundColor: index % 2 === 0 ? '#f2fbff' : 'transparent',
        }"
      >
        {{ line.note }}
      </td>
      <td
        style="padding: 4px; width: 25%"
        :style="{
          backgroundColor: index % 2 === 0 ? '#f2fbff' : 'transparent',
        }"
      >
        {{ formatCategories(line.categories) }}
      </td>
      <td
        style="padding: 4px; width: 25%"
        :style="{
          backgroundColor: index % 2 === 0 ? '#f2fbff' : 'transparent',
        }"
      >
        {{ line.hints }}
      </td>
      <td style="padding: 4px; width: 25%; border: 1px solid gray"></td>
    </tr>
  </table>
</template>
