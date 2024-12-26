"use client";

import React, { useState, useEffect } from "react";
import Slider from "react-slick"; // For carousel
import { FaClock } from "react-icons/fa"; // For clock icon
import Recipe from "../model/recipe";


export const RecipeInstruction: React.FC<{recipe: Recipe}> = ({recipe}) => {
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

    if (!recipe) {
    return (
        <div>
        {/* <h1>Recipe with id: {recipe.id} not found</h1> */}
        </div>
    );
    }

    const carouselSettings = {
    dots: true,
    infinite: false,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    focusOnSelect: true,
    };

    return (
    <div className="z-0 p-4 fixed inset-0 bg-gray-100 overflow-y-auto">
        <div className="recipe-instructions-page mt-32 lg:mt-16 md:mt-16 p-5">
        <Slider {...carouselSettings} className="carousel-container">
            {recipe.instructions.map((instruction, index) => (
            <div
                key={index}
                className="carousel-item flex flex-col justify-center items-center relative"
            >
                <div className="instruction-video flex justify-center items-center mb-4 w-full">
                <video
                    controls
                    className="w-full sm:max-w-[60%] object-contain"
                    src={instruction.videoUrl}
                />
                </div>
                <div className="instruction-description flex justify-between items-center w-full p-4 bg-black bg-opacity-60 text-white rounded-md mt-auto">
                <div className="flex-1">
                    <h2 className="text-lg text-red-300">{`Step ${index + 1}`}</h2>
                    <h3 className="text-lg">{instruction.description}</h3>
                </div>
                {instruction.time && (
                    <button
                    onClick={() => startTimer(instruction.time || 0, index)}
                    disabled={activeTimer === index}
                    className="ml-4 flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full disabled:bg-gray-400"
                    >
                    {activeTimer === index ? (
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
                </div>
            </div>
            ))}
        </Slider>
        </div>
    </div>
    );
    }