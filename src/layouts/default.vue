<template>
  <div class="page">
    <PageBlock class="header" inner-padding="0" inner-padding_mobile="0 3rem">
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
    <PageBlock class="footer" justify-content="start">
      <h1>Contact</h1>
      <p>
        Email:
        <a href="mailto:wandelpap@gmail.com">wandelpap&commat;gmail.com</a>
      </p>
    </PageBlock>
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
  min-height: 7.5rem;
}

.leader {
  background-image: url("@@/assets/img/main-header.png");
  background-repeat: no-repeat;
  background-position: top center;
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

.footer {
  min-height: 300px;
}
</style>
