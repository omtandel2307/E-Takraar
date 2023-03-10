import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormField from "../components/FormField";
import CustomButton from "../components/CustomButton";

const Form2 = () => {
  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value });
  };
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    sender_detail: "",
    user_detail: "",
    activity_description: "",
    activity_date: "",
    activity_proof: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <div className="">
      <div className="bg-[#e5e5e7] flex justify-center items-center flex-col  sm:p-10 p-4">
        {isLoading && "Loader..."}
        <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]">
          <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white">
            Register a Complaint
          </h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-full mt-[65px] flex flex-col gap-[30px]"
        >
          <div className="flex flex-wrap gap-[40px]">
            <FormField
              labelName="Sender Email/Phone Number *"
              placeholder="Enter the details about the sender"
              inputType="text"
              value={form.sender_detail}
              handleChange={(e) => handleFormFieldChange("sender_detail", e)}
            />
            <FormField
              labelName="Date of occurrence *"
              placeholder="End Date"
              inputType="date"
              value={form.activity_date}
              handleChange={(e) => handleFormFieldChange("activity_date", e)}
            />
          </div>
          <FormField
            labelName="Describe the activity *"
            placeholder="Write some information about the activity through which the relevant authorities can take necessary action"
            isTextArea
            value={form.activity_description}
            handleChange={(e) =>
              handleFormFieldChange("activity_description", e)
            }
          />
          <FormField
            labelName="Receiver Email/Phone Number *"
            placeholder="Enter the details about the receiver"
            inputType="text"
            value={form.user_detail}
            handleChange={(e) => handleFormFieldChange("user_detail", e)}
          />
          <div>
            <div class="flex items-center justify-center w-full">
              <label
                for="dropzone-file"
                class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    aria-hidden="true"
                    class="w-10 h-10 mb-3 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                  </svg>
                  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span class="font-semibold">Click to upload</span> or drag
                    and drop
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input id="dropzone-file" type="file" class="hidden" />
              </label>
            </div>
          </div>
          <div className="flex justify-center items-center mt-[40px]">
            <button
              onClick={handleSubmit}
              className="inline-flex items-center w-full px-5 py-3 mb-3 mr-1 text-base font-semibold text-white no-underline align-middle bg-blue-600 border border-transparent border-solid rounded-md cursor-pointer select-none sm:mb-0 sm:w-auto hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700"
            >
              Register complaint
              <svg
                class="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form2;
