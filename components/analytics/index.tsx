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
    <div id='analytics' className="bg-[#F9FBFD] text-blackVariant w-full min-h-[220px] flex justify-between gap-x-8 items-center px-8 lg:px-[93px]">
      <div className="text-[40px] font-bold">
        <p>One Stop</p>
        <p>
          Four <span className="text-[#005AE2]">Possibilities.</span>
        </p>
      </div>
      <div className="flex gap-x-12">
        {analyticsData.map((data) => (
          <div
            key={data.id}
            className="flex flex-col items-start gap-y-1 w-[145px]"
          >
            <p className="text-3xl font-semibold align-self-start">
              {data.activeUsers !== undefined
                ? data.activeUsers
                : data.linksQrGenerated !== undefined
                ? data.linksQrGenerated
                : data.clickedOrScanned !== undefined
                ? data.clickedOrScanned
                : data.appIntegration !== undefined
                ? data.appIntegration
                : null}M
            </p>
            <p className="font-medium text-sm">{data.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Analytics;
