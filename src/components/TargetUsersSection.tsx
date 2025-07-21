import React from "react";

const taskTypes = [
  { title: "Marketing", description: "Help with website", image: "/assets/mobilescreens/work.png" },
  { title: "Painting", description: "Wall mount art and paintings", image: "/assets/mobilescreens/painting.png" },
  { title: "Movers", description: "Packing, wrapping, moving", image: "/assets/mobilescreens/moving.png" },
  { title: "Cleaning", description: "Clean, mop and tidy", image: "/assets/mobilescreens/cleaning.png" },
  { title: "Furniture", description: "Flatpack assembly and disassembly", image: "/assets/mobilescreens/furniture.png" },
  { title: "Deliveries", description: "Urgent deliveries and couriers", image: "/assets/mobilescreens/delivery.png" },
  { title: "Gardening", description: "Mulching, weeding and tidying up", image: "/assets/mobilescreens/garden.png" },
  { title: "Handyperson", description: "Help with home maintenance", image: "/assets/mobilescreens/handy.png" },
  { title: "Business", description: "Help with accounting and tax", image: "/assets/mobilescreens/business.png" },
];

const ScrollingGrid = () => {
  const fullList = [...taskTypes, ...taskTypes]; // duplicate for seamless looping

  return (
    <div className="relative h-[440px] overflow-hidden w-full">
      <div className="absolute animate-scroll-up space-y-4">
        <div className="grid grid-cols-2 gap-4">
          {fullList.map((task, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm w-full"
              style={{ minHeight: 104 }}
            >
              <img
                src={task.image}
                alt={task.title}
                className="w-20 h-20 object-cover bg-gray-100 flex-shrink-0 border border-[#eaf1fb] rounded-xl"
              />
              <div className="flex flex-col overflow-hidden">
                <div className="font-bold text-base text-[#102266] leading-snug line-clamp-1 break-words">
                  {task.title}
                </div>
                <div className="text-sm text-[#374151] line-clamp-2 break-words">
                  {task.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind animation override */}
      <style>{`
        @keyframes scroll-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }

        .animate-scroll-up {
          animation: scroll-up 15s linear infinite;
        }
      `}</style>
    </div>
  );
};

const TargetUsersSection = () => {
  return (
    <section className="py-0">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
          {/* Left Column */}
          <div className="flex-1 md:pt-12">
            <h2 className="text-4xl font-bold text-[#1a237e] mb-6 leading-tight">
              Post Any Task. <br />Perform What You Love.
            </h2>
            <ol className="mb-10 space-y-4">
              {[
                "Post any kind of task—big or small, in any domain.",
                "Set your requirements and budget.",
                "Performers pick tasks that match their skills and capabilities.",
              ].map((step, idx) => (
                <li key={idx} className="flex items-center gap-4">
                  <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#e0e7ff] text-[#2250d7] font-bold text-md">
                    {idx + 1}
                  </span>
                  <span className="text-lg text-[#102266] font-medium">{step}</span>
                </li>
              ))}
            </ol>
            <button className="bg-[#2250d7] hover:bg-[#1636a0] text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg transition-colors duration-200 rounded-md">
              Post your task
            </button>
          </div>

          {/* Right Column: Animated Grid */}
          <div className="flex-1 flex justify-center">
            <ScrollingGrid />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetUsersSection;