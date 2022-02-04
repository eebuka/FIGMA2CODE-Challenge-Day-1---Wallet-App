<template>
  <div class="container-center-horizontal">
    <div class="home screen">
      <i-phone-x11-pro-light-base
        :className="iPhoneX11ProLightBaseProps.className"
        :iPhoneX11ProLightBase2Props="iPhoneX11ProLightBaseProps.iPhoneX11ProLightBase2Props"
      />
      <div class="left-title-right-light">
        <div class="hello-maria valign-text-middle default--semi-bold--headline">{{ helloMaria }}</div>
      </div>
      <div class="frame-1-1">
        <div class="place-1 default--extra-bold-large-title">{{ place1 }}</div>
        <img class="rectangle-1" :src="rectangle1" />
      </div>
      <router-link to="/add-card">
        <div class="group-9">
          <div class="overlap-group-1">
            <div class="rectangle-3"></div>
            <div class="rectangle-2"></div>
            <div class="price-4 default--extra-bold-large-title">{{ price1 }}</div>
            <div class="my-balance default--regular--body">{{ myBalance }}</div>
            <img
              class="image-1"
              src="https://anima-uploads.s3.amazonaws.com/projects/61fcadd16b2468ecf928bf7d/releases/61fcb1aaf2e7da9f22898104/img/---1@2x.svg"
            />
          </div></div
      ></router-link>
      <div class="overlap-group6">
        <div class="rectangle-3-1"></div>
        <div class="overlap-group4">
          <div class="expenses default--semi-bold--title-3">{{ expenses }}</div>
        </div>
        <div class="group-14 inter-semi-bold-silver-10px">
          <div class="name-1">{{ name }}</div>
          <div class="group-14-item">{{ feb }}</div>
          <div class="group-14-item-1">{{ place2 }}</div>
          <div class="jun">{{ jun }}</div>
          <div class="group-14-item">{{ jul }}</div>
          <div class="group-14-item-1">{{ aug }}</div>
        </div>
        <img
          class="vector-1"
          src="https://anima-uploads.s3.amazonaws.com/projects/61fcadd16b2468ecf928bf7d/releases/61fcb1aaf2e7da9f22898104/img/vector-1@2x.svg"
        />
        <img
          class="vector-2"
          src="https://anima-uploads.s3.amazonaws.com/projects/61fcadd16b2468ecf928bf7d/releases/61fcb1aaf2e7da9f22898104/img/vector-2@2x.svg"
        />
        <div class="group-16">
          <div class="overlap-group5">
            <div class="overlap-group-2">
              <div class="rectangle-10"></div>
              <img
                class="polygon-1"
                src="https://anima-uploads.s3.amazonaws.com/projects/61fcadd16b2468ecf928bf7d/releases/61fcb1aaf2e7da9f22898104/img/polygon-1@2x.svg"
              />
            </div>
            <div class="price-5">{{ price2 }}</div>
          </div>
          <div class="ellipse-6"></div>
        </div>
      </div>
      <img
        class="rectangle-11"
        src="https://anima-uploads.s3.amazonaws.com/projects/61fcadd16b2468ecf928bf7d/releases/61fcb1aaf2e7da9f22898104/img/rectangle-11@2x.svg"
      />
      <div class="frame-2">
        <div class="overlap-group2">
          <div class="group-13">
            <div class="flex-row-3">
              <div class="wallet default--bold--title-2">{{ wallet }}</div>
              <div class="see-all default--regular--body">{{ seeAll }}</div>
            </div>
            <group9 />
            <group10 />
          </div>
          <img class="nike_png18" :src="nike_Png18" />
        </div>
        <div class="overlap-group3">
          <img
            class="ellipse-5"
            src="https://anima-uploads.s3.amazonaws.com/projects/61fcadd16b2468ecf928bf7d/releases/61fcb1aaf2e7da9f22898104/img/ellipse-5@2x.svg"
          />
          <div class="overlap-group1-1">
            <div class="group-11">
              <div class="rectangle-9"></div>
              <div class="flex-col">
                <div class="uber default--semi-bold--headline">{{ uber }}</div>
                <div class="address default--regular--body">{{ address }}</div>
              </div>
              <div class="text-3 default--semi-bold--headline">{{ text3 }}</div>
            </div>
            <img class="uber_-logo_-black_rgb" :src="uber_Logo_Black_Rgb" />
          </div>
          <img
            class="ellipse-4"
            src="https://anima-uploads.s3.amazonaws.com/projects/61fcadd16b2468ecf928bf7d/releases/61fcb1aaf2e7da9f22898104/img/ellipse-4@2x.svg"
          />
          <img
            class="image-2"
            src="https://anima-uploads.s3.amazonaws.com/projects/61fcadd16b2468ecf928bf7d/releases/61fcb1aaf2e7da9f22898104/img/---2@2x.svg"
          />
        </div>
      </div>
      <home-indicator-light :className="homeIndicatorLightProps.className" />
    </div>
  </div>
