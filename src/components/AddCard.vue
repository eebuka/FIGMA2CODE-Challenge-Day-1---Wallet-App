<template>
  <div class="container-center-horizontal">
    <div class="add-card screen">
      <i-phone-x11-pro-light-base
        :className="iPhoneX11ProLightBaseProps.className"
        :iPhoneX11ProLightBase2Props="iPhoneX11ProLightBaseProps.iPhoneX11ProLightBase2Props"
      />
      <div class="left-title-right-light-2">
        <img
          class="icon-light-chevronleft"
          src="https://anima-uploads.s3.amazonaws.com/projects/61fcadd16b2468ecf928bf7d/releases/61fcb1aaf2e7da9f22898104/img/icon---light---chevron-left@2x.svg"
        />
        <div class="place-2 valign-text-middle sfprotext-regular-normal-azure-radiance-17px">{{ place }}</div>
      </div>
      <div class="frame-1-3">
        <div class="wallet-1 default--extra-bold-large-title">{{ wallet }}</div>
        <controls-buttons-light-add :text5="controlsButtonsLightAddProps.text5" />
      </div>
      <div class="overlap-group3-1">
        <group41 :className="group41Props.className" />
        <img class="x1153467-1" :src="x11534671" />
      </div>
      <group42 :className="group42Props.className" />
      <div class="group-30">
        <div class="overlap-group-7">
          <div class="popular">{{ popular }}</div>
          <p class="get-upto-15-cashbac">
            <span class="inter-semi-bold-hairy-heath-16px">{{ spanText1 }}</span
            ><span class="span1-2">{{ spanText2 }}</span
            ><span class="inter-semi-bold-hairy-heath-16px">{{ spanText3 }}</span>
          </p>
        </div>
      </div>
      <div class="frame-2-1">
        <div class="overlap-group2-1">
          <div class="group-13-1">
            <div class="transactions default--bold--title-2">{{ transactions }}</div>
            <group9 />
            <group10 />
          </div>
          <img class="nike_png18-1" :src="nike_Png18" />
        </div>
        <div class="overlap-group1-3">
          <div class="group-11-1">
            <div class="rectangle-9-3"></div>
            <div class="flex-col-9">
              <div class="uber-1 default--semi-bold--headline">{{ uber }}</div>
              <div class="address-7 default--regular--body">{{ address }}</div>
            </div>
            <div class="text-9 default--semi-bold--headline">{{ text9 }}</div>
          </div>
          <img class="uber_-logo_-black_rgb-1" :src="uber_Logo_Black_Rgb" />
        </div>
      </div>
      <home-indicator-light :className="homeIndicatorLightProps.className" />
    </div>
  </div>
</template>

<script>
import IPhoneX11ProLightBase from "./IPhoneX11ProLightBase";
import ControlsButtonsLightAdd from "./ControlsButtonsLightAdd";
import Group41 from "./Group41";
import Group42 from "./Group42";
import Group9 from "./Group9";
import Group10 from "./Group10";
import HomeIndicatorLight from "./HomeIndicatorLight";
export default {
  name: "AddCard",
  components: {
    IPhoneX11ProLightBase,
    ControlsButtonsLightAdd,
    Group41,
    Group42,
    Group9,
    Group10,
    HomeIndicatorLight,
  },
  props: [
    "place",
    "wallet",
    "x11534671",
    "popular",
    "spanText1",
    "spanText2",
    "spanText3",
    "transactions",
    "nike_Png18",
    "uber",
    "address",
    "text9",
    "uber_Logo_Black_Rgb",
    "iPhoneX11ProLightBaseProps",
    "controlsButtonsLightAddProps",
    "group41Props",
    "group42Props",
    "homeIndicatorLightProps",
  ],
};
</script>

<style>
.add-card {
  align-items: center;
  background-color: var(--systemwhite--light);
  display: flex;
  flex-direction: column;
  height: 812px;
  overflow: hidden;
  position: relative;
  width: 375px;
}

.left-title-right-light-2 {
  align-items: flex-start;
  display: flex;
  height: 42px;
  margin-top: 44px;
  min-width: 375px;
  padding: 9.9px 9px;
  z-index: 2;
}

