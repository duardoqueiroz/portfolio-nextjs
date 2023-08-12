import { aboutContent } from "@/app/consts";
import React from "react";

const SectionAbout = () => {
  const { title, description } = aboutContent;

  return (
    <section
      id="about"
      className="snap-y container lg:mx-auto px-4 py-14 md:py-40 lg:min-h-screen"
    >
      <div className="grid self-start"></div>

      <div className=" snap-center grid self-center md:grid-cols-2 lg:grid-cols-2 lg:gap-x-14">
        <div className="relative order-last md:order-1 mb-12">
          <img
            src="/images/gray-arrow.svg"
            alt="net-bg"
            className="z-20 hidden md:block lg:left-8 xl:left-12 2xl:left-28  md:top-4 absolute"
            loading="lazy"
          />
          <img
            src="/images/black-arrow.svg"
            alt="net-bg"
            className="z-20 hidden md:block md:-right-10 lg:right-5 md:bottom-14 absolute"
            loading="lazy"
          />
          <img
            src="/images/gray-retangle.svg"
            alt="net-bg"
            className="z-20 hidden md:block md:right-4 lg:right-14 xl:right-24 absolute"
            loading="lazy"
          />
          <img
            src="/images/net-bg.svg"
            alt="net-bg"
            className="-bottom-9 -left-3 lg:left-8 animate-pulse absolute"
            loading="lazy"
          />
          <div className="relative z-10">
            <img
              className="hidden md:block max-w-sm md:max-w-xl mx-auto lg:max-w-xl h-[30vh] md:h-[45vh] lg:h-[50vh] xl:h-[70vh] lg:ml-auto"
              src="/images/author-picture.png"
              alt="prcs"
            />
            <img
              className="block md:hidden mt-10 bottom-9 max-w-sm md:max-w-xl mx-auto lg:max-w-xl h-[30vh] md:h-[45vh] lg:h-[50vh] xl:h-[70vh] lg:ml-auto"
              src="/images/author-picture-mobile.png"
              alt="prcs"
            />
          </div>
        </div>
        <div className="grid self-center mb-14 md:order-2">
          <h1 className="text-pw-orange font-spartanExtraBold text-2xl md:text-3xl lg:text-4xl mb-4 xl:mb-8 text-center md:text-left">
            {title}
          </h1>
          <p
            dangerouslySetInnerHTML={{ __html: description }}
            className="lg:text-gray-500 text-gray-300 font-spartanRegular text-lg xl:text-2xl px-4 md:py-0 md:pl-0 lg:pr-0 text-center md:text-left"
          ></p>
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