</template>

<script>
import IPhoneX11ProLightBase from "./IPhoneX11ProLightBase";
import Group9 from "./Group9";
import Group10 from "./Group10";
import HomeIndicatorLight from "./HomeIndicatorLight";
export default {
  name: "Home",
  components: {
    IPhoneX11ProLightBase,
    Group9,
    Group10,
    HomeIndicatorLight,
  },
  props: [
    "helloMaria",
    "place1",
    "rectangle1",
    "price1",
    "myBalance",
    "expenses",
    "name",
    "feb",
    "place2",
    "jun",
    "jul",
    "aug",
    "price2",
    "wallet",
    "seeAll",
    "nike_Png18",
    "uber",
    "address",
    "text3",
    "uber_Logo_Black_Rgb",
    "iPhoneX11ProLightBaseProps",
    "homeIndicatorLightProps",
  ],
};
</script>

<style>
.home {
  align-items: center;
  background-color: var(--systemwhite--light);
  display: flex;
  flex-direction: column;
  height: 812px;
  position: relative;
  width: 375px;
}

.left-title-right-light {
  align-items: center;
  display: flex;
  height: 42px;
  margin-top: 44px;
  min-width: 375px;
  padding: 0 16px;
  z-index: 6;
}

.hello-maria {
  color: var(--systemgray--01--light);
  font-weight: 400;
  height: 22px;
  line-height: 22px;
  min-width: 96px;
  white-space: nowrap;
}

.frame-1-1 {
  align-items: flex-start;
  display: flex;
  min-width: 375px;
  padding: 0 16px;
  z-index: 4;
}

.place-1 {
  color: var(--systemblack--light);
  font-weight: 700;
  min-height: 41px;
  min-width: 97px;
}

.rectangle-1 {
  height: 41px;
  margin-left: 205px;
  object-fit: cover;
  width: 41px;
}

.group-9 {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  margin-left: 4px;
  margin-top: 24px;
  min-width: 347px;
  z-index: 3;
}

.overlap-group-1 {
  border-radius: 24px;
  height: 110px;
  position: relative;
  width: 343px;
}

.rectangle-3 {
  background-color: #007aff4c;
  border-radius: 16px;
  filter: blur(80px);
  height: 61px;
  left: 48px;
  position: absolute;
  top: 25px;
  width: 247px;
}

.rectangle-2 {
  background-color: #007aff99;
  border-radius: 24px;
  height: 110px;
  left: 0;
  position: absolute;
  top: 0;
  width: 343px;
}

.price-4 {
  color: var(--systemwhite--light);
  font-weight: 700;
  left: 16px;
  position: absolute;
  top: 45px;
}

.my-balance {
  color: var(--systemwhite--light);
  font-weight: 400;
  left: 16px;
  line-height: 20px;
  position: absolute;
  top: 24px;
  white-space: nowrap;
}

.image-1 {
  height: 18px;
  left: 309px;
  position: absolute;
  top: 46px;
  width: 11px;
}

.overlap-group6 {
  height: 234px;
  margin-left: 1px;
  margin-top: 16px;
  position: relative;
  width: 346px;
  z-index: 2;
}

.rectangle-3-1 {
  background-color: #af52de40;
  border-radius: 16px;
  filter: blur(80px);
  height: 194px;
  left: 21px;
  position: absolute;
  top: 20px;
  width: 303px;
}

.overlap-group4 {
  -webkit-backdrop-filter: blur(100px) brightness(100%);
  align-items: flex-start;
  backdrop-filter: blur(100px) brightness(100%);
  background-color: #af52de1a;
  border-radius: 24px;
  display: flex;
  height: 234px;
  left: 1px;
  min-width: 343px;
  padding: 16px;
  position: absolute;
  top: 0;
}

.expenses {
  color: var(--systemblack--light);
  font-weight: 600;
  line-height: 25px;
  min-height: 25px;
  white-space: nowrap;
}

.group-14 {
  align-items: flex-start;
  display: flex;
  height: 18px;
  left: 26px;
  min-width: 304px;
  mix-blend-mode: multiply;
  position: absolute;
  top: 192px;
}

.name-1 {
  letter-spacing: 0.5px;
  line-height: 18px;
  min-height: 18px;
  min-width: 22px;
  white-space: nowrap;
}

.group-14-item {
  letter-spacing: 0.5px;
  line-height: 18px;
  margin-left: 32px;
  min-height: 18px;
  min-width: 20px;
  text-align: center;
  white-space: nowrap;
}

