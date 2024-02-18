<template>
  <div class="page-block" :style="cssVars">
    <div class="inner">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    backgroundColor: {
      required: false,
      type: String,
      default: "transparent",
    },
    innerPadding: {
      required: false,
      type: String,
      default: "5rem 0",
    },
    innerPaddingMobile: {
      required: false,
      type: String,
      default: "2rem",
    },
  },
  data() {
    return {
      color: this.backgroundColor,
      inner_padding: this.inner_padding,
      inner_padding_mobile: this.inner_padding_mobile,
    };
  },
  computed: {
    cssVars() {
      return {
        "--color": this.backgroundColor,
        "--inner-padding": this.inner_padding,
        "--inner-padding-mobile": this.inner_padding_mobile,
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
  background-color: var(--color);
  padding: var(--inner-padding);

  .inner {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
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
