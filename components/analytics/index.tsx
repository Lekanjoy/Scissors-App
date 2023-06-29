import React from "react";

interface AnalyticsProps {
  activeUsers?: number;
  linksQrGenerated?: number;
  clickedOrScanned?: number;
  appIntegration?: number;
  desc: string;
  id: number;
}

const analyticsData: AnalyticsProps[] = [
  { id: 0, activeUsers: 3, desc: "Active users" },
  { id: 1, linksQrGenerated: 60, desc: "Links & QR codes created" },
  { id: 2, clickedOrScanned: 1, desc: "Clicked & Scanned connections" },
  { id: 3, appIntegration: 300, desc: "App Integrations" },
];

const Analytics = () => {
  
  return (
    <div
      id="analytics"
      className="bg-[#F9FBFD] text-blackVariant w-full min-h-[220px] flex flex-col  py-10 px-4 md:px-10 lg:justify-between  lg:items-center lg:flex-row lg:gap-x-8 lg:px-[93px]"
    >
      <div className="font-bold text-3xl text-center mb-10 lg:mb-0 lg:text-[40px] lg:text-left">
        <p>One Stop</p>
        <p>
          Four <span className="text-[#005AE2]">Possibilities.</span>
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4  lg:gap-x-12 lg:flex ">
        {analyticsData.map((data) => (
          <div
            key={data.id}
            className="flex items-center flex-col lg:items-start lg:gap-y-1 lg:w-[145px]"
          >
            <p className="text-xl font-semibold md:text-2x lg:align-self-start l lg:text-3xl">
              {data.activeUsers !== undefined
                ? data.activeUsers
                : data.linksQrGenerated !== undefined
                ? data.linksQrGenerated
                : data.clickedOrScanned !== undefined
                ? data.clickedOrScanned
                : data.appIntegration !== undefined
                ? data.appIntegration
                : null}
              M
            </p>
            <p className="text-xs md:text-sm lg:font-medium ">{data.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Analytics;
