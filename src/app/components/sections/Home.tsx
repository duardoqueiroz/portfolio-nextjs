import { homeContent } from "@/app/consts";
import SocialMediaButton from "@/app/components/SocialNetworksButton";
import React from "react";

const SectionHome = () => {
  const { title, description, socialNetworks } = homeContent;

  return (
    <div id="home" className="container md:mx-auto grid h-[calc(100vh)]">
      <div className="grid self-start"></div>
      <div className="mx-auto grid-self-center lg:px-20 container">
        <h1 className="font-spartanExtraBold text-4xl md:text-4xl lg:text-6xl xl:text-8xl stroke-text text-center lg:text-left">
          {title}
        </h1>
        <h2 className="font-spartanSemiBold text-3xl md:text-3xl lg:text-4xl xl:text-6xl text-white my-4 text-center lg:text-left">
          {description}
        </h2>
        <div className="flex justify-center lg:justify-start space-x-4">
          {socialNetworks.map((item) => (
            <SocialMediaButton
              key={item.name}
              icon={item.icon}
              link={item.url}
              name={item.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionHome;