.icon-light-chevronleft {
  height: 21px;
  width: 12px;
}

.place-2 {
  align-self: center;
  height: 22px;
  letter-spacing: -0.41px;
  line-height: 22px;
  margin-left: 5px;
  min-width: 39px;
  white-space: nowrap;
}

.frame-1-3 {
  align-items: flex-start;
  display: flex;
  height: 41px;
  min-width: 375px;
  padding: 0 16px;
  position: relative;
  z-index: 1;
}

.wallet-1 {
  color: var(--systemblack--light);
  font-weight: 700;
  min-height: 41px;
  min-width: 104px;
}

.overlap-group3-1 {
  height: 194px;
  margin-top: 16px;
  position: relative;
  width: 343px;
  z-index: 3;
}

.x1153467-1 {
  height: 15px;
  left: 272px;
  object-fit: cover;
  position: absolute;
  top: 25px;
  width: 47px;
}

.group-30 {
  align-items: flex-start;
  display: flex;
  height: 237px;
  margin-left: 4px;
  margin-top: 16px;
  min-width: 347px;
  z-index: 4;
}

.overlap-group-7 {
  align-items: flex-start;
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/61fcadd16b2468ecf928bf7d/releases/61fcb1aaf2e7da9f22898104/img/mask-group@2x.svg);
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  min-height: 237px;
  padding: 18px 24px;
  width: 343px;
}

.popular {
  color: #d57049;
  font-family: var(--font-family-inter);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.55px;
  line-height: 18px;
  min-height: 18px;
  mix-blend-mode: multiply;
  white-space: nowrap;
}

.get-upto-15-cashbac {
  color: transparent;
  font-family: var(--font-family-inter);
  font-size: var(--font-size-s);
  font-weight: 600;
  letter-spacing: 0;
  line-height: 22px;
  margin-top: 12px;
  min-height: 66px;
  mix-blend-mode: multiply;
  width: 188px;
}

.span1-2 {
  color: #6b3018;
}

.frame-2-1 {
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  min-height: 241px;
  padding: 0 11px;
  width: 375px;
  z-index: 5;
}

.overlap-group2-1 {
  align-self: center;
  height: 158px;
  margin-left: 2px;
  position: relative;
  width: 345px;
}

.group-13-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  left: 0;
  min-height: 158px;
  position: absolute;
  top: 0;
  width: 345px;
}

.transactions {
  color: var(--systemblack--light);
  font-weight: 700;
  line-height: 28px;
  min-height: 28px;
  white-space: nowrap;
}

.nike_png18-1 {
  height: 40px;
  left: 6px;
  object-fit: cover;
  position: absolute;
  top: 50px;
  width: 40px;
}

.overlap-group1-3 {
  height: 51px;
  margin-top: 12px;
  position: relative;
  width: 352px;
}

.group-11-1 {
  align-items: flex-start;
  display: flex;
  height: 51px;
  left: 4px;
  min-width: 348px;
  position: absolute;
  top: 0;
}

.rectangle-9-3 {
  background-color: var(--systemgray--06--light);
  border-radius: 25.5px;
  height: 51px;
  width: 51px;
}

.flex-col-9 {
  align-items: flex-start;
  align-self: center;
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  margin-top: 1px;
  min-height: 44px;
  width: 83px;
}

.uber-1 {
  color: var(--systemblack--light);
  font-weight: 400;
  line-height: 22px;
  min-height: 22px;
  white-space: nowrap;
}

.address-7 {
  color: var(--systemgray--01--light);
  font-weight: 400;
  line-height: 20px;
  margin-top: 2px;
  min-height: 20px;
  white-space: nowrap;
}

.text-9 {
  color: var(--systemblack--light);
  font-weight: 400;
  line-height: 22px;
  margin-left: 124px;
  margin-top: 4px;
  min-height: 22px;
  min-width: 68px;
  text-align: right;
  white-space: nowrap;
}

.uber_-logo_-black_rgb-1 {
  height: 37px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 7px;
  width: 60px;
}
</style>
