<script type="ts" setup>
import offerCatalog from '~/schema/offer-catalog';

useNuxtApp().$structuredData(offerCatalog);
</script>

<template>
  <div>
    <PageBlock>
      <h1>Wandeltochten</h1>
      <p>Bekijk hier het aanbod aan wandeltochten.</p>
    </PageBlock>
    <PageBlock
      v-for="(offer, index) in offerCatalog.itemListElement"
      :key="index"
      class="theme-light"
    >
      <TripItem :trip="offer.itemOffered" />
    </PageBlock>
  </div>
</template>
