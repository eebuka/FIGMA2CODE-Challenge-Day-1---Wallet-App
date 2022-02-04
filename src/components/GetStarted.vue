<template>
  <div class="container-center-horizontal">
    <div class="get-started-1 screen">
      <div class="overlap-group1-2">
        <img class="kingdom-payment-1" :src="kingdomPayment1" />
        <div class="group-17">
          <img
            class="rectangle-12"
            src="https://anima-uploads.s3.amazonaws.com/projects/61fcadd16b2468ecf928bf7d/releases/61fcb1aaf2e7da9f22898104/img/rectangle-12@2x.svg"
          />
          <img
            class="vector-3"
            src="https://anima-uploads.s3.amazonaws.com/projects/61fcadd16b2468ecf928bf7d/releases/61fcb1aaf2e7da9f22898104/img/vector-3@2x.svg"
          />
        </div>
      </div>
      <i-phone-x11-pro-light-base
        :className="iPhoneX11ProLightBaseProps.className"
        :iPhoneX11ProLightBase2Props="iPhoneX11ProLightBaseProps.iPhoneX11ProLightBase2Props"
      />
      <div class="expenio">{{ expenio }}</div>
      <div class="going-cashless-has-n default--semi-bold--headline">{{ goingCashlessHasN }}</div>
      <router-link to="/home">
        <div class="frame-3-2">
          <div class="overlap-group-5">
            <router-link to="/home"
              ><img
                class="frame-3-3"
                src="https://anima-uploads.s3.amazonaws.com/projects/61fcadd16b2468ecf928bf7d/releases/61fcb1aaf2e7da9f22898104/img/frame-3-1@2x.svg"
              />
            </router-link>
            <div class="get-started-2 default--semi-bold--headline">{{ getStarted }}</div>
          </div>
        </div></router-link
      ><home-indicator-light :className="homeIndicatorLightProps.className" />
    </div>
  </div>
</template>

<script>
import IPhoneX11ProLightBase from "./IPhoneX11ProLightBase";
import HomeIndicatorLight from "./HomeIndicatorLight";
export default {
  name: "GetStarted",
  components: {
    IPhoneX11ProLightBase,
    HomeIndicatorLight,
  },
  props: [
    "kingdomPayment1",
    "expenio",
    "goingCashlessHasN",
    "getStarted",
    "iPhoneX11ProLightBaseProps",
    "homeIndicatorLightProps",
  ],
};
</script>

<style>
.get-started-1 {
  align-items: center;
  background-color: var(--systemwhite--light);
  display: flex;
  flex-direction: column;
  height: 812px;
  overflow: hidden;
  position: relative;
  width: 375px;
}

.overlap-group1-2 {
  height: 503px;
  position: relative;
  width: 749px;
  z-index: 4;
}

.kingdom-payment-1 {
  height: 500px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 3px;
  width: 749px;
}

.group-17 {
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  left: 187px;
  min-height: 501px;
  position: absolute;
  top: 0;
  width: 375px;
}

.rectangle-12 {
  height: 461px;
  width: 375px;
}

.vector-3 {
  height: 40px;
  margin-right: 0;
  width: 40px;
}

.expenio {
  color: var(--systemblack--light);
  font-family: var(--font-family-helvetica_neue_lt_com-53extended);
  font-size: 32px;
  font-weight: 400;
  letter-spacing: 5px;
  min-height: 38px;
  min-width: 185px;
  text-align: center;
  z-index: 1;
}

.going-cashless-has-n {
  color: var(--systemgray--02--light);
  font-weight: 400;
  line-height: 24px;
  margin-top: 24px;
  min-height: 72px;
  text-align: center;
  width: 327px;
  z-index: 2;
}

.frame-3-2 {
  align-items: flex-start;
  border-radius: 14px;
  cursor: pointer;
  display: flex;
  margin-right: 1px;
  margin-top: 83px;
  min-width: 340px;
  z-index: 3;
}

.overlap-group-5 {
  height: 58px;
  position: relative;
  width: 340px;
}

.frame-3-3 {
  cursor: pointer;
  height: 58px;
  left: 0;
  position: absolute;
  top: 0;
  width: 340px;
}

.get-started-2 {
  color: var(--systemwhite--light);
  font-weight: 400;
  left: 123px;
  line-height: 22px;
  position: absolute;
  text-align: center;
  top: 18px;
  white-space: nowrap;
}
</style>
