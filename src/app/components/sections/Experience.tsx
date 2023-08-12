import { experienceContent } from "@/app/consts";
import Timeline from "@/app/components/Timeline";

const SectionExperience = () => {
  const { title, timeline } = experienceContent;

  return (
    <section
      id="experience"
      className="container items-center mx-auto px-4 lg:grid py-36 lg:min-h-screen xl:px-20 snap-center self-center md:grid-cols-2 lg:grid-cols-2 lg:gap-x-14"
    >
      <div className="grid self-center">
        <h1 className="text-pw-orange font-spartanExtraBold text-2xl md:text-3xl lg:text-4xl mb-4 xl:mb-8 text-center md:text-left col-span-12">
          {title}
        </h1>
        <div className="relative col-span-12 px-0 md:px-4 space-y-6 sm:col-span-9">
          <div className="col-span-12 space-y-6 lg:space-y-12 relative md:px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-pw-dark-blue">
            {timeline.map((item) => (
              <Timeline item={item} key={item.id + item.company} />
            ))}
          </div>
        </div>
      </div>
      <div className="relative z-10">
        <img
          className="hidden lg:block lg:max-w-[50vh] xl:max-w-[60vh] 2xl:max-w-[70vh] mx-auto"
          src="/images/pair-programming.png"
          alt="prcs"
        />
      </div>
    </section>
  );
};

export default SectionExperience;
