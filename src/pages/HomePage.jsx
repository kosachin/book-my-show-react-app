import React from "react";

// Components
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";

const HomePage = () => {
    return(
    <>
        <div class="container mx-auto px-4">
            <h1 className="text-xl font-bold text-gray-800 my-3">The best of Entertainment</h1>
            <EntertainmentCardSlider />
        </div>
    </>
    );
};

export default HomePage; 