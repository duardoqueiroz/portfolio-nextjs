"use client";

import { Disclosure, Transition } from "@headlessui/react";
import Markdown from "marked-react";

interface ITimelineProps {
  item: {
    id: string;
    title: string;
    company: string;
    startDate: string;
    endDate: string;
    techStack: {
      id: string;
      title: string;
    }[];
    summary: string;
  };
}

const Timeline = (props: ITimelineProps) => {
  const { item } = props;

  return (
    <div
      key={item.id + item.company}
      className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-pw-dark-blue"
    >
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className={"text-left"}>
              <div className="flex justify-between w-fit items-end">
                <div>
                  <h2 className="text-base lg:text-2xl font-spartanBold text-pw-dark-blue">
                    {item.title}
                  </h2>
                  <h3 className="text-xl lg:text-xl font-spartanSemiBold text-pw-orange my-2">
                    {item.company}
                  </h3>
                  <time className=" text-sm lg:text-base font-spartanMedium text-pw-gray">
                    {item.startDate} - {item.endDate}
                  </time>
                  <h4 className="text-base lg:text-base font-spartanBold text-pw-orange my-2">
                    <>
                      Tech Stack :{" "}
                      {item.techStack.map((item) => (
                        <span
                          className="font-spartanMedium text-pw-dark-blue"
                          key={item.id + item.title}
                        >
                          {item.title},{" "}
                        </span>
                      ))}
                    </>
                  </h4>
                </div>
                <img
                  src="/icons/arrow-down.svg"
                  alt="arrow-icon-down"
                  className={`${open ? "rotate-180 transform" : ""} ml-10 mb-3`}
                  loading="lazy"
                />
              </div>
            </Disclosure.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel
                className={
                  "my-2 ml-2 prose prose-headings:text-base prose-headings:font-spartanRegular prose-headings:text-pw-orange prose-li:text-pw-gray prose-li:font-spartanMedium prose-li:text-base"
                }
              >
                <Markdown value={item.summary} />
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default Timeline;
