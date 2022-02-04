<template>
  <div class="container-center-horizontal">
    <div class="wallet-2 screen">
      <div class="layer-2" :style="{ 'background-image': 'url(' + layer2 + ')' }"></div>
      <i-phone-x11-pro-light-base
        :className="iPhoneX11ProLightBaseProps.className"
        :iPhoneX11ProLightBase2Props="iPhoneX11ProLightBaseProps.iPhoneX11ProLightBase2Props"
      />
      <div class="bars-navigation-bar">
        <div class="background-container">
          <img
            class="background-card"
            src="https://anima-uploads.s3.amazonaws.com/projects/61fcadd16b2468ecf928bf7d/releases/61fcb1aaf2e7da9f22898104/img/background-card@2x.svg"
          />
          <img
            class="black-background"
            src="https://anima-uploads.s3.amazonaws.com/projects/61fcadd16b2468ecf928bf7d/releases/61fcb1aaf2e7da9f22898104/img/black-background@2x.svg"
          />
        </div>
        <div class="flex-row-4">
          <div class="large-title default--bold--title-2">{{ largeTitle }}</div>
          <div class="overlap-group1-4">
            <div class="text-10 valign-text-middle">{{ text10 }}</div>
          </div>
        </div>
      </div>
      <div class="overlap-group8">
        <div class="overlap-group3-2">
          <div class="rectangle-15"></div>
          <img
            class="rectangle-14"
            src="https://anima-uploads.s3.amazonaws.com/projects/61fcadd16b2468ecf928bf7d/releases/61fcb1aaf2e7da9f22898104/img/rectangle-14@2x.svg"
          />
          <div class="address-8">{{ address1 }}</div>
          <div class="expiry-2">{{ expiry }}</div>
          <div class="name-5 couriernew-bold-silver-chalice-14px">{{ name1 }}</div>
          <div class="text-12 couriernew-bold-silver-chalice-14px">{{ text12 }}</div>
        </div>
        <img
          class="mc_symbol-4"
          src="https://anima-uploads.s3.amazonaws.com/projects/61fcadd16b2468ecf928bf7d/releases/61fcb1aaf2e7da9f22898104/img/mc-symbol-4@2x.svg"
        />
      </div>
      <div class="card-holders-name inter-medium-black-13px">{{ cardHoldersName }}</div>
      <div class="overlap-group5-1">
        <div class="name-6 default--regular--body">{{ name2 }}</div>
      </div>
      <div class="card-number inter-medium-black-13px">{{ cardNumber }}</div>
      <div class="overlap-group4-1">
        <div class="address-9 default--regular--body">{{ address2 }}</div>
        <img
          class="mc_symbol-3"
          src="https://anima-uploads.s3.amazonaws.com/projects/61fcadd16b2468ecf928bf7d/releases/61fcb1aaf2e7da9f22898104/img/mc-symbol-3@2x.svg"
        />
      </div>
      <div class="flex-row-5 inter-medium-black-13px">
        <div class="expiry-date">{{ expiryDate }}</div>
        <div class="cvv">{{ cvv }}</div>
      </div>
      <div class="overlap-group-container">
        <div class="overlap-group7">
          <div class="text-11 default--regular--body">{{ text11 }}</div>
        </div>
        <div class="overlap-group6-1">
          <div class="number default--regular--body">{{ number }}</div>
          <img
            class="image-3"
            src="https://anima-uploads.s3.amazonaws.com/projects/61fcadd16b2468ecf928bf7d/releases/61fcb1aaf2e7da9f22898104/img/---3@2x.svg"
          />
        </div>
      </div>
      <router-link to="/payment">
        <div class="frame-3-6">
          <div class="overlap-group2-2">
            <router-link to="/payment"
              ><img
                class="frame-3-7"
                src="https://anima-uploads.s3.amazonaws.com/projects/61fcadd16b2468ecf928bf7d/releases/61fcb1aaf2e7da9f22898104/img/frame-3-3@2x.svg"
              />
            </router-link>
            <div class="add-new-card default--semi-bold--headline">{{ addNewCard }}</div>
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
  name: "Wallet",
  components: {
    IPhoneX11ProLightBase,
    HomeIndicatorLight,
  },
  props: [
    "layer2",
    "largeTitle",
    "text10",
    "address1",
    "expiry",
    "name1",
    "text12",
    "cardHoldersName",
    "name2",
    "cardNumber",
    "address2",
    "expiryDate",
    "cvv",
    "text11",
    "number",
    "addNewCard",
    "iPhoneX11ProLightBaseProps",
    "homeIndicatorLightProps",
  ],
};
</script>

