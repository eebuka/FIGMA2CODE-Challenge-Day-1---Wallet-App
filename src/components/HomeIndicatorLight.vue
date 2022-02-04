<template>
  <div :class="[`home-indicator-light`, className || ``]">
    <div class="home-indicator"></div>
  </div>
</template>

<script>
export default {
  name: "HomeIndicatorLight",
  props: ["className"],
};
</script>

<style>
.home-indicator-light {
  align-items: flex-end;
  display: flex;
  height: 34px;
  justify-content: flex-end;
  left: 0;
  min-width: 375px;
  padding: 8px 120px;
  position: fixed;
  top: 778px;
  z-index: 5;
}

.home-indicator {
  background-color: var(--systemgray--03--light);
  border-radius: 100px;
  height: 5px;
  width: 134px;
}

.home-indicator-light.home-indicator-light-1,
.home-indicator-light.home-indicator-light-3 {
  z-index: 8;
}

.home-indicator-light.home-indicator-light-1 .home-indicator,
.home-indicator-light.get-started .home-indicator,
.home-indicator-light.home-indicator-light-3 .home-indicator {
  background-color: var(--systemgray--05--light);
}

.home-indicator-light.get-started {
  z-index: 6;
}

.home-indicator-light.home-indicator-light-2 {
  z-index: 12;
}

.home-indicator-light.home-indicator-light-2 .home-indicator,
.home-indicator-light.home-indicator-light-4 .home-indicator {
  background-color: var(--systemgray--04--light);
}

.home-indicator-light.home-indicator-light-4 {
  z-index: 11;
}
</style>
