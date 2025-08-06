"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, Star, Tag, ChevronDown } from "lucide-react";
import ReleasesCard from "./ReleaseCard";

export default function Releases({ blok }) {
  const [sortOption, setSortOption] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const options = [
    { label: "Date", value: "date", icon: <Calendar className="w-4 h-4" /> },
    {
      label: "Most Popular",
      value: "popular",
      icon: <Star className="w-4 h-4" />,
    },
    { label: "Category", value: "category", icon: <Tag className="w-4 h-4" /> },
  ];

  const selected = options.find((opt) => opt.value === sortOption);

  return (
    <>
      <div className="lg:-mt-[50px] text-left max-w-[311px] lg:max-w-[960px] lg:flex lg:items-center lg: justify-between mx-auto xl:flex xl:items-center xl:justify-between xl:max-w-[1140px]">
        <h2 className="text-xl font-semibold text-black">
          The latest releases
        </h2>

        <div className="relative flex items-center gap-3">
          {selected && (
            <button className="flex items-center gap-12 bg-aircall-grey-200 px-4 py-2 rounded cursor-pointer">
              {selected.label}
              {selected.icon}
            </button>
          )}

          <div className="w-[136px]  py-4">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="bg-aircall-grey-200 px-4 justify-between items-center gap-8 flex py-2 rounded cursor-pointer"
            >
              Sort By
              <ChevronDown className="w-4 h-4" />
            </button>

            {showDropdown && (
              <div className="right-0 mt-2 w-40 rounded-lg border bg-white shadow-lg z-50">
                {options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      setSortOption(option.value);
                      setShowDropdown(false);
                    }}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 flex justify-between gap-2"
                  >
                    {option.label}
                    {option.icon}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-[311px] lg:max-w-[960px] xl:max-w-[1140px] lg:grid lg:grid-cols-12 lg:gap-x-5"
      >
        {blok.card.map((cardInfo, index) => (
          <div
            key={index}
            className="py-5 lg:grid-span-2 md:col-span-4 xl:col-span-3"
          >
            <ReleasesCard info={cardInfo} />
          </div>
        ))}
      </motion.div>
    </>
  );
}
