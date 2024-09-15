export const ReviewsCard = ({ name, title, description }) => {
    return (
      <div className="flex flex-col h-full gap-4 md:gap-5 lg:gap-6 p-5 md:p-4 bg-white  min-h-[200px] max-w-sm">
        <div className="flex flex-col items-center justify-center space-y-1 md:space-y-2 lg:space-y-2">
          <div className="text-base md:text-xl lg:text-2xl font-semibold text-black">
            {name}
          </div>
          <div className="text-sm md:text-base lg:text-lg text-gray-500">
            {title}
          </div>
        </div>
        <div className="text-sm md:text-sm lg:text-base text-bodytext px-2 md:px-3 lg:px-4 pb-2 flex-1 overflow-hidden">
          {description}
        </div>
      </div>
    );
  };
  