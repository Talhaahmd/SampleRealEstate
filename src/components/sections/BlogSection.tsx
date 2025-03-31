import { BlogCard } from "../ui/BlogCard";

export const BlogSection = () => {
  const blogPosts = [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d67be1416a506f5250dcb965be7daecae84df714",
      category: "Lifestyle",
      title: "Top 5 Reasons to Live in Cap Cana in 2025",
      description:
        "Discover how to elevate your home with exquisite design elements.",
      author: {
        name: "Jane Doe",
        date: "11 Jan 2022",
        readTime: "5 min read",
      },
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c9bfe4ad4335b3ada7121567434698ecb91dfcf3",
      category: "Design",
      title: "How Golf Communities Are Redefining Luxury Living",
      description:
        "Explore the vibrant flavors that define Miami's dining culture.",
      author: {
        name: "John Smith",
        date: "12 Jan 2022",
        readTime: "6 min read",
      },
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/4689ba6165269f83f6974f9ea1f54c3039285774",
      category: "Events",
      title: "A Day in the Life at Reef & Golf: Resident Stories",
      description:
        "Don't miss the exclusive events that showcase Miami's luxury lifestyle.",
      author: {
        name: "Emily Clark",
        date: "13 Jan 2022",
        readTime: "4 min read",
      },
    },
  ];

  return (
    <section className="flex w-full flex-col items-center gap-20 bg-[#F6F4EB] px-16 py-28 max-md:px-8 max-md:py-20 max-sm:px-6 max-sm:py-16">
      <div className="flex w-[768px] flex-col items-center gap-4 max-md:w-full">
        <h2 className="text-black text-center text-base font-semibold leading-6 w-full">
          Blog
        </h2>
        <div className="flex flex-col items-center gap-6 w-full">
          <h3 className="text-black text-center text-5xl font-normal leading-[57.6px] tracking-[-0.48px] max-md:text-[40px] max-sm:text-[32px]">
            Latest from Reef &amp; Golf
          </h3>
          <p className="text-black text-center text-lg font-normal leading-[27px] max-sm:text-base">
            Insights on Miami's upscale lifestyle and design trends.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-start gap-16 w-full">
        <div className="flex items-start gap-8 w-full max-md:flex-wrap max-sm:flex-col">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </div>
      <div className="flex flex-col items-start gap-4">
        <button className="text-black text-base font-medium leading-6 gap-2 border px-6 py-2.5 rounded-xl border-[rgba(0,0,0,0.15)] hover:bg-black/5 transition-colors">
          View all
        </button>
      </div>
    </section>
  );
};
