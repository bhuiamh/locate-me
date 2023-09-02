
import React, { useEffect, useState } from "react";
import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

const apiKey = process.env.SECRET_API_KEY;

export const LocationButton: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [locationData, setLocationData] = useState(null);
 
    const fetchLocationData = async () => {
      try {
        const response = await axios.get("https://ipinfo.io?token=6d7f7cd26a283f");
        const data = response.data;
        setLocationData(data);
      } catch (error) {
      }
    };


  const getLocation = () => {
    setIsLoading(true);

    setTimeout(() => {
    fetchLocationData();
      setIsLoading(false);
    }, 2000);
  };
  return (
    <div className="plasmo-flex plasmo-flex-col plasmo-items-center plasmo-justify-center plasmo-h-screen">
      <button
        className={`plasmo-p-3 plasmo-text-xl plasmo-h-[200px] plasmo-w-[200px] plasmo-rounded-full plasmo-bg-red-500 hover:plasmo-bg-red-700 plasmo-text-white ${
          isLoading ? "plasmo-hidden" : "plasmo-block"
        }`}
        onClick={getLocation}
        disabled={isLoading}
      >
        Show My Location
      </button>

      {isLoading && (
        <div className="plasmo-h-[200px] plasmo-text-xl plasmo-w-[200px] plasmo-rounded-full plasmo-bg-green-500 plasmo-flex plasmo-items-center plasmo-justify-center">
          Loading....
        </div>
      )}
      { locationData && (
        <div className="plasmo-text-black plasmo-mt-4 plasmo-text-center plasmo-text-xl">
          Your city is <span className="plasmo-font-bold">{locationData?.city}</span> and <br></br>country is <span className="plasmo-font-bold">{locationData?.country}</span>.
        </div>
      )}
    </div>
  );
};
