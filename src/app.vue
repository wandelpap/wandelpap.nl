<script setup lang="ts">
import { useRoute } from "vue-router";

import website from "@/schema/website";

const route = useRoute();

useHead({
  titleTemplate: () => {
    return `${website.name} - ${route.meta.title ?? "Home"}`;
  },
});
</script>

<template>
  <div>
    <NuxtLayout>
      <RouterView />
    </NuxtLayout>
  </div>
</template>
