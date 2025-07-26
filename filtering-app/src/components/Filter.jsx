import React from "react";

const Filter = ({ category, setCategory, filterData }) => {
  const filterHandler = (title) => {
    setCategory(title);
  };

  return (
    <div className="w-11/12 mx-auto flex flex-wrap justify-center gap-3 py-6">
      {filterData.map((data) => (
        <button
          key={data.id}
          className={`
            text-sm md:text-base px-4 py-2 rounded-full font-semibold border-2 transition-all duration-300
            ${
              category === data.title
                ? "bg-white text-black border-white"
                : "bg-gray-900 text-white border-gray-600 hover:bg-gray-700"
            }
          `}
          onClick={() => filterHandler(data.title)}
        >
          {data.title}
        </button>
      ))}
    </div>
  );
};

export default Filter;
