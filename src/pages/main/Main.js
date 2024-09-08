import React from "react";
import MainBanner from "./MainBanner";
import KeyBenefits from "./KeyBenefits";
import QuickFind from "./QuickFind";
import FilterComponent from "./FilterComponent";
import WelfareList from "./WelfareList";
import ChatWidget from "./ChatWidget";

const Main = () => {
  return (
    <>
      <main>
        <MainBanner />
        <KeyBenefits />
        <QuickFind />
        {/* <FilterComponent /> */}
        <WelfareList />
        <ChatWidget />
      </main>
    </>
  );
};

export default Main;
