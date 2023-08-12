"use client";

import SkillPill from "@/app/components/SkillPill";
import { Tab } from "@headlessui/react";
import { skillsContent } from "../../consts";

const SectionSkills = () => {
  const classNames = (...classes: any[]) => {
    return classes.filter(Boolean).join(" ");
  };
  const { title, description, expertise } = skillsContent;

  return (
    <section
      id="skills"
      className="container mx-auto grid p-4 py-36 lg:min-h-screen xl:px-20"
    >
      <div className="lg:grid lg:grid-cols-2 items-center lg:gap-x-20">
        <div className="relative md:grid mx-auto">
          <img
            className="hidden lg:block xl:ml-auto"
            src="/images/skills-animation.gif"
            alt="gif"
            loading="lazy"
          />
        </div>
        <div className="md:grid md:grid-cols-2 md:gap-x-4 lg:block">
          <div className="md:grid md:self-start lg:self-start">
            <h1 className="text-pw-orange font-spartanExtraBold text-2xl md:text-3xl lg:text-4xl mx-4 md:mx-0 xl:mb-8 text-center md:text-left">
              {title}
            </h1>
            <p
              dangerouslySetInnerHTML={{ __html: description }}
              className="text-pw-gray font-spartanRegular text-base xl:text-2xl px-4 md:px-0 text-center md:text-left"
            ></p>
          </div>
          <div className="w-full mx-auto py-8 md:py-4 px-4 sm:px-0">
            <Tab.Group>
              <Tab.List className="flex space-x-1 rounded bg-transparent p-1">
                {expertise.map((category) => (
                  <Tab
                    key={category.id}
                    className={({ selected }) =>
                      classNames(
                        "w-full rounded py-2.5 text-xs lg:text-sm font-medium font-spartanMedium",
                        "ring-white ring-opacity-60 ring-offset-2 ring-offset-pw-orange focus:outline-none focus:ring-2 bg-pw-dark-blue",
                        selected
                          ? "text-pw-orange  shadow"
                          : "text-white hover:text-pw-orange"
                      )
                    }
                  >
                    {category.name}
                  </Tab>
                ))}
              </Tab.List>
              <Tab.Panels className="mt-3">
                {expertise.map((category) => (
                  <Tab.Panel
                    key={category.name}
                    className={classNames(
                      "rounded bg-white p-3 shadow-lg",
                      "ring-white ring-opacity-60 border-2 border-pw-blue border-double ring-offset-2 ring-offset-pw-blue focus:outline-none focus:ring-2"
                    )}
                  >
                    <div className="flex flex-wrap justify-center">
                      {category.skills.map((item) => (
                        <SkillPill item={item} key={item.id} />
                      ))}
                    </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionSkills;
