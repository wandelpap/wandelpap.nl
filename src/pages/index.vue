<script lang="ts" setup>
import website from "~/schema/website";

useNuxtApp().$structuredData(website);
</script>

<template>
  <div>
    <PageBlock
      class="intro-text"
      inner-padding="0"
      inner_padding_mobile="0 2rem"
    >
      <span>Samen de wereld ontdekken, <br />stap voor stap.</span>
    </PageBlock>
  </div>
</template>

<style lang="scss" scoped>
.intro-text {
  font-size: 2.75em;
  font-weight: 400;
  height: 20vh;

  span {
    color: $title-color;
    font-family: $title-font-family;
    font-weight: $title-font-weight;
    line-height: 3rem;
  }

  @media (max-aspect-ratio: 3/4) {
    height: 35vh;
  }
}
</style>
