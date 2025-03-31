export const GolfSection = () => {
  return (
    <section className="flex w-full flex-col items-start gap-20 bg-[#EBF2F6] px-16 py-28 max-md:px-8 max-md:py-20 max-sm:px-6 max-sm:py-16">
      <div className="flex items-center gap-20 w-full max-md:flex-col">
        <div className="flex flex-col items-start gap-8 flex-1">
          <div className="flex flex-col items-start gap-6 w-full">
            <h2 className="text-black text-[40px] font-normal leading-[48px] tracking-[-0.4px] max-md:text-4xl max-sm:text-[32px]">
              Jack Nicklaus Signature Golf Course
            </h2>
            <p className="text-black text-lg font-normal leading-[27px] max-sm:text-base">
              Direct access to the world-renowned Las Iguanas Golf Course.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4 w-full">
            <div className="flex items-start gap-6 w-full py-2 max-sm:flex-col">
              <div className="flex flex-col items-start gap-2 flex-1">
                <h3 className="text-black text-5xl font-normal leading-[57.6px] tracking-[-0.48px] max-md:text-[40px] max-sm:text-[32px]">
                  Coastal Elegance
                </h3>
                <p className="text-black text-base font-normal leading-6">
                  Modern, open-plan apartments with sweeping sea and golf course
                  views.
                </p>
              </div>
              <div className="flex flex-col items-start gap-2 flex-1">
                <h3 className="text-black text-5xl font-normal leading-[57.6px] tracking-[-0.48px] max-md:text-[40px] max-sm:text-[32px]">
                  Exclusive Amenities
                </h3>
                <p className="text-black text-base font-normal leading-6">
                  Private pool areas, wellness centers, fine dining, beach
                  clubs, and 24/7 security.
                </p>
              </div>
            </div>
          </div>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/76893740ae06921f86b9e398017c772f8acbce2d"
          alt="Golf Course"
          className="h-[640px] max-lg:h-[400px] max-sm:h-[300px] flex-1 rounded-[0px] object-cover"
        />
      </div>
    </section>
  );
};
