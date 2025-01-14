import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const LandingFaq = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const questions: string[] = [
    "What is this app for",
    "How does it work",
    "is there a limit to the number of people in a group",
    "How do i get started",
    "can i settle balances through the app",
  ];
  return (
    <div className="py-5 flex flex-col justify-center items-center">
      <h3 className="text-2xl font-bold mb-3">
        Here are some answered questions
      </h3>
      <p className="font-medium mb-10">
        Find answers to common questions about CoSplitz in our FAQ section.
      </p>

      <div className=" w-full">
        <ol type="1">
          {questions.map((question, idx) => (
            <li key={idx} className="p-5 border border-solid border-gray">
              <section
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setSelected(idx)}
              >
                <div>
                  <span className="mr-3">{idx + 1}.</span>
                  <span>{question}</span>
                </div>
                <IoIosArrowDown
                  className={`${selected === idx ? "rotate-180" : ""}`}
                />
              </section>

              <section
                className={`transition-all duration-500 ease-in-out ${
                  selected === idx ? "block opacity-100" : "hidden opacity-0"
                }`}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Numquam quae possimus, architecto enim illum sapiente sequi
                doloremque iusto. Ut voluptas ad nesciunt illum consectetur
                laborum, dolorum minus assumenda distinctio beatae!
              </section>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default LandingFaq;


