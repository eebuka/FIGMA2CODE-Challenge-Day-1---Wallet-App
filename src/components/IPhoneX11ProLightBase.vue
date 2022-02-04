<template>
  <div :class="[`i-phone-x-11-pro-light-base`, className || ``]">
    <i-phone-x11-pro-light-base2 :className="iPhoneX11ProLightBase2Props.className" />
  </div>
</template>

<script>
import IPhoneX11ProLightBase2 from "./IPhoneX11ProLightBase2";
export default {
  name: "IPhoneX11ProLightBase",
  components: {
    IPhoneX11ProLightBase2,
  },
  props: ["className", "iPhoneX11ProLightBase2Props"],
};
</script>

<style>
.i-phone-x-11-pro-light-base {
  align-items: flex-start;
  display: flex;
  height: 44px;
  left: 0;
  min-width: 375px;
  position: fixed;
  top: 0;
  z-index: 4;
}

.i-phone-x-11-pro-light-base.i-phone-x-11-pro-light-base-1,
.i-phone-x-11-pro-light-base.i-phone-x-11-pro-light-base-4 {
  z-index: 7;
}

.i-phone-x-11-pro-light-base.i-phone-x-11-pro-light-base-2 {
  z-index: 5;
}

.i-phone-x-11-pro-light-base.i-phone-x-11-pro-light-base-3 {
  z-index: 11;
}

.i-phone-x-11-pro-light-base.i-phone-x-11-pro-light-base-5 {
  z-index: 12;
}
</style>
