"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import Link from "next/link";
import { projectsContent } from "@/app/consts";
import SocialMediaButton from "@/app/components/SocialNetworksButton";

const SectionProjects = () => {
  const { title, projects, description } = projectsContent;
  return (
    <section
      id="projects"
      className="lg:min-h-screen mx-auto my-auto container bg-white py-20 md:py-36 xl:bg-[url('/images/projects-bottom-image.svg')] bg-left bg-contain bg-no-repeat"
    >
      <div className="md:grid md:self-start py-5">
        <h1 className="text-pw-orange font-spartanExtraBold text-center text-2xl md:text-3xl lg:text-4xl mx-4 md:mx-0 xl:mb-8">
          {title}
        </h1>
        <p className="text-pw-gray font-spartanRegular text-base xl:text-2xl px-4 md:px-0 text-center">
          {description}
        </p>
      </div>
      <div className="pt-6">
        <Swiper
          slidesPerView={"auto"}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          pagination={true}
          modules={[Autoplay, Pagination]}
          className="w-full"
        >
          {projects.map((project) => (
            <SwiperSlide
              key={project.id}
              className="grid self-center md:grid-cols-2  items-center"
            >
              <div className="relative">
                <img
                  src="/images/net-bg.svg"
                  alt="net-bg"
                  className="animate-pulse -top-9 absolute"
                  loading="lazy"
                />
                <div className="relative p-4">
                  <img className="mx-auto" src={project.image} />
                </div>
              </div>
              <div className="grid self-center md:py-0 py-5">
                <h2 className="text-pw-orange font-spartanSemiBold text-xl my-3 lg:text-3xl lg:mb-6 text-center">
                  {project.title}
                </h2>
                <p className="text-pw-gray font-spartanRegular text-base lg:text-2xl mb-6 text-center">
                  {project.description}
                </p>
                <div className="flex flex-wrap mb-3 lg:mb-6 justify-center">
                  {project.techStack.map((stack) => (
                    <span
                      key={stack.id}
                      className="py-2 px-3 bg-pw-dark-blue text-sm font-spartanMedium text-white rounded mr-4 transition delay-75 duration-300 ease-in-out hover:opacity-80 mb-3"
                    >
                      {stack.stack}
                    </span>
                  ))}
                </div>
                <div className="inline-flex justify-center py-6 space-x-4">
                  {project.githubLink.length > 1 && (
                    <SocialMediaButton
                      key={`project.id-${project.githubLink}`}
                      icon={"/icons/github-black.svg"}
                      link={project.githubLink}
                      name={`${project.title}-${project.githubLink}`}
                    />
                  )}
                  {project.websiteLink.length > 1 && (
                    <SocialMediaButton
                      key={`project.id-${project.websiteLink}`}
                      icon={"/icons/website.png"}
                      link={project.websiteLink}
                      name={`${project.title}-${project.websiteLink}`}
                    />
                  )}
                  {project.figmaLink.length > 1 && (
                    <SocialMediaButton
                      key={`project.id-${project.figmaLink}`}
                      icon={"/icons/figma.svg"}
                      link={project.figmaLink}
                      name={`${project.title}-${project.figmaLink}`}
                    />
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SectionProjects;
