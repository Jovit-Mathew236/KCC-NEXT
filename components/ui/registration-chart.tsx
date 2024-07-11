"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import ApexCharts from "react-apexcharts";

const fetchDistrictData = async () => {
  try {
    const response = await fetch(
      "https://getparticipantscountbyzone-z6r2mciapa-uc.a.run.app/"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const districtData = await response.json();
    return districtData;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const fetchCollegeData = async (district: string) => {
  try {
    const response = await fetch(
      `https://getparticipantscountbycampus-z6r2mciapa-uc.a.run.app/?zone=${district}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const collegeData = await response.json();
    return collegeData;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const RegistrationChart = () => {
  const [districtData, setDistrictData] = useState<any>({});
  const [chartData, setChartData] = useState<any[]>([]);
  const [totalRegistration, setTotalRegistration] = useState<number>(0);

  useEffect(() => {
    const loadDistrictData = async () => {
      const data: { data: any } = await fetchDistrictData();
      setDistrictData(data);
      const initialChartData = Object.entries(data).map(([key, value]) => ({
        x: key,
        y: value,
      }));
      setChartData(initialChartData);
      setTotalRegistration(
        initialChartData.reduce((total, data) => total + data.y, 0)
      );
    };

    loadDistrictData();
  }, []);

  const handleDistrictChange = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const district = event.target.value;
    const collegeData: { data: any } = await fetchCollegeData(district);
    const newChartData = Object.entries(collegeData).map(([key, value]) => ({
      x: key,
      y: value,
    }));
    setChartData(newChartData);
    setTotalRegistration(
      newChartData.reduce((total, data) => total + data.y, 0)
    );
  };
  const chartOptions: ApexCharts.ApexOptions = {
    colors: ["#1A56DB", "#FDBA8C"],
    series: [
      {
        name: "Participants",
        data: chartData,
      },
    ],
    chart: {
      type: "bar", // Ensure this matches one of the recognized chart types
      height: "320px",
      fontFamily: "Inter, sans-serif",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "70%",
        borderRadius: 8,
        borderRadiusApplication: "end",
      },
    },
    tooltip: {
      theme: "dark",
      shared: true,
      intersect: false,
      style: {
        fontFamily: "Inter, sans-serif",
      },
    },
    stroke: {
      show: true,
      width: 0,
      colors: ["transparent"],
    },
    grid: {
      show: false,
      strokeDashArray: 4,
      padding: {
        left: 2,
        right: 2,
        top: -14,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      labels: {
        show: true,
        style: {
          fontFamily: "Inter, sans-serif",
          cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
    fill: {
      opacity: 1,
    },
  };

  return (
    <section className="py-12 px-6 overflow-x-hidden">
      <div className="relative flex justify-center">
        <h2 className="mb-8 text-center leading-10 z-1 fontNovitha">
          Registration
        </h2>
        <h1 className="m-auto text-[80px] -top-5 font-black z-0 opacity-10 absolute leading-10">
          REGISTRATION
        </h1>
      </div>
      <p className="font-thin text-center mb-6">Counting</p>
      <div className="flex gap-3 w-fit my-2 mx-auto">
        <select
          id="district-select"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 bg-opacity- backdrop-blur-md border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          onChange={handleDistrictChange}
        >
          <option selected>Choose a Zone</option>
          {Object.keys(districtData).map((district) => (
            <option key={district} value={district}>
              {district}
            </option>
          ))}
        </select>
      </div>
      <div className="m-auto max-w-sm md:max-w-lg w-full rounded-lg shadow bg-opacity-30 backdrop-blur-md bg-gray-800 p-4 md:p-6">
        <div className="flex justify-between pb-4 mb-4 border-b border-gray-700">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-lg bg-gray-700 flex items-center justify-center me-3">
              <svg
                className="w-6 h-6 text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 19"
              >
                <path d="M14.5 0A3.987 3.987 0 0 0 11 2.1a4.977 4.977 0 0 1 3.9 5.858A3.989 3.989 0 0 0 14.5 0ZM9 13h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z" />
                <path d="M5 19h10v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2ZM5 7a5.008 5.008 0 0 1 4-4.9 3.988 3.988 0 1 0-3.9 5.859A4.974 4.974 0 0 1 5 7Zm5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm5-1h-.424a5.016 5.016 0 0 1-1.942 2.232A6.007 6.007 0 0 1 17 17h2a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5ZM5.424 9H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h2a6.007 6.007 0 0 1 4.366-5.768A5.016 5.016 0 0 1 5.424 9Z" />
              </svg>
            </div>
            <div>
              <h5
                id="totalRegistration"
                className="leading-none text-2xl font-bold text-white pb-1"
              >
                {totalRegistration.toLocaleString()}
              </h5>
              <p className="text-sm font-normal text-gray-400">
                Realtime registration count KCC
              </p>
            </div>
          </div>
        </div>
        <div id="column-chart">
          <ApexCharts
            options={chartOptions}
            series={chartOptions.series}
            type="bar"
            height="320px"
          />
        </div>
      </div>
    </section>
  );
};

export default RegistrationChart;
