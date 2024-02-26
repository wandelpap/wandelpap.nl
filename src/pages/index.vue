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

    <iframe
      src="https://www.komoot.com/nl-nl/collection/2579018/embed"
      width="100%"
      frameborder="0"
      scrolling="no"
    ></iframe>
  </div>
</template>

<style lang="scss" scoped>
.intro-text {
  font-size: 2.5em;
  font-weight: 400;
  min-height: 20vh;

  span {
    color: $title-color;
    font-family: $title-font-family;
    font-weight: $title-font-weight;
    line-height: 3rem;
  }
}

iframe {
  height: 80vh;
  min-height: 500px;
}
</style>
