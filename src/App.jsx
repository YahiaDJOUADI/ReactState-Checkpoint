import { useState, useEffect } from "react";

export default () => {
  const [person] = useState({
    fullName: "Yahia Djouadi",
    bio: "A passionate developer with a love for technology and problem-solving.",
    imgSrc: "/IMG_3750.jpeg",
    profession: "Software Developer",
  });
  const [shows, setShows] = useState(false);
  const [mountedTime, setMountedTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setMountedTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(timer); 
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100 p-6">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8">
        Welcome to My Profile
      </h1>
      <button
        onClick={() => setShows(!shows)}
        className="px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-full shadow-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
      >
        {shows ? "Hide Profile" : "Show Profile"}
      </button>
      {shows && (
        <div className="mt-10 max-w-lg w-full bg-white rounded-3xl shadow-xl p-6 text-center">
          <img
            src={person.imgSrc}
            alt="Person"
            className="w-32 h-32 mx-auto rounded-full border-4 border-blue-200 shadow-md"
          />
          <h2 className="text-2xl font-bold text-gray-800 mt-4">{person.fullName}</h2>
          <p className="text-gray-500">{person.profession}</p>
          <p className="text-gray-600 mt-4">{person.bio}</p>
        </div>
      )}
      <p className="mt-8 text-gray-700 text-lg">
        Mounted for <span className="font-semibold">{mountedTime}</span> seconds
      </p>
    </div>
  );
};
