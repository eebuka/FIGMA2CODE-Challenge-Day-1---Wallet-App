import Vue from "vue";
import Router from "vue-router";
import Reciept from "./components/Reciept";
import Home from "./components/Home";
import GetStarted from "./components/GetStarted";
import Payment from "./components/Payment";
import AddCard from "./components/AddCard";
import Wallet from "./components/Wallet";
import Frame6 from "./components/Frame6";
import { recieptData, homeData, getStartedData, paymentData, addCardData, walletData, frame6Data } from "./data";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/reciept",
      component: Reciept,
      props: { ...recieptData },
    },
    {
      path: "/home",
      component: Home,
      props: { ...homeData },
    },
    {
      path: "/payment",
      component: Payment,
      props: { ...paymentData },
    },
    {
      path: "/add-card",
      component: AddCard,
      props: { ...addCardData },
    },
    {
      path: "/wallet",
      component: Wallet,
      props: { ...walletData },
    },
    {
      path: "/frame-6",
      component: Frame6,
      props: { ...frame6Data },
    },
    {
      path: "*",
      component: GetStarted,
      props: {
        kingdomPayment1:
          "https://anima-uploads.s3.amazonaws.com/projects/61fcadd16b2468ecf928bf7d/releases/61fcb1aaf2e7da9f22898104/img/kingdom-payment-1@1x.png",
        expenio: "EXPENIO",
        goingCashlessHasN: "Going cashless has never been this easier with the world’s most leading expense manager.",
        getStarted: "Get Started",
        iPhoneX11ProLightBaseProps: getStartedData.iPhoneX11ProLightBaseProps,
        homeIndicatorLightProps: getStartedData.homeIndicatorLightProps,
      },
    },
  ],
});
