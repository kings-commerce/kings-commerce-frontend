import React, { useState, useEffect } from "react";
import { StatusCard } from "./components/cards";
import { PieChart, ComboChart } from "./components/charts";
import { statusCardData } from "./lib/data";

const Dashboard = () => {
  return (
    <div>
      <div className="flex flex-row space-x-3 mt-5">
        {statusCardData.map(({ title, num, perChange, image }) => (
          <StatusCard
            title={title}
            number={num}
            percentageChange={perChange}
            image={image}
          />
        ))}
      </div>
      <div className="flex flex-row w-full">
        <ComboChart />
        <PieChart />
      </div>
    </div>
  );
};

export default Dashboard;
