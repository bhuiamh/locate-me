import React, { useState } from "react";

export const LocationButton: React.FC = () => {
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
    <div className="plasmo-flex plasmo-flex-col plasmo-items-center plasmo-justify-center plasmo-h-screen">
    <button
      className={`plasmo-w-24 h-24 plasmo-rounded-full plasmo-bg-red-500 plasmo-text-white ${
        isLoading ? "plasmo-hidden" : "plasmo-block"
      }`}
      onClick={getLocation}
      disabled={isLoading}
    >
      Show my Location
    </button>
    {isLoading && (
      <div className="plasmo-w-24 h-24 plasmo-rounded-full plasmo-bg-green-500 plasmo-flex plasmo-items-center plasmo-justify-center">
        Loading....
      </div>
    )}
    {!isLoading && country && city && (
      <div className="plasmo-mt-4 plasmo-text-center">
        Your country is {country} and city is {city}.
      </div>
    )}
  </div>
  );
};
