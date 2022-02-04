<template>
  <div :class="[`group-41`, className || ``]">
    <div class="flex-col-5">
      <div class="group-39">
        <div class="balance couriernew-bold-white-12px">BALANCE</div>
        <div class="price-7 couriernew-bold-white-14px">
          <span class="span0 couriernew-bold-white-14px">$50,000.0</span
          ><span class="span1 couriernew-bold-white-14px">0</span>
        </div>
      </div>
      <div class="address-5 couriernew-bold-white-22px">4225 9765 0008 6141</div>
      <div class="name-3 couriernew-bold-white-14px">DWAYNE JOHNSON</div>
    </div>
    <div class="flex-col-6">
      <div class="expiry couriernew-bold-white-12px">EXPIRY</div>
      <div class="text-4 couriernew-bold-white-14px">09/24</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Group41",
  props: ["className"],
};
</script>

<style>
.group-41 {
  align-items: flex-start;
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/61fcadd16b2468ecf928bf7d/releases/61fcb1aaf2e7da9f22898104/img/rectangle@2x.png);
  background-size: 100% 100%;
  display: flex;
  height: 194px;
  margin-top: 25px;
  min-width: 343px;
  padding: 16px 24px;
  z-index: 9;
}

.flex-col-5 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 157px;
  width: 245px;
}

.group-39 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 34px;
  width: 95px;
}

.balance,
.expiry {
  letter-spacing: 0.6px;
  min-height: 14px;
}

.price-7 {
  margin-top: 4px;
  min-height: 16px;
}

.span0 {
  letter-spacing: 0.1px;
}

.span1 {
  letter-spacing: 0;
}

.address-5 {
  letter-spacing: -0.37px;
  line-height: 28px;
  margin-top: 33px;
  min-height: 28px;
  white-space: nowrap;
}

.name-3 {
  letter-spacing: 0.7px;
  margin-top: 46px;
  min-height: 16px;
}

.flex-col-6 {
  align-items: flex-start;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
  margin-left: 3px;
  min-height: 34px;
  width: 47px;
}

.text-4 {
  letter-spacing: 0.7px;
  margin-top: 4px;
  min-height: 16px;
}

.group-41.group-41-1 {
  left: 0;
  margin-top: unset;
  position: absolute;
  top: 0;
  z-index: unset;
}
</style>
