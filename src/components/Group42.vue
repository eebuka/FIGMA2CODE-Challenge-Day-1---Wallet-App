<template>
  <div :class="[`group-42`, className || ``]">
    <div class="ellipse-16"></div>
    <div class="ellipse-1"></div>
    <div class="ellipse-1"></div>
  </div>
</template>

<script>
export default {
  name: "Group42",
  props: ["className"],
};
</script>

<style>
.group-42 {
  align-items: flex-start;
  display: flex;
  margin-left: 1px;
  margin-top: 12px;
  min-width: 30px;
  z-index: 8;
}

.ellipse-16 {
  background-color: var(--systemblue--light);
  border-radius: 3px;
  height: 6px;
  width: 6px;
}

.ellipse-1 {
  background-color: var(--systemgray--05--light);
  border-radius: 3px;
  height: 6px;
  margin-left: 6px;
  width: 6px;
}

.group-42.group-40 {
  margin-top: 8px;
  z-index: 6;
}
</style>
