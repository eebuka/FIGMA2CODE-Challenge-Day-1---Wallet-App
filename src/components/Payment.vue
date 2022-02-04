<template>
  <div class="container-center-horizontal">
    <div class="payment screen">
      <i-phone-x11-pro-light-base
        :className="iPhoneX11ProLightBaseProps.className"
        :iPhoneX11ProLightBase2Props="iPhoneX11ProLightBaseProps.iPhoneX11ProLightBase2Props"
      />
      <div class="left-title-right-light-1">
        <div class="cancel valign-text-middle sfprotext-regular-normal-azure-radiance-17px">{{ cancel }}</div>
      </div>
      <div class="frame-1-2">
        <div class="payment-1 default--extra-bold-large-title">{{ payment }}</div>
      </div>
      <img class="ellipse-15" :src="ellipse15" />
      <div class="paying">{{ paying }}</div>
      <div class="name-2 default--semi-bold--headline">{{ name }}</div>
      <div class="price-6">{{ price }}</div>
      <div class="frame-5">
        <div class="add-a-note default--regular--body">{{ addANote }}</div>
      </div>
      <group41 />
      <group42 />
      <router-link to="/reciept">
        <div class="frame-3-4">
          <div class="overlap-group-6">
            <router-link to="/reciept"
              ><img
                class="frame-3-5"
                src="https://anima-uploads.s3.amazonaws.com/projects/61fcadd16b2468ecf928bf7d/releases/61fcb1aaf2e7da9f22898104/img/frame-3-2@2x.svg"
              />
            </router-link>
            <div class="pay-now default--semi-bold--headline">{{ payNow }}</div>
          </div>
        </div></router-link
      ><home-indicator-light :className="homeIndicatorLightProps.className" />
    </div>
  </div>
</template>

<script>
import IPhoneX11ProLightBase from "./IPhoneX11ProLightBase";
import Group41 from "./Group41";
import Group42 from "./Group42";
import HomeIndicatorLight from "./HomeIndicatorLight";
export default {
  name: "Payment",
  components: {
    IPhoneX11ProLightBase,
    Group41,
    Group42,
    HomeIndicatorLight,
  },
  props: [
    "cancel",
    "payment",
    "ellipse15",
    "paying",
    "name",
    "price",
    "addANote",
    "payNow",
    "iPhoneX11ProLightBaseProps",
    "homeIndicatorLightProps",
  ],
};
</script>

<style>
.payment {
  align-items: center;
  background-color: var(--systemwhite--light);
  display: flex;
  flex-direction: column;
  height: 812px;
  position: relative;
  width: 375px;
}

.left-title-right-light-1 {
  align-items: center;
  display: flex;
  height: 42px;
  justify-content: flex-end;
  margin-top: 44px;
  min-width: 375px;
  padding: 0 25px;
  z-index: 2;
}

.cancel {
  height: 22px;
  letter-spacing: -0.41px;
  line-height: 22px;
  min-width: 53px;
  white-space: nowrap;
}

.frame-1-2 {
  align-items: flex-start;
  display: flex;
  height: 41px;
  min-width: 375px;
  padding: 0 16px;
  z-index: 1;
}

.payment-1 {
  color: var(--systemblack--light);
  font-weight: 700;
  min-height: 41px;
}

.ellipse-15 {
  height: 72px;
  margin-left: 1px;
  margin-top: 14px;
  object-fit: cover;
  width: 72px;
  z-index: 3;
}

.paying {
  color: var(--systemgray--01--light);
  font-family: var(--font-family-inter);
  font-size: var(--font-size-xxxs);
  font-weight: 600;
  letter-spacing: 0.65px;
  line-height: 18px;
  margin-left: 1px;
  margin-top: 12px;
  min-height: 18px;
  min-width: 52px;
  white-space: nowrap;
  z-index: 4;
}

.name-2 {
  color: #333333;
  font-weight: 400;
  line-height: 22px;
  margin-right: 2px;
  margin-top: 4px;
  min-height: 22px;
  min-width: 153px;
  white-space: nowrap;
  z-index: 5;
}

.price-6 {
  color: var(--systemblack--light);
  font-family: var(--font-family-inter);
  font-size: 72px;
  font-weight: 400;
  letter-spacing: -6.87px;
  margin-right: 5px;
  margin-top: 22px;
  min-height: 86px;
  min-width: 208px;
  text-align: center;
  z-index: 6;
}

.frame-5 {
  align-items: center;
  background-color: #f9f9fb;
  border-radius: 6px;
  display: flex;
  height: 40px;
  margin-left: 1px;
  margin-top: 28px;
  min-width: 326px;
  padding: 0 16px;
  z-index: 7;
}

.add-a-note {
  color: var(--systemgray--01--light);
  font-weight: 400;
  line-height: 20px;
  min-height: 20px;
  min-width: 78px;
  white-space: nowrap;
}

.frame-3-4 {
  align-items: flex-start;
  border-radius: 14px;
  cursor: pointer;
  display: flex;
  margin-left: 1px;
  margin-top: 38px;
  min-width: 342px;
  z-index: 10;
}

.overlap-group-6 {
  height: 58px;
  position: relative;
  width: 342px;
}

.frame-3-5 {
  cursor: pointer;
  height: 58px;
  left: 0;
  position: absolute;
  top: 0;
  width: 342px;
}

.pay-now {
  color: var(--systemwhite--light);
  font-weight: 400;
  left: 137px;
  line-height: 22px;
  position: absolute;
  text-align: center;
  top: 18px;
  white-space: nowrap;
}
</style>
