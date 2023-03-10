import React from "react";
import { Link } from "react-router-dom";
import { heroimg } from "../assets";

const Home = () => {
  return (
    <div>
      <div class="bg-white pb-6 sm:pt-8 lg:pt-6">
        <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <section class="flex flex-col lg:flex-row justify-between gap-6 sm:gap-10 md:gap-16">
            <div class="xl:w-5/12 flex flex-col justify-center sm:text-center lg:text-left lg:py-12 xl:py-24">
              <p class="text-indigo-500 md:text-lg xl:text-xl font-semibold mb-4 md:mb-6">
                Empower Yourself
              </p>

              <h1 class="text-black text-black-800 text-4xl sm:text-5xl md:text-6xl font-bold mb-8 md:mb-12">
                Your voice matters! Report your complaint today!
              </h1>

              <p class="lg:w-4/5 text-gray-500 xl:text-lg leading-relaxed mb-8 md:mb-12">
                Save millions of women from internet harassment and hate by
                reporting a crime.
              </p>

              <div class=" flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5">
                <Link
                  to="/usemodel"
                  class="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
                >
                  Use Model
                </Link>
                <Link
                  to="/registercomplaint"
                  class="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
                >
                  Register a Complaint
                </Link>
              </div>
            </div>
            <div class="xl:w-5/12 h-48 lg:h-auto bg-gray-100 overflow-hidden shadow-lg rounded-lg">
              <img
                src={heroimg}
                loading="lazy"
                alt="Photo by Fakurian Design"
                class="w-full h-full object-cover object-center"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
