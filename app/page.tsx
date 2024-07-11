"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import EventsSection from "../components/ui/event-session";
import RegistrationChart from "../components/ui/registration-chart";
import CountdownTimer from "../components/ui/countdown-timer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kerala Campus Conference 2024</title>
        <meta
          name="description"
          content="Join us for the Kerala Campus Conference 2024. Proclaim from the rooftops!"
        />
        {/* Add other meta tags, link tags, etc. */}
      </Head>

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-070KWDF5CS');
        `}
      </Script>
      <header
        className="bg-cover bg-center h-screen bg-fixed"
        style={{ backgroundImage: "url('/assets/hero1.webp')" }}
      >
        <div className="bg-black bg-opacity-50 h-full flex justify-center">
          <div className="absolute bottom-10 flex flex-col justify-end items-center md:static md:justify-center overflow-hidden">
            <Image
              src="/assets/kcclogo.webp"
              width={500}
              height={500}
              className="object-cover mb-4 w-56 drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]"
              alt="KCC Logo"
            ></Image>
            <h1 className="text-4xl text-center font-bold text-white mb-3">
              Kerala Campus Conference 2024
            </h1>

            <Image
              src="/assets/PFTR.png"
              width={500}
              height={500}
              className="object-cover mb-4 w-56 "
              alt="PFTR"
            ></Image>

            <p className="text-lg text-center text-white mb-6">
              Rajagiri Campus, Kalamassery | August 23 - 26
            </p>
            <div className="mt-4 flex gap-4">
              <a
                href="#about"
                className="bg-transparent text-white px-4 py-2 border border-white rounded-full"
              >
                View Detail
              </a>
              <a
                href="/assets/docs/KCC THEME DOC.pdf"
                download="KCC THEME DOC.pdf"
                className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-full ml-4"
              >
                Download Theme
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* <!-- About Section --> */}
      <section id="about" className="animate-ease-in py-12 px-6">
        <div className="md:w-[600px] m-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">What is KCC?</h2>
          <p className="mb-6">
            The Kerala Campus Conference is a much-anticipated gathering of
            campus ministers initiated by the Jesus Youth Kerala Campus
            Ministry. As a vibrant ministry of young people, we aim to bring the
            message of Christ to the academic world.
          </p>
        </div>
        <div className="space-y-12 md:w-[500px] md:m-auto">
          <div className="relative bg-blue-500 p-6 rounded-[20px] tiltedr text-center">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Image
                src="/assets/aboutarrow.webp"
                width={500}
                height={500}
                alt="Icon"
                className="w-12 h-12 rounded-full"
              ></Image>
            </div>
            <p className="mt-4 font-semibold">
              Provides leaders with enhanced clarity about the ministry&&apos;s
              current activities and priorities. Effectively communicates the
              ministry&&apos;s vision to grassroots levels.
            </p>
          </div>
          <div className="relative bg-green-500 p-6 rounded-[20px] tiltedl text-center">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Image
                src="/assets/aboutdp.webp"
                width={500}
                height={500}
                alt="Icon"
                className="w-12 h-12 rounded-full"
              ></Image>
            </div>
            <p className="mt-4 font-semibold">
              A collective of hundreds of young leaders sharing their
              experiences in building the kingdom of God on campuses.
            </p>
          </div>
          <div className="relative bg-yellow-500 p-6 rounded-[20px] text-center">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Image
                src="/assets/aboutstar.webp"
                width={500}
                height={500}
                alt="Icon"
                className="w-12 h-12 rounded-full"
              ></Image>
            </div>
            <p className="mt-4 font-semibold">
              Serves as a vital platform for igniting the spirit of
              evangelization in leadership for the years to come.
            </p>
          </div>
        </div>
      </section>

      {/* <!-- Theme Section --> */}
      <section className="py-12 px-6 ">
        <div className="relative flex justify-center">
          <h2 className="mb-8 text-center leading-10 z-1 fontNovitha">Theme</h2>
          <h1 className="m-auto text-[80px] -top-5 font-black z-0 opacity-10 absolute leading-10">
            THEME
          </h1>
        </div>
        <p className="font-thin max-w-80 m-auto text-center mb-6">
          What I tell you in the speak in the daylight; what is whispered in
          your ear, proclaim from the rooftops.
        </p>
        <div className="space-y-4 flex flex-col items-center">
          <div className="theme-block flex items-center md:w-[640px] md:justify-between gap-6">
            <div className="theme-content mt-8">
              <p className="font-bold bg-red-500 w-fit px-2">#profess</p>
              <p className="text-sm mt-4">
                To profess our faith to declare it openly and boldly.
              </p>
            </div>
            <Image
              src="/assets/themeprofess.webp"
              width={500}
              height={500}
              className="h-48 w-auto"
              alt="Profess Image"
            ></Image>
          </div>
          <div className="theme-block flex items-center md:w-[640px] md:justify-between gap-6">
            <Image
              src="/assets/themewitness.webp"
              width={500}
              height={500}
              className="h-44 w-auto"
              alt="Profess Image"
            ></Image>
            <div className="theme-content mt-8">
              <p className="font-bold bg-yellow-500 w-fit px-2">#witness</p>
              <p className="text-sm mt-4">
                To witness is to testify the transforming power of God&&apos;s
                love in our lives.
              </p>
            </div>
          </div>
          <div className="theme-block flex items-center md:w-[640px] md:justify-between gap-6">
            <div className="theme-content mt-8">
              <p className="font-bold bg-green-500 w-fit px-2">#celebrate</p>
              <p className="text-sm mt-4">
                To celebrate faith on campus is to rejoice in the richness of
                the Catholic journey. To celebrate faith is to rejoice in the
                richness of the Catholic journey.
              </p>
            </div>
            <Image
              src="/assets/themecelibrates.webp"
              width={500}
              height={500}
              className="h-48 w-auto"
              alt="Profess Image"
            ></Image>
          </div>
        </div>
      </section>

      {/* <!-- Event Section --> */}
      <EventsSection />

      <RegistrationChart />

      {/* <!-- Registration Section --> */}
      <section className="py-12 px-6">
        <h2 className="text-3xl md:text-[50px] font-bold mb-8 text-center">
          Steps to Register
        </h2>
        <ol className="relative border-l mt-8 border-fuchsia-500 md:m-auto md:w-fit">
          <li className="mb-10 ml-6">
            <div className="absolute w-3 h-3 bg-fuchsia-500 rounded-full mt-1.5 -left-1.5 border border-white "></div>
            <h3 className="text-lg font-semibold text-white">
              Request an Invitation
            </h3>
            <p className="text-base font-normal text-gray-400">
              {" "}
              Contact your college coordinator to get your invitation.
            </p>
          </li>
          <li className="mb-10 ml-6">
            <div className="absolute w-3 h-3 bg-fuchsia-500 rounded-full mt-1.5 -left-1.5 border border-white"></div>
            <h3 className="text-lg font-semibold text-white">
              Download the KCC App
            </h3>
            <p className="text-base font-normal text-gray-400">
              {" "}
              Once invited, download and install the KCC app to complete your
              registration.
            </p>
          </li>
          <li className="mb-10 ml-6">
            <div className="absolute w-3 h-3 bg-fuchsia-500 rounded-full mt-1.5 -left-1.5 border border-white"></div>
            <h3 className="text-lg font-semibold text-white">
              Join the KCC Community
            </h3>
            <p className="text-base font-normal text-gray-400">
              Engage with the community through the app, participate in prayers,
              and stay updated.
            </p>
          </li>
          <li className="mb-10 ml-6">
            <div className="absolute w-3 h-3 bg-fuchsia-500 rounded-full mt-1.5 -left-1.5 border border-white"></div>
            <h3 className="text-lg font-semibold text-white">
              Pay the Registration Fee
            </h3>
            <p className="text-base font-normal text-gray-400">
              You&&apos;ll be notified when the portal opens. Pay the fee to
              secure your spot.
            </p>
          </li>
          <li className="ml-6">
            <div className="absolute w-3 h-3 bg-fuchsia-500 rounded-full mt-1.5 -left-1.5 border border-white"></div>
            <h3 className="text-lg font-semibold text-white">
              Prepare for KCC24
            </h3>
            <p className="text-base font-normal text-gray-400">
              {" "}
              You&&apos;re all set! Get ready for an amazing experience.
            </p>
          </li>
        </ol>
      </section>

      {/* <!-- About the App Section --> */}
      <section className="py-12 px-6 md:w-[600px] m-auto">
        <Image
          src="/assets/kcclogo.webp"
          alt="KCC Logo"
          width={500}
          height={500}
          className="m-auto mb-4 w-44"
        ></Image>

        <h2 className="text-xl font-bold mb-4">About the App</h2>
        <div>
          <p className="mb-6">
            The app is particularly designed for KCC registration and updates of
            KCC24. You will get notifications regarding different events
            happening based on KCC24 through the app.
          </p>
          <div className="flex flex-col gap-2 w-full text-center md:w-fit md:m-auto">
            <a
              href="https://drive.google.com/drive/folders/1rWgeReEVlQnD53q9NQXGb34Wzk2Zly2S?usp=sharing"
              className="bg-gray-900 px-4 py-2 rounded flex items-center cursor-pointer  justify-center after:ml-4 after:content-[url('/assets/android.webp')]"
            >
              Download for Android
            </a>
            <a
              href="https://testflight.apple.com/join/b8eIbxEV"
              className="bg-gray-900 px-4 py-2 rounded flex items-center cursor-pointer justify-center after:ml-4 after:content-[url('/assets/apple.webp')]"
            >
              Download for iOS
            </a>
          </div>
        </div>
      </section>

      {/* <!-- Gallery Section --> */}
      <section className="py-12 px-6 w-max-screen overflow-hidden	">
        <div className="relative flex justify-center">
          <h2 className="mb-8 text-center leading-10 z-1 fontNovitha">
            Gallery
          </h2>
          <h1 className="m-auto text-[70px] -top-5 font-black z-0 opacity-10 absolute leading-10">
            GALLERY
          </h1>
        </div>
        <p className="mb-6 w-56 text-center font-thin m-auto ">
          Memorable moments of Kerala Campus Conference 2019
        </p>
        <div className="w-[110vw] -ml-10 grid grid-cols-3 gap-4 tiltedl-xl ">
          <Image
            src="/assets/kcc1.webp"
            width={500}
            height={500}
            alt="gallery-image"
            className="rounded object-cover w-auto h-auto"
          ></Image>
          <Image
            src="/assets/kcc2.webp"
            width={500}
            height={500}
            alt="gallery-image"
            className="rounded object-cover w-auto h-auto"
          ></Image>
          <Image
            src="/assets/kcc3.webp"
            width={500}
            height={500}
            alt="gallery-image"
            className="rounded object-cover w-auto h-auto"
          ></Image>
          <Image
            src="/assets/kcc4.webp"
            width={500}
            height={500}
            alt="gallery-image"
            className="rounded object-cover w-auto h-auto"
          ></Image>
          <Image
            src="/assets/kcc5.webp"
            width={500}
            height={500}
            alt="gallery-image"
            className="rounded object-cover w-auto h-auto"
          ></Image>
          <Image
            src="/assets/kcc6.webp"
            width={500}
            height={500}
            alt="gallery-image"
            className="rounded object-cover w-auto h-auto"
          ></Image>
        </div>
      </section>

      <CountdownTimer />

      {/* <!-- Footer Section --> */}
      <footer className="py-10 bg-slate-950 bg-opacity-30 backdrop-blur-md text-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col items-center mb-8">
            <Image
              src="/assets/kcclogo.webp"
              width={500}
              height={500}
              alt="KCC Logo"
              className="w-44 mb-4"
            ></Image>
          </div>
          <div className="flex flex-col md:flex-row gap-8 justify-between md:text-left">
            <div className="w-fit">
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <a
                href="https://www.instagram.com/kerala_campus_ministry"
                className="flex items-center gap-2 md:justify-start mb-2"
              >
                <i className="fi fi-brands-instagram"></i>
                Instagram
              </a>
              <a
                href="https://youtube.com/@keralacampusministryjesusyouth"
                className="flex items-center gap-2 md:justify-start mb-2"
              >
                <i className="fi fi-brands-youtube"></i> YouTube
              </a>
              <a
                href="https://www.facebook.com/keralacampusministry?mibextid=ZbWKwL"
                className="flex items-center gap-2 md:justify-start mb-2"
              >
                <i className="fi fi-brands-facebook"></i>
                Facebook
              </a>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <p className="mb-2 font-thin">
                <strong>George Joseph</strong> - Kerala CCT Coordinator
              </p>
              <p className="mb-2 font-thin">
                <a
                  href="tel:+919496673675"
                  className="text-yellow-500 hover:underline"
                >
                  9496673675
                </a>
              </p>
              <p className="mb-2 font-thin">
                <strong>Don Benny</strong> - KCC General Coordinator
              </p>
              <p className="mb-2 font-thin">
                <a
                  href="tel:+918848762429"
                  className="text-yellow-500 hover:underline"
                >
                  8848762429
                </a>
              </p>
              <p className="mb-2 font-thin">
                <strong>Alwin Thomas</strong> - KCC Mobilization Coordinator
              </p>
              <p className="mb-2 font-thin">
                <a
                  href="tel:+918606721186"
                  className="text-yellow-500 hover:underline"
                >
                  8606721186
                </a>
              </p>
            </div>
            <div className="w-fit text-left">
              <h3 className="text-xl font-semibold mb-4">Download App</h3>
              <a
                href="https://testflight.apple.com/join/b8eIbxEV"
                className="flex items-center justify-center md:justify-start mb-2 w-fit"
              >
                <Image
                  src="/assets/apple.webp"
                  width={500}
                  height={500}
                  alt="iOS"
                  className="w-5 h-5 mr-2"
                ></Image>
                iOS
              </a>
              <a
                href="https://drive.google.com/drive/folders/1rWgeReEVlQnD53q9NQXGb34Wzk2Zly2S?usp=sharing"
                className="flex items-center justify-center md:justify-start mb-2 w-fit"
              >
                <Image
                  src="/assets/android.webp"
                  width={500}
                  height={500}
                  alt="Android"
                  className="w-5 h-5 mr-2"
                ></Image>
                Android
              </a>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Image
              src="/assets/logo.webp"
              width={500}
              height={500}
              alt="KCC Logo"
              className="m-auto mb-2 w-8 h-auto"
            ></Image>
            <p className="mt-4 text-sm font-thin">
              Copyright © Kerala Campus Ministry - All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
