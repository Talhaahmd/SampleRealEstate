import { FeatureCard } from "../ui/FeatureCard";

export const FeaturesSection = () => {
  return (
    <section className="flex w-full flex-col items-center gap-20 bg-[#FAF9F5] px-16 py-28 max-md:px-8 max-md:py-20 max-sm:px-6 max-sm:py-16">
      <div className="flex w-[768px] flex-col items-center gap-4 max-md:w-full">
        <h2 className="text-black text-center text-base font-semibold leading-6">
          Luxury
        </h2>
        <div className="flex flex-col items-center gap-6 w-full">
          <h3 className="text-black text-center text-5xl font-normal leading-[57.6px] tracking-[-0.48px] max-md:text-[40px] max-sm:text-[32px]">
            Short heading goes here
          </h3>
          <p className="text-black text-center text-lg font-normal leading-[27px] max-sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-start gap-8 w-full">
        <div className="flex items-start gap-8 w-full max-md:flex-wrap max-sm:flex-col">
          <FeatureCard
            image="https://cdn.builder.io/api/v1/image/assets/TEMP/6f377992f43d4bb5a73d960ae27506dcc09650da"
            tagline="Tagline"
            title="Experience Unmatched Elegance"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            buttonText="Contact Us Now"
          />
          <FeatureCard
            image="https://cdn.builder.io/api/v1/image/assets/TEMP/183f739a55dabdb65e2af00c7ffa4b6408079d61"
            tagline="Tagline"
            title="Discover Your Residence"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            buttonText="Button"
          />
          <FeatureCard
            image="https://cdn.builder.io/api/v1/image/assets/TEMP/009c92bd617d8773384b8e053bea1098e6281aea"
            tagline="Tagline"
            title="Schedule a Private Tour"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            buttonText="Button"
          />
        </div>
      </div>
    </section>
  );
};
