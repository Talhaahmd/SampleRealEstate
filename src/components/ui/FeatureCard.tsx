interface FeatureCardProps {
  image: string;
  tagline: string;
  title: string;
  description: string;
  buttonText: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  image,
  tagline,
  title,
  description,
  buttonText,
}) => {
  return (
    <div className="flex flex-col items-start flex-1 min-w-[300px] border bg-[#F6F4EB] border-[rgba(0,0,0,0.15)]">
      <img src={image} alt={title} className="w-full h-[233px] object-cover" />
      <div className="flex flex-col justify-center items-start gap-6 w-full p-8">
        <div className="flex flex-col items-start gap-2 w-full">
          <div className="text-black text-base font-semibold leading-6">
            {tagline}
          </div>
          <div className="flex flex-col items-start gap-4 w-full">
            <h3 className="text-black text-[32px] font-normal leading-[41.6px] tracking-[-0.32px]">
              {title}
            </h3>
            <p className="text-black text-base font-normal leading-6">
              {description}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-6 w-full">
          <button className="flex justify-center items-center gap-2 rounded-xl group">
            <span className="text-black text-base font-medium leading-6 group-hover:underline">
              {buttonText}
            </span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.70697 16.9496L15.414 11.2426L9.70697 5.53564L8.29297 6.94964L12.586 11.2426L8.29297 15.5356L9.70697 16.9496Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
