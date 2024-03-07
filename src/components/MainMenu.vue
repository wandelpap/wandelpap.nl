<script lang="ts" setup></script>

<template>
  <div>
    <nav>
      <ul>
        <li>
          <NuxtLink to="/"> Home </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/wandeltochten"> Wandeltochten </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/over"> Over </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact"> Contact </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
nav > ul {
  display: flex;
  gap: 1.25em;
  list-style-type: none;
  margin: 0.25em 0 0.25em 0;
  padding: 0;
}
</style>
