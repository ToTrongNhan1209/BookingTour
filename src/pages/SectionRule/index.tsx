import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CruiseRuleSection from "../../components/CruiseRuleSection";

const SectionRule: React.FC = () => {
  return (
    <>
      <Header />
      <div className="privacy-page mt-94">
        <div className="container">

          <CruiseRuleSection />
        </div>

      </div>
      <Footer />
    </>
  );
};

export default SectionRule;
