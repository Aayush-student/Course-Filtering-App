import { useEffect, useState } from "react";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import { filterData, apiUrl } from "./data";
import Spinner from "./components/Spinner";
import React from "react";
import "./App.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await fetch(apiUrl);
        const output = await result.json();
        console.log("API output:", output);
        setCourses(output.data);
      } catch (error) {
        toast.error("Something is wrong!!");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Navbar />
      <Filter
        filterData={filterData}
        category={category}
        setCategory={setCategory}
      />
      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[60vh] pb-10">
        {loading ? <Spinner /> : <Cards courses={courses} category={category} />}
      </div>
      <ToastContainer position="top-right"  />
    </div>
  );
}

export default App;
