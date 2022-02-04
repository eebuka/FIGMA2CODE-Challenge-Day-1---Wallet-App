<template>
  <div class="container-center-horizontal">
    <div class="reciept screen">
      <i-phone-x11-pro-light-base
        :iPhoneX11ProLightBase2Props="iPhoneX11ProLightBaseProps.iPhoneX11ProLightBase2Props"
      />
      <div class="frame-1">
        <div class="reciept-1 default--extra-bold-large-title">{{ reciept }}</div>
        <img
          class="image"
          src="https://anima-uploads.s3.amazonaws.com/projects/61fcadd16b2468ecf928bf7d/releases/61fcb1aaf2e7da9f22898104/img/--@2x.svg"
        />
      </div>
      <div class="group-46">
        <div class="overlap-group">
          <div class="date valign-text-middle default--regular--body">{{ date }}</div>
          <div class="name valign-text-middle">{{ name }}</div>
          <img
            class="line"
            src="https://anima-uploads.s3.amazonaws.com/projects/61fcadd16b2468ecf928bf7d/releases/61fcb1aaf2e7da9f22898104/img/line-1@2x.svg"
          />
          <div class="flex-row-1 default--regular--body">
            <div class="amount valign-text-middle">{{ amount }}</div>
            <div class="price valign-text-middle">{{ price1 }}</div>
          </div>
          <div class="flex-row default--regular--body">
            <div class="service-fee valign-text-middle">{{ serviceFee }}</div>
            <div class="price-1 valign-text-middle">{{ price2 }}</div>
          </div>
          <div class="flex-row default--regular--body">
            <div class="internet-charge valign-text-middle">{{ internetCharge }}</div>
            <div class="price-2 valign-text-middle">{{ price3 }}</div>
          </div>
          <img
            class="line-2"
            src="https://anima-uploads.s3.amazonaws.com/projects/61fcadd16b2468ecf928bf7d/releases/61fcb1aaf2e7da9f22898104/img/line-1@2x.svg"
          />
          <div class="flex-row-2">
            <div class="total valign-text-middle default--regular--body">{{ total }}</div>
            <div class="price-3 valign-text-middle default--semi-bold--title-3">{{ price4 }}</div>
          </div>
          <img
            class="line"
            src="https://anima-uploads.s3.amazonaws.com/projects/61fcadd16b2468ecf928bf7d/releases/61fcb1aaf2e7da9f22898104/img/line-1@2x.svg"
          />
          <img
            class="group-45"
            src="https://anima-uploads.s3.amazonaws.com/projects/61fcadd16b2468ecf928bf7d/releases/61fcb1aaf2e7da9f22898104/img/group-45@2x.svg"
          />
        </div>
      </div>
      <router-link to="/home" className="align-self-flex-center">
        <div class="frame-3">
          <div class="overlap-group1">
            <router-link to="/home"
              ><img
                class="frame-3-1"
                src="https://anima-uploads.s3.amazonaws.com/projects/61fcadd16b2468ecf928bf7d/releases/61fcb1aaf2e7da9f22898104/img/frame-3@2x.svg"
              />
            </router-link>
            <div class="place default--semi-bold--headline">{{ place }}</div>
          </div>
        </div></router-link
      ><home-indicator-light />
    </div>
  </div>
</template>

<script>
import IPhoneX11ProLightBase from "./IPhoneX11ProLightBase";
import HomeIndicatorLight from "./HomeIndicatorLight";
export default {
  name: "Reciept",
  components: {
    IPhoneX11ProLightBase,
    HomeIndicatorLight,
  },
  props: [
    "reciept",
    "date",
    "name",
    "amount",
    "price1",
    "serviceFee",
    "price2",
    "internetCharge",
    "price3",
    "total",
    "price4",
    "place",
    "iPhoneX11ProLightBaseProps",
  ],
};
</script>

<style>
.reciept {
  align-items: flex-end;
  background-color: var(--white-lilac);
  display: flex;
  flex-direction: column;
  height: 812px;
  position: relative;
  width: 375px;
}

.frame-1 {
  align-items: center;
  display: flex;
  height: 41px;
  margin-top: 86px;
  min-width: 375px;
  padding: 0 16px;
  z-index: 1;
}

