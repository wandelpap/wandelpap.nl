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
ul {
  display: flex;
  gap: 1rem;
  list-style-type: none;
  padding: 0;
}

li {
  padding-bottom: 0.25rem;
}

a,
a:active {
  border-bottom: transparent 4px solid;
  text-decoration: none;

  &:hover,
  &.router-link-active {
    border-bottom: var(--md-sys-color-primary) 4px solid;
  }
}
</style>
