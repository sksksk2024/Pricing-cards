import { useState } from "react";
import Cards from "./Cards";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const pricingBasic = [{ title: "Basic", monthly: "$19.99", yearly: "$199.99", storage: "500 GB Storage", allowedUsers: "2 Users Allowed", sendUp: "Send up to 3 GB", font: "white" }];

  const pricingProfessional = [
    { title: "Professional", monthly: "$24.99", yearly: "$249.99", storage: "1 TB Storage", allowedUsers: "5 Users Allowed", sendUp: "Send up to 10 GB", font: "gradient" },
  ];

  const pricingMaster = [{ title: "Master", monthly: "$39.99", yearly: "$399.99", storage: "2 TB Storage", allowedUsers: "10 Users Allowed", sendUp: "Send up to 20 GB", font: "white" }];
  

  const togglePlan = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <div className="topImage flex flex-col items-center justify-center pricing text-center py-10">
      <h1 className="mb-8 font-bold text-grayish-blue text-xl">Our Pricing</h1>
      <div className="form-control w-52 mx-auto mb-10">
        <label className="flex gap-4 label cursor-pointer">
          <span className="label-text text-sm font-bold">Annually</span>
          <input
            type="checkbox"
            className="toggle toggle-primary hover:opacity-30"
            checked={isMonthly}
            onChange={togglePlan}
          />
          <span className="label-text text-sm font-bold">Monthly</span>
        </label>
      </div>
      <div className="flex 3xs:flex-col 3xs:gap-10 md:gap-0 md:flex-row">
        <Cards data={pricingBasic} isMonthly={isMonthly} />
        <Cards data={pricingProfessional} isMonthly={isMonthly} />
        <Cards data={pricingMaster} isMonthly={isMonthly} />
      </div>
    </div>
  );
};

export default Pricing;