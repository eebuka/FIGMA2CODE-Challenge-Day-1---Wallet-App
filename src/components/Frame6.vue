<template>
  <div class="container-center-horizontal">
    <form class="frame-6 screen" name="form2" action="form2" method="post">
      <div class="overlap-group4-2">
        <div class="overlap-group3-3">
          <div class="widget-wrapper">
            <h1 class="were-the-bank-of-the-free">{{ wereTheBankOfTheFree }}</h1>
          </div>
          <p class="personal-business-company-help" v-html="personalBusinessCompanyHelp"></p>
          <a href="javascript:SubmitForm('form2')">
            <div class="group-222">
              <div class="overlap-group1-5">
                <div class="get-kuda">{{ getKuda1 }}</div>
              </div>
            </div></a
          >
          <div class="overlap-group2-3">
            <img
              class="ellipse-35"
              src="https://anima-uploads.s3.amazonaws.com/projects/61fcadd16b2468ecf928bf7d/releases/61fcadddbd07246d98d6a7f4/img/ellipse-35@1x.svg"
            />
            <img class="a1-1" :src="a11" /><img class="a2-1" :src="a21" /><img class="a4-1" :src="a41" /><img
              class="a3-1"
              :src="a31"
            />
          </div>
        </div>
        <div class="were-here-to-help-y" v-html="wereHereToHelpY"></div>
        <a href="javascript:SubmitForm('form2')">
          <div class="group-221">
            <div class="overlap-group-8">
              <div class="get-kuda-1">{{ getKuda2 }}</div>
            </div>
          </div></a
        >
        <div class="group-249" :style="{ 'background-image': 'url(' + group249 + ')' }"></div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Frame6",
  props: [
    "wereTheBankOfTheFree",
    "personalBusinessCompanyHelp",
    "getKuda1",
    "a11",
    "a21",
    "a41",
    "a31",
    "wereHereToHelpY",
    "getKuda2",
    "group249",
  ],
  mounted: () => {
    var image = document.querySelectorAll(".were-the-bank-of-the-free");
    new window.simpleParallax(image, {
      orientation: "up",
      scale: 1.2,
      overflow: false,
      delay: 0.4,
      transition: "none",
    });
  },
};
</script>

<style>
.frame-6 {
  align-items: flex-start;
  background-color: var(--systemwhite--light);
  display: flex;
  height: 1080px;
  overflow: hidden;
  width: 1920px;
}

.overlap-group4-2 {
  height: 1644px;
  margin-left: 57px;
  margin-top: -121px;
  position: relative;
  width: 2139px;
}

.overlap-group3-3 {
  height: 1644px;
  left: 26px;
  position: absolute;
  top: 0;
  width: 2113px;
}

.widget-wrapper {
  align-items: flex-start;
  display: flex;
  height: 260px;
  left: 0;
  position: absolute;
  top: 374px;
  width: 982px;
}

.were-the-bank-of-the-free {
  color: var(--meteorite);
  font-family: var(--font-family-poppins-bold);
  font-size: 124px;
  font-weight: 700;
  letter-spacing: 0;
  min-height: 260px;
  width: 100%;
}

.personal-business-company-help {
  color: #591d68;
  font-family: var(--font-family-poppins-medium);
  font-size: var(--font-size-xxs);
  font-weight: 500;
  left: 320px;
  letter-spacing: 0;
  position: absolute;
  top: 191px;
  width: 562px;
}

.group-222 {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  height: 48px;
  left: 1467px;
  min-width: 182px;
  position: absolute;
  top: 147px;
}

.overlap-group1-5 {
  align-items: center;
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/61fcadd16b2468ecf928bf7d/releases/61fcadddbd07246d98d6a7f4/img/rectangle-1067-1@2x.svg);
  background-size: 100% 100%;
  display: flex;
  height: 48px;
  min-width: 180px;
  padding: 0 36.2px;
}

.get-kuda {
  color: #3c1944;
  font-family: var(--font-family-poppins-bold);
  font-size: var(--font-size-xxs);
  font-weight: 700;
  letter-spacing: 0;
  min-height: 20px;
  text-align: center;
  width: 107px;
}

.overlap-group2-3 {
  height: 1731px;
  left: 661px;
  position: absolute;
  top: -39px;
  width: 1505px;
}

.ellipse-35 {
  height: 800px;
  left: 0;
  position: absolute;
  top: 862px;
  width: 896px;
}

.a1-1 {
  height: 966px;
  left: 188px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 743px;
}

.a2-1 {
  height: 966px;
  left: 526px;
  object-fit: cover;
  position: absolute;
  top: 765px;
  width: 747px;
}

.a4-1 {
  height: 965px;
  left: 773px;
  object-fit: cover;
  position: absolute;
  top: 195px;
  width: 732px;
}

.a3-1 {
  height: 966px;
  left: 42px;
  object-fit: cover;
  position: absolute;
  top: 720px;
  width: 763px;
}

.were-here-to-help-y {
  color: var(--meteorite);
  font-family: var(--font-family-poppins-medium);
  font-size: var(--font-size-xl);
  font-weight: 500;
  left: 39px;
  letter-spacing: 0;
  position: absolute;
  top: 794px;
  width: 634px;
}

.group-221 {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  height: 78px;
  left: 26px;
  min-width: 294px;
  position: absolute;
  top: 977px;
}

.overlap-group-8 {
  align-items: flex-end;
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/61fcadd16b2468ecf928bf7d/releases/61fcadddbd07246d98d6a7f4/img/rectangle-1067@2x.svg);
  background-size: 100% 100%;
  display: flex;
  height: 78px;
  min-width: 292px;
  padding: 19px 84px;
}

.get-kuda-1 {
  color: var(--systemwhite--light);
  font-family: var(--font-family-poppins-bold);
  font-size: var(--font-size-xl);
  font-weight: 700;
  letter-spacing: 0;
  min-height: 39px;
  min-width: 123px;
}

.group-249 {
  background-position: 50% 50%;
  background-size: cover;
  height: 151px;
  left: 0;
  position: absolute;
  top: 132px;
  width: 214px;
}
</style>
