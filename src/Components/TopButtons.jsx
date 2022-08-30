import React from "react";

const TopButtons = ({setQuery}) => {
  const cities = [
    {
      id: 1,
      title: "Lagos",
    },
    {
      id: 2,
      title: "Johannesburg",
    },
    {
      id: 3,
      title: "Paris",
    },
    {
      id: 4,
      title: "Texas",
    },
    {
      id: 5,
      title: "Beijing",
    },
  ];

  return (
    <div className="flex items-center flex-wrap justify-around my-6">
      {cities.map((city) => {
        const { id, title } = city;
        return (
          <button
            key={id}
            className="text-white text-lg font-medium mx-2"
            onClick={() => setQuery({ q: city.title })}
          >
            {title}
          </button>
        );
      })}
    </div>
  );
};

export default TopButtons;
