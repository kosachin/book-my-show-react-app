import React from "react";

// Components
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";

// Configs
import TempPosters from "../config/TempPosters.config";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col gap-10">
        <div class="container mx-auto px-4">
          <h1 className="text-xl font-bold text-gray-800 my-3">
            The best of Entertainment
          </h1>
          <EntertainmentCardSlider />
        </div>

        <div className="bg-bms-800 py-10">
          <div className="container mx-auto px-4 flex flex-col gap-3">
            <div className="hidden md:flex">
              <img
                src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                alt="Rupay"
                className="w-full h-full"
              ></img>
            </div>
            <PosterSlider
              images={TempPosters}
              title="Premiers"
              subtitle="Brand new releases every friday"
              isDark={true}
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 my-8">
        <PosterSlider
          images={TempPosters}
          title="Online Streaming events"
          isDark={false}
        />
      </div>
      <div className="container mx-auto px-4 my-8">
        <PosterSlider
          images={TempPosters}
          title="Outdoor events"
          isDark={false}
        />
      </div>
    </>
  );
};

export default HomePage;
