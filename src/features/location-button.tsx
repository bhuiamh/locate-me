import React, { useState } from "react";

const LocationButton: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  const getLocation = () => {
    setIsLoading(true);

    // Simulating API call to get location data
    setTimeout(() => {
      // Assuming you have fetched country and city from an API
      setCountry("Sample Country");
      setCity("Sample City");
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="plasmo-h-[500px] plasmo-w-[500px] ">
      <button
        className="plasmo-bg-blue-500 plasmo-text-white plasmo-px-4 plasmo-py-2 plasmo-rounded"
        onClick={getLocation}
        disabled={isLoading}
      >
        Show my Location
      </button>
      {isLoading && <p className="mt-2">Loading....</p>}
      {!isLoading && country && city && (
        <div className="mt-2">
          Your country is {country} and city is {city}.
        </div>
      )}
    </div>
  );
};

export default LocationButton;
