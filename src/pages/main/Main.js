import React from "react";
import MainBanner from "./MainBanner";
import KeyBenefits from "./KeyBenefits";
import QuickFind from "./QuickFind";
import FilterComponent from "./FilterComponent";
import WelfareList from "./WelfareList";

const Main = () => {
  return (
    <>
      <main>
        <MainBanner />
        <KeyBenefits />
        <QuickFind />
        <FilterComponent />
        <WelfareList />
      </main>
    </>
  );
};

export default Main;