.group-14-item-1 {
  letter-spacing: 0.5px;
  line-height: 18px;
  margin-left: 32px;
  min-height: 18px;
  min-width: 24px;
  text-align: center;
  white-space: nowrap;
}

.jun {
  letter-spacing: 0.5px;
  line-height: 18px;
  margin-left: 32px;
  min-height: 18px;
  min-width: 22px;
  text-align: center;
  white-space: nowrap;
}

.vector-1 {
  height: 81px;
  left: 0;
  position: absolute;
  top: 85px;
  width: 345px;
}

.vector-2 {
  height: 86px;
  left: 0;
  position: absolute;
  top: 84px;
  width: 343px;
}

.group-16 {
  align-items: center;
  display: flex;
  flex-direction: column;
  left: 195px;
  min-height: 53px;
  position: absolute;
  top: 59px;
  width: 56px;
}

.overlap-group5 {
  height: 36px;
  margin-right: 2px;
  position: relative;
  width: 54px;
}

.overlap-group-2 {
  height: 36px;
  left: 0;
  position: absolute;
  top: 0;
  width: 54px;
}

.rectangle-10 {
  background-color: var(--systempurple--light);
  border-radius: 8px;
  height: 30px;
  left: 0;
  position: absolute;
  top: 0;
  width: 54px;
}

.polygon-1 {
  height: 8px;
  left: 23px;
  position: absolute;
  top: 28px;
  width: 10px;
}

.price-5 {
  color: var(--systemwhite--light);
  font-family: var(--font-family-inter);
  font-size: var(--font-size-xxxs);
  font-weight: 400;
  left: 9px;
  letter-spacing: 0;
  line-height: 18px;
  position: absolute;
  top: 6px;
  white-space: nowrap;
}

.ellipse-6 {
  background-color: var(--systempurple--light);
  border-radius: 7px;
  height: 14px;
  margin-top: 3px;
  width: 14px;
}

.rectangle-11 {
  height: 8px;
  margin-left: 3px;
  width: 270px;
  z-index: 1;
}

.frame-2 {
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  margin-top: 18px;
  min-height: 241px;
  padding: 0 4px;
  width: 375px;
  z-index: 5;
}

.overlap-group2 {
  height: 158px;
  margin-right: 8px;
  position: relative;
  width: 347px;
}

.group-13 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  left: 0;
  min-height: 158px;
  position: absolute;
  top: 0;
  width: 347px;
}

.flex-row-3 {
  align-items: center;
  display: flex;
  height: 28px;
  min-width: 343px;
}

.wallet {
  color: var(--systemblack--light);
  font-weight: 700;
  line-height: 28px;
  min-height: 28px;
  min-width: 67px;
  white-space: nowrap;
}

.see-all {
  color: var(--systemblue--light);
  font-weight: 400;
  line-height: 20px;
  margin-left: 229px;
  min-height: 20px;
  min-width: 47px;
  white-space: nowrap;
}

.nike_png18 {
  height: 40px;
  left: 6px;
  object-fit: cover;
  position: absolute;
  top: 50px;
  width: 40px;
}

.overlap-group3 {
  height: 101px;
  margin-top: 8px;
  position: relative;
  width: 359px;
}

.ellipse-5 {
  height: 99px;
  left: 260px;
  position: absolute;
  top: 2px;
  width: 99px;
}

.overlap-group1-1 {
  height: 51px;
  left: 0;
  position: absolute;
  top: 4px;
  width: 352px;
}

.group-11 {
  align-items: flex-start;
  display: flex;
  height: 51px;
  left: 4px;
  min-width: 348px;
  position: absolute;
  top: 0;
}

.rectangle-9 {
  background-color: var(--systemgray--06--light);
  border-radius: 25.5px;
  height: 51px;
  width: 51px;
}

.flex-col {
  align-items: flex-start;
  align-self: center;
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  margin-top: 1px;
  min-height: 44px;
  width: 83px;
}

.uber {
  color: var(--systemblack--light);
  font-weight: 400;
  line-height: 22px;
  min-height: 22px;
  white-space: nowrap;
}

.address {
  color: var(--systemgray--01--light);
  font-weight: 400;
  line-height: 20px;
  margin-top: 2px;
  min-height: 20px;
  white-space: nowrap;
}

.text-3 {
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

.uber_-logo_-black_rgb {
  height: 37px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 7px;
  width: 60px;
}

.ellipse-4 {
  height: 75px;
  left: 272px;
  position: absolute;
  top: 0;
  width: 75px;
}

.image-2 {
  height: 22px;
  left: 299px;
  position: absolute;
  top: 27px;
  width: 22px;
}
</style>
