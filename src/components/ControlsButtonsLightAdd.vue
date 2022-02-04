<template>
  <router-link to="/wallet">
    <div class="controls-buttons-light-add">
      <div class="text-5 valign-text-middle sfprotext-regular-normal-azure-radiance-17px">{{ text5 }}</div>
    </div></router-link
  >
</template>

<script>
export default {
  name: "ControlsButtonsLightAdd",
  props: ["text5"],
};
</script>

<style>
.controls-buttons-light-add {
  align-items: flex-start;
  background-color: var(--systemwhite--light);
  cursor: pointer;
  display: flex;
  margin-left: 195px;
  margin-top: -2px;
  min-width: 44px;
}

.text-5 {
  height: 44px;
  letter-spacing: -0.41px;
  line-height: 22px;
  text-align: center;
  width: 44px;
}
</style>
