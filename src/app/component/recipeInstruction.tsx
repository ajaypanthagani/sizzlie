"use client";

import React, { useEffect, useState } from "react";
import Recipe from "../model/recipe";
import { FaClock, FaBackward, FaForward } from "react-icons/fa";

export const RecipeInstruction: React.FC<{ recipe: Recipe }> = ({ recipe }) => {
    const [currentStep, setCurrentStep] = useState(0);

    const nextStep = () => {
      if (currentStep < recipe.instructions.length - 1) {
        setCurrentStep(currentStep + 1);
      }
    };
  
    const prevStep = () => {
      if (currentStep > 0) {
        setCurrentStep(currentStep - 1);
      }
    };

    console.log(recipe)
    const [activeTimer, setActiveTimer] = useState<number | null>(null);
    const [timeLeft, setTimeLeft] = useState<number | null>(null);

    const calculateTimeLeft = (endTime: number) => {
    const now = Date.now();
    return Math.max(0, Math.floor((endTime - now) / 1000));
    };

    const playAlarm = () => {
    const audio = new Audio("/alarm.mp3"); // Path to your alarm sound
    audio.play().catch((error) => console.error("Error playing alarm:", error));
    };

    const startTimer = (seconds: number, index: number) => {
    const endTime = Date.now() + seconds * 1000;
    localStorage.setItem(`timer_${index}`, endTime.toString());
    setActiveTimer(index);
    setTimeLeft(seconds);

    // Immediately start the countdown
    const interval = setInterval(() => {
        setTimeLeft(() => {
        const remaining = calculateTimeLeft(endTime);
        if (remaining > 0) {
            return remaining;
        } else {
            clearInterval(interval);
            setActiveTimer(null);
            localStorage.removeItem(`timer_${index}`);
            playAlarm(); // Play the alarm sound when the timer ends
            return null;
        }
        });
    }, 1000);
    };

    useEffect(() => {
    // Restore any active timers from localStorage on component mount
    const intervals: NodeJS.Timeout[] = [];

    recipe?.instructions.forEach((_, index) => {
        const storedEndTime = localStorage.getItem(`timer_${index}`);
        if (storedEndTime) {
        const endTime = parseInt(storedEndTime, 10);
        const remaining = calculateTimeLeft(endTime);

        if (remaining > 0) {
            setActiveTimer(index);
            setTimeLeft(remaining);

            // Start interval to update the countdown
            const interval = setInterval(() => {
            const newRemaining = calculateTimeLeft(endTime);
            if (newRemaining > 0) {
                setTimeLeft(newRemaining);
            } else {
                clearInterval(interval);
                localStorage.removeItem(`timer_${index}`);
                playAlarm(); // Play the alarm sound when the timer ends
                setActiveTimer(null);
                setTimeLeft(null);
            }
            }, 1000);

            intervals.push(interval);
        } else {
            localStorage.removeItem(`timer_${index}`);
        }
        }
    });

    // Cleanup intervals on unmount
    return () => {
        intervals.forEach(clearInterval);
    };
    }, [recipe]);

  return (
    <div className="z-0 p-4 fixed inset-0 h-screen bg-gray-100 overflow-y-auto">
      <div className="mt-32 lg:mt-16 md:mt-16 grid lg:grid-cols-2 gap-4 lg:p-10">
        {/* Video container spans two columns on large screens */}
        <div className="relative w-full col-span-1 pb-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-md"
            src={recipe.videoSrc}
            title="YouTube video player"
            allow="clipboard-write; encrypted-media; gyroscope;"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>

        <div className="carousel-container p-4 bg-gray-800 rounded-lg shadow-lg">
        {/* Step Display */}
        <div className="step-content text-center text-white h-40 overflow-auto-y">
          <h5 className="text-xl font-semibold mb-2">Step {recipe.instructions[currentStep].id}</h5>
          <h4>{recipe.instructions[currentStep].description}</h4>
        </div>

        {/* Carousel Controls */}
        <div className="flex justify-between mt-4">
        <button
        onClick={prevStep}
        disabled={currentStep === 0}
        className="bg-blue-500 text-white p-2 rounded-md disabled:opacity-50 transition-opacity w-12 h-12 flex items-center justify-center"
        >
        <FaBackward className="text-center" />
        </button>



          {recipe.instructions[currentStep].timer && (
                    <button
                    onClick={() => startTimer(recipe.instructions[currentStep].timer || 0, currentStep)}
                    disabled={activeTimer === currentStep}
                    className="ml-4 flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full disabled:bg-gray-400"
                    >
                    {activeTimer === currentStep ? (
                        <span>
                        {Math.floor(timeLeft! / 60)
                            .toString()
                            .padStart(2, "0")}
                        :
                        {(timeLeft! % 60).toString().padStart(2, "0")}
                        </span>
                    ) : (
                        <FaClock className="text-xl" />
                    )}
                    </button>
            )}


          <button
            onClick={nextStep}
            disabled={currentStep === recipe.instructions.length - 1}
            className="bg-blue-500 text-white p-2 rounded-md disabled:opacity-50 transition-opacity  w-12 h-12 text-center flex items-center justify-center"
          >
            <FaForward></FaForward>
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};
