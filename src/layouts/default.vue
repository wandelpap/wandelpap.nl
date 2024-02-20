<template>
  <div class="page">
    <PageBlock inner-padding="0" inner-padding_mobile="0 3rem">
      <div>
        <span class="title">Wandelpap</span>
      </div>
      <MainMenu />
    </PageBlock>
    <div class="leader"></div>
    <div class="main">
      <div class="inner">
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title {
  color: $title-color;
  font-family: $title-font-family;
  font-size: 3em;
  font-weight: $title-font-weight;
}

.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header {
  height: 15vh;
  align-items: center;
}

.leader {
  background-image: url("https://media.istockphoto.com/id/1273473941/nl/foto/kamperen-met-zoon.jpg?s=2048x2048&w=is&k=20&c=UcxH9HFMHARFOp8Inf-EC9okvC-yLCUoVDOHFWJ3pP4=");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  height: 65vh;

  .inner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 960px;
  }

  @media (max-aspect-ratio: 3/4) {
    height: 50vh;
  }
}

.main,
.leader {
  display: flex;
  justify-content: center;

  .inner {
    width: 100%;
  }
}
</style>
