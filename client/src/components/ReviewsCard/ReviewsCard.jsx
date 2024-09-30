export const ReviewsCard = ({ name, title, description }) => {
  return (
    <div className="flex flex-col h-full gap-4 md:gap-5 lg:gap-6 px-5 md:p-20 bg-white  min-h-[200px] ">
      <div className="flex flex-col items-start justify-center space-y-1 md:space-y-2 lg:space-y-6">
        <div className="text-base sm:text-base md:text-xl lg:text-2xl font-semibold text-black">
          {title}
        </div>
        <div className="text-sm sm:text-base md:text-lg lg:text-lg text-bodytext  pb-2 flex-1 overflow-hidden">
          {description}
        </div>
        <div className="text-sm md:text-base lg:text-lg text-gray-500">
          - {name}
        </div>
      </div>
    </div>
  );
};
