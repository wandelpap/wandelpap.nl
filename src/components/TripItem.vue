<script setup lang="ts">
import type { Trip } from "schema-dts";

defineProps<{
  trip: Trip;
}>();
</script>

<template>
  <div class="trip">
    <div class="image">
      <img src="@@/assets/img/geeneindsche-heide.jpg" />
    </div>
    <div class="details">
      <div class="name">
        <h2>{{ trip.name }}</h2>
      </div>
      <div class="description">{{ trip?.description }}</div>
      <div class="cta">
        <NuxtLink to="/contact">
          <div class="button">Ik heb interesse</div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.trip {
  display: flex;
  flex-direction: row;
  margin: 1rem 0;
  padding: 1.5rem 0;
  border: #777 3px solid;
  border-radius: 1rem;
  padding: 1rem;

  .image {
    // background: #09f;
    width: 100%;
    max-width: 100%;
    height: 200px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: 50% 50%;
      border-radius: 0.75rem;
    }
  }

  .details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    padding: 0 1.75rem;

    .cta {
      display: flex;
      justify-content: flex-end;
      margin-top: auto;

      a {
        text-decoration: none;
      }

      .button {
        background-color: orange;
        padding: 0.5em 0.75em;
        border-radius: 0.75em;
        border: orange 2px outset;
        color: saddlebrown;
        cursor: pointer;
        margin-top: 2rem;

        &:hover,
        &:active {
          color: #fff;
        }

        &:active {
          border: orange 2px inset;
        }
      }
    }
  }

  @media screen and (max-width: $landscape-width-page-break) {
    flex-direction: column;

    .details {
      padding: 0;
    }
  }
}
</style>
