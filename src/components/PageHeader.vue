<script lang="ts" setup>
import wandelpap from "~/schema/wandelpap";
</script>

<template>
  <div class="page-header">
    <div class="inner">
      <div class="title">
        <span>{{ wandelpap.name }}</span>
      </div>
      <MainMenu class="main-menu" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-header {
  display: flex;
  flex-direction: row;
  justify-content: center;

  .inner {
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    max-width: $landscape-width-page-break;

    .title {
      margin-top: 1.5rem;
      font-family: $title-font-family;
      font-weight: $title-font-family;
      font-size: 3rem;
    }
  }

  .title {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