<style>
.wallet-2 {
  align-items: center;
  background-color: var(--systemwhite--light);
  display: flex;
  flex-direction: column;
  height: 812px;
  overflow: hidden;
  position: relative;
  width: 375px;
}

.layer-2 {
  align-self: flex-start;
  background-size: 100% 100%;
  height: 204px;
  margin-left: -667.11px;
  margin-top: -245px;
  width: 354px;
  z-index: 10;
}

.bars-navigation-bar {
  align-items: flex-end;
  background-color: var(--systemwhite--light);
  display: flex;
  flex-direction: column;
  margin-top: 57px;
  min-height: 97px;
  padding: 0px 0;
  width: 375px;
  z-index: 1;
}

.background-container {
  height: 53px;
  position: relative;
  width: 375px;
}

.background-card {
  height: 10px;
  left: 16px;
  position: absolute;
  top: 29px;
  width: 343px;
}

.black-background {
  height: 53px;
  left: 0;
  position: absolute;
  top: 0;
  width: 375px;
}

.flex-row-4 {
  align-items: center;
  display: flex;
  margin-right: 23px;
  margin-top: 7px;
  min-width: 236px;
}

.large-title {
  color: var(--systemblack--light);
  font-weight: 700;
  line-height: 28px;
  min-height: 28px;
  min-width: 144px;
  white-space: nowrap;
}

.overlap-group1-4 {
  align-items: flex-start;
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/61fcadd16b2468ecf928bf7d/releases/61fcb1aaf2e7da9f22898104/img/oval@2x.svg);
  background-size: 100% 100%;
  display: flex;
  margin-left: 62px;
  min-width: 30px;
}

.text-10 {
  color: #3c3c4399;
  font-family: var(--font-family-sf_pro_text-semibold);
  font-size: var(--font-size-s);
  font-weight: 400;
  height: 30px;
  letter-spacing: -0.32px;
  line-height: 21px;
  text-align: center;
  width: 30px;
}

.overlap-group8 {
  height: 206px;
  margin-left: 8px;
  margin-top: 16px;
  position: relative;
  width: 351px;
  z-index: 9;
}

.overlap-group3-2 {
  height: 206px;
  left: 0;
  position: absolute;
  top: 0;
  width: 343px;
}

.rectangle-15 {
  background-color: #6c90ba33;
  border-radius: 16px;
  filter: blur(80px);
  height: 113px;
  left: 58px;
  position: absolute;
  top: 93px;
  width: 231px;
}

.rectangle-14 {
  height: 194px;
  left: 0;
  position: absolute;
  top: 0;
  width: 343px;
}

.address-8 {
  color: var(--systemgray--02--light);
  font-family: var(--font-family-courier_new-bold);
  font-size: var(--font-size-l);
  font-weight: 700;
  left: 24px;
  letter-spacing: -0.37px;
  line-height: 28px;
  position: absolute;
  top: 77px;
  white-space: nowrap;
}

.expiry-2 {
  color: var(--systemgray--02--light);
  font-family: var(--font-family-courier_new-bold);
  font-size: 12px;
  font-weight: 700;
  left: 272px;
  letter-spacing: 0.6px;
  position: absolute;
  top: 139px;
}

.name-5 {
  left: 24px;
  letter-spacing: 0.7px;
  position: absolute;
  top: 157px;
}

.text-12 {
  left: 272px;
  letter-spacing: 0.7px;
  position: absolute;
  top: 157px;
}

