<template>
  <div :class="[`i-phone-x-11-pro-light-base-6`, className || ``]">
    <img
      class="left-side"
      src="https://anima-uploads.s3.amazonaws.com/projects/61fcadd16b2468ecf928bf7d/releases/61fcb1aaf2e7da9f22898104/img/left-side@2x.svg"
    />
    <div class="right-side">
      <img
        class="mobile-signal"
        src="https://anima-uploads.s3.amazonaws.com/projects/61fcadd16b2468ecf928bf7d/releases/61fcb1aaf2e7da9f22898104/img/mobile-signal@2x.svg"
      />
      <img
        class="wifi"
        src="https://anima-uploads.s3.amazonaws.com/projects/61fcadd16b2468ecf928bf7d/releases/61fcb1aaf2e7da9f22898104/img/wifi@2x.svg"
      />
      <img
        class="battery"
        src="https://anima-uploads.s3.amazonaws.com/projects/61fcadd16b2468ecf928bf7d/releases/61fcb1aaf2e7da9f22898104/img/battery@2x.svg"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "IPhoneX11ProLightBase2",
  props: ["className"],
};
</script>

<style>
.i-phone-x-11-pro-light-base-6 {
  align-items: center;
  display: flex;
  height: 44px;
  padding: 11px 14.7px;
  width: 375px;
}

.left-side {
  align-self: flex-end;
  height: 21px;
  margin-left: 6px;
  width: 54px;
}

.right-side {
  align-items: flex-start;
  display: flex;
  height: 11px;
  margin-left: 219px;
  margin-top: 2px;
  min-width: 67px;
}

.mobile-signal {
  height: 12px;
  margin-top: -0.33px;
  width: 18px;
}

.wifi {
  height: 12px;
  margin-left: 4px;
  margin-top: -0.52px;
  width: 16px;
}

.battery {
  height: 12px;
  margin-left: 4px;
  margin-top: -0.33px;
  width: 25px;
}

.i-phone-x-11-pro-light-base-6.i-phone-x-11-pro-light-base-11 {
  background-color: var(--systemblack--light);
}
</style>
