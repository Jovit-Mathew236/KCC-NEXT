"use client";

// components/EventsSection.tsx

import { useEffect, useState } from "react";
import { db } from "../../firebase/config"; // Ensure you have this path correct
import { collection, getDocs } from "firebase/firestore";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

interface Slide {
  url: string;
  eventType: string;
}

const EventsSection = () => {
  const [slides, setSlides] = useState<Slide[]>([]);

  useEffect(() => {
    const loadImages = async () => {
      const querySnapshot = await getDocs(collection(db, "images"));
      const newSlides: Slide[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data() as Slide;
        if (data.eventType !== "upcoming") {
          newSlides.push(data);
        }
      });
      setSlides(newSlides);
    };

    loadImages();
  }, []);

  return (
    <section className="py-12 px-6 overflow-x-hidden">
      <div className="relative flex justify-center">
        <h2 className="mb-8 text-center leading-10 z-1 fontNovitha">Events</h2>
        <h1 className="m-auto text-[80px] -top-5 font-black z-0 opacity-10 absolute leading-10">
          EVENTS
        </h1>
      </div>
      <p className="font-thin text-center mb-6 ">Ongoing events</p>

      <div className="relative mx-auto border-gray-800 bg-gray-800 border-[16px] rounded-t-xl h-[272px] max-w-[401px] md:h-[394px] md:max-w-[612px]">
        <div className="relative flex justify-center items-center">
          <span className="animate-ping absolute inline-flex h-[140px] w-[180px] mt-60 rounded-md bg-yellow-500 opacity-35 z-0"></span>
        </div>
        <div className="rounded-xl overflow-hidden h-[240px] md:h-[362px] ">
          <div
            id="gallery"
            className="relative w-full h-[240px] md:h-[362px] rounded-xl"
          >
            <Carousel
              className="h-full"
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
            >
              <CarouselContent className="h-full">
                {slides.map((slide, index) => (
                  <CarouselItem key={index} className="h-full">
                    <Image
                      width={500}
                      height={500}
                      src={slide.url}
                      alt={`Slide ${index + 1}`}
                      className="object-cover object-center w-full h-full"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="ml-14" />
              <CarouselNext className="mr-14" />
            </Carousel>
          </div>
        </div>
      </div>
      <div className="relative mx-auto bg-gray-700 rounded-b-xl h-[24px] max-w-[401px] md:h-[42px] md:max-w-[612px]">
        <Image
          width={500}
          height={500}
          src="/assets/kcclogowhite.webp"
          alt=""
          className="w-6 h-6 md:w-10 md:h-10 p-2 md:p-2 m-auto"
        />
      </div>
      <div className="relative mx-auto bg-gray-800 rounded-b-xl h-[55px] max-w-[83px] md:h-[95px] md:max-w-[242px]"></div>
    </section>
  );
};

export default EventsSection;
