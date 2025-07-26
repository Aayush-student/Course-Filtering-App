import React, { useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

function Card({ course, likedCourses, setLikedCourses }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const clickHandler = () => {
    if (likedCourses.includes(course.id)) {
      setLikedCourses((prev) => prev.filter((id) => id !== course.id));
      toast.warning("Like removed");
    } else {
      setLikedCourses((prev) => [...prev, course.id]);
      toast.success("Liked successfully");
    }
  };

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div className="w-[300px] bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-all duration-300 border border-gray-700">
      <div className="relative">
        <img
          src={course.image.url}
          className="w-full h-[180px] object-cover"
          alt={course.title}
        />
        <div className="w-[40px] h-[40px] flex justify-center items-center absolute right-3 bottom-3 bg-white rounded-full shadow-md">
          <button onClick={clickHandler}>
            {likedCourses.includes(course.id) ? (
              <FcLike fontSize="1.75rem" />
            ) : (
              <FcLikePlaceholder fontSize="1.75rem" />
            )}
          </button>
        </div>
      </div>
      <div className="p-4">
        <p className="text-white font-bold text-lg leading-6 mb-2 truncate">
          {course.title}
        </p>
        <p className="text-sm text-gray-300 leading-5 mb-1">
          {isExpanded
            ? course.description
            : course.description.length > 100
            ? course.description.substring(0, 100) + "..."
            : course.description}
        </p>
        {course.description.length > 100 && (
          <button
            className="text-blue-400 hover:underline text-sm font-medium"
            onClick={toggleExpand}
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        )}
      </div>
    </div>
  );
}

export default Card;
