import React from "react";

//Left - Content and Right - Image
export const LeftContentService = ({
  title,
  description,
  image_url,
  image_alt,
  icon_url,
  icon_alt,
}) => {
  return (
    <>
      <div className="2xl:container mx-auto">
        <div className="w-[90%] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 py-0">
            {/* Image */}
            <div className="mx-auto order-1 lg:order-2">
              <img
                className="h-56 md:h-[32rem] lg:h-[34rem]"
                src={image_url}
                alt={image_alt}
              />
            </div>
            {/* Content Container */}
            <div className="flex flex-col gap-5 lg:m-auto space-y-1 px-4 md:px-8 order-2 lg:order-1">
              {/* Point Card 1 */}
              <div className="lg:pl-24 space-y-4 md:pr-10">
                {/* Star Points */}
                <div className="font-semibold flex gap-2 text-base sm:text-base md:text-xl lg:text-2xl">
                  <div className="flex gap-3 items-center">
                    <div className="rounded-full bg-secondary p-2">
                      <img
                        src={icon_url}
                        className="h-4 md:h-5"
                        alt={icon_alt}
                      />
                    </div>
                    <p>{title}</p>
                  </div>
                </div>
                <div className="text-sm sm:text-base md:text-lg lg:text-lg text-bodytext">
                  {description}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

//Left - Image and Right - Content

export const RightContentService = ({
  title,
  description,
  image_url,
  image_alt,
  icon_url,
  icon_alt,
}) => {
  return (
    <>
      <div className="2xl:container mx-auto">
        <div className="w-[90%] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 py-0">
            {/* Image */}
            <div className="mx-auto order-2 lg:order-1">
              <img
                className="h-56 md:h-[32rem] lg:h-[34rem]"
                src={image_url}
                alt={image_alt}
              />
            </div>
            {/* Content Container */}
            <div className="flex flex-col gap-5 lg:m-auto space-y-1 px-4 md:px-8 order-2 lg:order-1">
              {/* Point Card 1 */}
              <div className="lg:pl-24 space-y-4 md:pr-10">
                {/* Star Points */}
                <div className="font-semibold flex gap-2 text-base sm:text-base md:text-xl lg:text-2xl">
                  <div className="flex gap-3 items-center">
                    <div className="rounded-full bg-secondary p-2">
                      <img
                        src={icon_url}
                        className="h-4 md:h-5"
                        alt={icon_alt}
                      />
                    </div>
                    <p>{title}</p>
                  </div>
                </div>
                <div className="text-sm sm:text-base md:text-lg lg:text-lg text-bodytext">
                  {description}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