.mc_symbol-4 {
  height: 26px;
  left: 288px;
  position: absolute;
  top: 16px;
  width: 39px;
}

.card-holders-name {
  align-self: flex-start;
  letter-spacing: 0;
  line-height: 18px;
  margin-left: 16px;
  margin-top: 20px;
  min-height: 18px;
  white-space: nowrap;
  z-index: 3;
}

.overlap-group5-1 {
  align-items: center;
  background-color: var(--white-lilac);
  border-radius: 12px;
  display: flex;
  height: 54px;
  margin-top: 8px;
  min-width: 343px;
  padding: 0 16px;
  z-index: 6;
}

.name-6 {
  color: var(--systemgray--01--light);
  font-weight: 400;
  line-height: 20px;
  min-height: 20px;
  min-width: 122px;
  white-space: nowrap;
}

.card-number {
  align-self: flex-start;
  letter-spacing: 0;
  line-height: 18px;
  margin-left: 16px;
  margin-top: 24px;
  min-height: 18px;
  white-space: nowrap;
  z-index: 4;
}

.overlap-group4-1 {
  align-items: flex-start;
  background-color: var(--white-lilac);
  border: 1px solid var(--systemblue--light);
  border-radius: 12px;
  display: flex;
  height: 54px;
  margin-right: 2px;
  margin-top: 7px;
  min-width: 343px;
  padding: 13px 16px;
  z-index: 7;
}

.address-9 {
  align-self: center;
  color: var(--systemblack--light);
  font-weight: 400;
  line-height: 20px;
  margin-top: 2px;
  min-height: 20px;
  min-width: 155px;
  white-space: nowrap;
}

.mc_symbol-3 {
  height: 26px;
  margin-left: 116px;
  width: 39px;
}

.flex-row-5 {
  align-items: flex-start;
  align-self: flex-start;
  display: flex;
  height: 18px;
  margin-left: 16px;
  margin-top: 25px;
  min-width: 224px;
  z-index: 5;
}

.expiry-date {
  letter-spacing: 0;
  line-height: 18px;
  min-height: 18px;
  min-width: 72px;
  white-space: nowrap;
}

.cvv {
  letter-spacing: 0;
  line-height: 18px;
  margin-left: 124px;
  min-height: 18px;
  white-space: nowrap;
}

.overlap-group-container {
  align-items: flex-start;
  display: flex;
  margin-top: 8px;
  min-width: 343px;
  z-index: 8;
}

.overlap-group7 {
  align-items: center;
  background-color: var(--white-lilac);
  border-radius: 12px;
  display: flex;
  height: 54px;
  min-width: 171px;
  padding: 0 16px;
}

.text-11 {
  color: var(--systemgray--01--light);
  font-weight: 400;
  line-height: 20px;
  min-height: 20px;
  min-width: 51px;
  white-space: nowrap;
}

.overlap-group6-1 {
  align-items: center;
  background-color: var(--white-lilac);
  border-radius: 12px;
  display: flex;
  height: 54px;
  margin-left: 25px;
  min-width: 147px;
  padding: 0 16px;
}

.number {
  color: var(--systemgray--01--light);
  font-weight: 400;
  line-height: 20px;
  min-height: 20px;
  min-width: 27px;
  white-space: nowrap;
}

.image-3 {
  height: 18px;
  margin-left: 70px;
  width: 18px;
}

.frame-3-6 {
  align-items: flex-start;
  border-radius: 14px;
  cursor: pointer;
  display: flex;
  margin-left: 1px;
  margin-top: 77px;
  min-width: 340px;
  z-index: 2;
}

.overlap-group2-2 {
  height: 58px;
  position: relative;
  width: 340px;
}

.frame-3-7 {
  cursor: pointer;
  height: 58px;
  left: 0;
  position: absolute;
  top: 0;
  width: 340px;
}

.add-new-card {
  color: var(--systemwhite--light);
  font-weight: 400;
  left: 114px;
  line-height: 22px;
  position: absolute;
  text-align: center;
  top: 18px;
  white-space: nowrap;
}
</style>
