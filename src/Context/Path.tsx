import React, { useState, useEffect, createContext, useContext } from "react";

// Define the type for the travel data

interface MyChild {
  children: React.ReactNode;
}

// Create a context to hold the fetched data
const TravelDataContext = createContext<[] | null>(null);

// Define a context provider component
const TravelDataProvider = ({ children }: MyChild) => {
  const [travelData, setTravelData] = useState<[] | null>(null);

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./TravelReport.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setTravelData(jsonData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    // Clean up function
    return () => {
      setTravelData(null); // Reset travelData when component unmounts
    };
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <TravelDataContext.Provider value={travelData}>
      {children}
    </TravelDataContext.Provider>
  );
};

// Custom hook to access the travel data
const useTravelData = () => useContext(TravelDataContext);

export { TravelDataProvider, useTravelData };
