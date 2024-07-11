"use client";
import React, { useEffect } from "react";

const CountdownTimer: React.FC = () => {
  useEffect(() => {
    // Count-down timer
    const dest = new Date("aug 23, 2024 10:00:00").getTime();
    const x = setInterval(() => {
      const now = new Date().getTime();
      const diff = dest - now;

      // Check if the countdown has reached zero or negative
      if (diff <= 0) {
        clearInterval(x); // Stop the countdown
        return; // Exit the function
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      const formattedDays = days < 10 ? `0${days}` : days;
      const formattedHours = hours < 10 ? `0${hours}` : hours;
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
      const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

      // Get elements by class name
      const countdownElements = document.getElementsByClassName(
        "countdown-element"
      ) as HTMLCollectionOf<HTMLElement>;

      // Loop through the elements and update their content
      for (let i = 0; i < countdownElements.length; i++) {
        const className = countdownElements[i].classList[1]; // Get the second class name
        switch (className) {
          case "days":
            countdownElements[i].innerHTML = formattedDays.toString();
            break;
          case "hours":
            countdownElements[i].innerHTML = formattedHours.toString();
            break;
          case "minutes":
            countdownElements[i].innerHTML = formattedMinutes.toString();
            break;
          case "seconds":
            countdownElements[i].innerHTML = formattedSeconds.toString();
            break;
          default:
            break;
        }
      }
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(x);
  }, []);

  return (
    <div className="w-full h-96 rounded-2xl flex gap-9 flex-col items-center justify-center bg-cover bg-center overflow-hidden">
      <div className="flex items-start justify-center w-full gap-1.5 count-down-main">
        <div
          className="timer delay-[100ms] duration-[600ms] taos:[transform:translate3d(0,200px,0)_scale(1.2)] taos:opacity-0"
          data-taos-offset="50"
        >
          <div className="relative rounded-xl bg-black/25 backdrop-blur-sm py-3 min-w-[86px] md:min-w-[186px] md:h-[200px] flex items-center justify-center flex-col gap-1 px-3">
            <span className="animate-ping absolute inline-flex h-[55px] w-[55px] rounded-md md:rounded-full bg-yellow-500 opacity-25 z-0"></span>
            <h3 className="countdown-element days font-manrope font-semibold text-2xl text-white text-center"></h3>
            <p className="text-lg uppercase font-normal text-white mt-1 text-center w-full">
              days
            </p>
          </div>
        </div>

        <div
          className="timer delay-[100ms] duration-[600ms] taos:[transform:translate3d(0,200px,0)_scale(1.2)] taos:opacity-0"
          data-taos-offset="100"
        >
          <div className="relative rounded-xl bg-black/25 backdrop-blur-sm py-3 min-w-[86px] md:min-w-[186px] md:h-[200px] flex items-center justify-center flex-col gap-1 px-3">
            <span className="animate-ping absolute inline-flex h-[55px] w-[55px] rounded-md md:rounded-full bg-sky-500 opacity-25 z-0"></span>
            <h3 className="countdown-element hours font-manrope font-semibold text-2xl text-white text-center"></h3>
            <p className="text-lg uppercase font-normal text-white mt-1 text-center w-full">
              Hour
            </p>
          </div>
        </div>

        <div
          className="timer delay-[100ms] duration-[600ms] taos:[transform:translate3d(0,200px,0)_scale(1.2)] taos:opacity-0"
          data-taos-offset="150"
        >
          <div className="relative rounded-xl bg-black/25 backdrop-blur-sm py-3 min-w-[86px] md:min-w-[186px] md:h-[200px] flex items-center justify-center flex-col gap-1 px-3">
            <span className="animate-ping absolute inline-flex h-[55px] w-[55px] rounded-md md:rounded-full bg-yellow-500 opacity-25 z-0"></span>
            <h3 className="countdown-element minutes font-manrope font-semibold text-2xl text-white text-center"></h3>
            <p className="text-lg uppercase font-normal text-white mt-1 text-center w-full">
              Minutes
            </p>
          </div>
        </div>

        <div
          className="timer delay-[100ms] duration-[600ms] taos:[transform:translate3d(0,200px,0)_scale(1.2)] taos:opacity-0"
          data-taos-offset="200"
        >
          <div className="relative rounded-xl bg-black/25 backdrop-blur-sm py-3 min-w-[86px] md:min-w-[186px] md:h-[200px] flex items-center justify-center flex-col gap-1 px-3">
            <span className="animate-ping absolute inline-flex h-[55px] w-[55px] rounded-md md:rounded-full bg-sky-500 opacity-25 z-0"></span>
            <h3 className="countdown-element seconds font-manrope font-semibold text-2xl text-white text-center"></h3>
            <p className="text-lg uppercase font-normal text-white mt-1 text-center w-full">
              Seconds
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
