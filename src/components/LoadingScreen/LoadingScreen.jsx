import React from "react";
import { ScaleLoader } from "react-spinners";

const LoadingScreen = ({ loading }) => {
  return (
    <>
      <div className="2xl:container mx-auto bg-tertiary">
        <div className="w-[90%] mx-auto px-10 py-4 md:px-12 md:py-6 rounded-lg my-5 font-sans">
          <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <div className="relative">
              <ScaleLoader
                height={50}
                width={6}
                color={"#25B4F8"}
                loading={loading}
                style={{
                  height: "3rem",
                  width: "0.5rem",
                  "@media (max-width: 640px)": {
                    height: "1.875rem",
                    width: "0.25rem",
                  },
                  "@media (min-width: 640px) and (max-width: 768px)": {
                    height: "2.5rem",
                    width: "0.375rem",
                  },
                  "@media (min-width: 768px)": {
                    height: "3rem",
                    width: "0.5rem",
                  },
                  "@media (min-width: 1024px)": {
                    height: "3.75rem",
                    width: "0.625rem",
                  },
                }}
              />
            </div>
            <div className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl">
              Loading...
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoadingScreen;