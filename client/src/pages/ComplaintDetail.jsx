import React from "react";
import { useStateValue } from "../context/StateProvider";
import { useParams } from "react-router";
import Loader from "../components/Loader";

const ComplaintDetail = () => {
  const [{ complaints }, dispatch] = useStateValue();
  const { id } = useParams();

  const complaint = complaints?.find((complaint) => complaint.id === id);

  return complaint ? (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="grid gap-4 lg:grid-cols-5">
              <div className="order-last flex gap-4 lg:order-none lg:flex-col"></div>

              <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
                <img
                  src={complaint?.activity_imageURL}
                  alt="img"
                  className="h-full w-full object-cover object-center"
                />

                <span className="absolute left-0 top-0 rounded-br-lg bg-black px-3 py-1.5 text-sm uppercase tracking-wider text-white">
                  Photo Proof:
                </span>
              </div>
            </div>
            <div className="md:py-8">
              <div className="mb-2 md:mb-3">
                <span className="mb-0.5 inline-block text-gray-500">
                  {complaint?.activity_resolved ? "Resolved" : "Unresolved"}
                </span>
                <h2 className="text-2xl font-bold text-gray-800 lg:text-2xl">
                  Complaint Raised By: {complaint?.user_detail}
                </h2>
                <h2 className="text-2xl font-bold text-gray-800 lg:text-2xl mt-2">
                  Complaint Raised Against: {complaint?.sender_detail}
                </h2>
              </div>

              <div className="mb-4">
                <div className="flex items-end gap-2">
                  <span className="text-xl font-bold text-gray-500 mb-3 mt-3 md:text-2xl">
                    Date of occurence: {complaint?.activity_date}
                  </span>
                </div>

                <span className="text-sm text-gray-500">
                  <span className="font-bold">Complaint Description:</span>{" "}
                  {complaint?.activity_description}
                </span>
              </div>
              {/* <div className="mb-6 flex items-center gap-2 text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                    />
                  </svg>
  
                  <span className="text-sm">2-4 day shipping</span>
                </div> */}
              <div className="flex gap-2.5">
                <button className="inline-block flex-1 rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 sm:flex-none md:text-base">
                  Update Progress
                </button>

                <button className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">
                  Mark As Resolved
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="bg-white py-6 sm:py-8 lg:py-12">
          <div class="mx-auto max-w-screen-md px-4 md:px-8">
            <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl xl:mb-12">
              Progress Report
            </h2>

            <div class="mb-4 flex items-center justify-between border-t border-b py-4">
              <div class="flex flex-col gap-0.5">
                <span class="block font-bold">Total</span>

                <div class="-ml-1 flex gap-0.5"></div>

                <span class="block text-sm text-gray-500">
                  Bases on 27 reviews
                </span>
              </div>

              <a
                href="#"
                class="inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"
              >
                Write a progress report
              </a>
            </div>

            <div class="divide-y">
              <div class="flex flex-col gap-3 py-4 md:py-8">
                <div>
                  <span class="block text-sm font-bold">John McCulling</span>
                  <span class="block text-sm text-gray-500">
                    August 28, 2021
                  </span>
                </div>

                <p class="text-gray-600">
                  This is a section of some simple filler text, also known as
                  placeholder text. It shares some characteristics of a real
                  written text but is random or otherwise generated. It may be
                  used to display a sample of fonts or generate text for
                  testing.
                </p>
              </div>
              <div class="flex flex-col gap-3 py-4 md:py-8">
                <div>
                  <span class="block text-sm font-bold">Kate Berg</span>
                  <span class="block text-sm text-gray-500">July 21, 2021</span>
                </div>

                <p class="text-gray-600">
                  This is a section of some simple filler text, also known as
                  placeholder text. It shares some characteristics of a real
                  written text but is random or otherwise generated. It may be
                  used to display a sample of fonts or generate text for
                  testing.
                </p>
              </div>
              <div class="flex flex-col gap-3 py-4 md:py-8">
                <div>
                  <span class="block text-sm font-bold">Greg Jackson</span>
                  <span class="block text-sm text-gray-500">
                    March 16, 2021
                  </span>
                </div>

                <p class="text-gray-600">
                  This is a section of some simple filler text, also known as
                  placeholder text. It shares some characteristics of a real
                  written text but is random or otherwise generated. It may be
                  used to display a sample of fonts or generate text for
                  testing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex items-center justify-center h-screen">
      <Loader />
    </div>
  );
};

export default ComplaintDetail;
