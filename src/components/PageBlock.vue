<template>
  <div class="page-block" :style="cssVars" :class="`theme-${theme}`">
    <div class="inner">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    innerPadding: {
      required: false,
      type: String,
      default: "0",
    },
    innerPaddingMobile: {
      required: false,
      type: String,
      default: "2rem",
    },
    justifyContent: {
      required: false,
      type: String,
      default: "center",
    },
    theme: {
      required: false,
      type: String,
      default: "dark",
    },
  },
  data() {
    return {
      inner_padding: this.innerPadding,
      inner_padding_mobile: this.innerPaddingMobile,
      justify_content: this.justifyContent,
    };
  },
  computed: {
    cssVars() {
      return {
        "--inner-padding": this.innerPadding,
        "--inner-padding-mobile": this.innerPaddingMobile,
        "--justify-content": this.justifyContent,
      };
    },
  },
};
</script>

<style scoped>
.page-block {
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  padding: var(--inner-padding);

  .inner {
    display: flex;
    flex-direction: column;
    justify-content: var(--justify-content);
    width: 100%;
    max-width: 960px;
  }

  @media screen and (max-width: 960px) {
    .inner {
      padding: var(--inner-padding-mobile);
    }
  }
}
</style>
