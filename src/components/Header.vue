<script lang="ts">
export default {
  methods: {
    goToPage(value: string): void {
      window.open(value);
    },
  },
};
</script>

<template>
  <div class="header">
    <span>Teacher Sheet</span>
    <button
      class="button"
      @click="goToPage('https://github.com/thiagoarantes/teacherSheet')"
    >
      <font-awesome-icon icon="fa-brands fa-github" />
    </button>
  </div>
</template>

<style scoped lang="scss">
.header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: var(--space-7);
  background-color: var(--neutral100);
  padding: var(--space-2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  color: var(--primary500);
  -webkit-box-shadow: 0px 11px 24px 0px rgba(0, 0, 0, 0.17);
  -moz-box-shadow: 0px 11px 24px 0px rgba(0, 0, 0, 0.17);
  box-shadow: 0px 11px 24px 0px rgba(0, 0, 0, 0.17);
}

.button {
  border: none;
  background-color: transparent;
  font-size: 1.6rem;
  cursor: pointer;
  color: var(--primary500);
  position: relative;
  display: flex;
  align-items: center;

  &:hover::before {
    content: "Github";
    font-size: 0.9rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    padding-right: var(--space-1-5);
    font-weight: bolder;
  }
}
</style>