.reciept-1 {
  color: var(--systemblack--light);
  font-weight: 700;
  min-height: 41px;
  min-width: 125px;
}

.image {
  height: 25px;
  margin-left: 190px;
  width: 20px;
}

.group-46 {
  align-items: flex-start;
  display: flex;
  height: 513px;
  margin-right: 3px;
  margin-top: 27px;
  min-width: 347px;
  z-index: 2;
}

.overlap-group {
  align-items: center;
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/61fcadd16b2468ecf928bf7d/releases/61fcb1aaf2e7da9f22898104/img/subtract@1x.svg);
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  min-height: 513px;
  padding: 16px;
  width: 327px;
}

.date {
  align-self: flex-start;
  color: var(--systemblack--light);
  font-weight: 400;
  height: 20px;
  line-height: 20px;
  white-space: nowrap;
}

.name {
  color: var(--systemblack--light);
  font-family: var(--font-family-inter);
  font-size: 18px;
  font-weight: 700;
  height: 28px;
  letter-spacing: 2.5px;
  line-height: 28px;
  margin-right: 1px;
  margin-top: 24px;
  min-width: 160px;
  white-space: nowrap;
}

.line {
  height: 1px;
  margin-right: 2px;
  margin-top: 16px;
  width: 281px;
}

.flex-row-1 {
  align-items: flex-start;
  display: flex;
  margin-right: 1px;
  margin-top: 32px;
  min-width: 282px;
}

.amount {
  color: var(--systemblack--light);
  font-weight: 400;
  height: 20px;
  line-height: 20px;
  min-width: 56px;
  white-space: nowrap;
}

.price {
  color: var(--systemblack--light);
  font-weight: 400;
  height: 20px;
  line-height: 20px;
  margin-left: 175px;
  min-width: 51px;
  text-align: right;
  white-space: nowrap;
}

.flex-row {
  align-items: flex-start;
  display: flex;
  margin-right: 1px;
  margin-top: 12px;
  min-width: 282px;
}

.service-fee {
  color: var(--systemblack--light);
  font-weight: 400;
  height: 20px;
  line-height: 20px;
  min-width: 84px;
  white-space: nowrap;
}

.price-1 {
  color: var(--systemblack--light);
  font-weight: 400;
  height: 20px;
  line-height: 20px;
  margin-left: 157px;
  min-width: 41px;
  text-align: right;
  white-space: nowrap;
}

.internet-charge {
  color: var(--systemblack--light);
  font-weight: 400;
  height: 20px;
  line-height: 20px;
  min-width: 112px;
  white-space: nowrap;
}

.price-2 {
  color: var(--systemblack--light);
  font-weight: 400;
  height: 20px;
  line-height: 20px;
  margin-left: 134px;
  min-width: 36px;
  text-align: right;
  white-space: nowrap;
}

.line-2 {
  height: 1px;
  margin-right: 2px;
  margin-top: 32px;
  width: 281px;
}

.flex-row-2 {
  align-items: flex-start;
  display: flex;
  margin-right: 2px;
  margin-top: 16px;
  min-width: 281px;
}

.total {
  color: var(--systemblack--light);
  font-weight: 400;
  height: 20px;
  line-height: 20px;
  min-width: 35px;
  white-space: nowrap;
}

.price-3 {
  color: var(--systemblack--light);
  font-weight: 600;
  height: 25px;
  line-height: 25px;
  margin-left: 177px;
  min-width: 69px;
  text-align: right;
  white-space: nowrap;
}

.group-45 {
  height: 68px;
  margin-right: 1px;
  margin-top: 80px;
  width: 254px;
}

.frame-3 {
  align-items: flex-start;
  align-self: center;
  border-radius: 14px;
  cursor: pointer;
  display: flex;
  margin-left: 1px;
  margin-top: 53px;
  min-width: 342px;
  z-index: 3;
}

.overlap-group1 {
  height: 58px;
  position: relative;
  width: 342px;
}

.frame-3-1 {
  cursor: pointer;
  height: 58px;
  left: 0;
  position: absolute;
  top: 0;
  width: 342px;
}

.place {
  color: var(--systemwhite--light);
  font-weight: 400;
  left: 147px;
  line-height: 22px;
  position: absolute;
  text-align: center;
  top: 18px;
  white-space: nowrap;
}
</style>
