"use client";

import Image from "next/image";

export default function ReleasesCard({ info }) {
  const hasSeason = !!info.releasedInfo_season;
  const hasDuration = !!info.releasedInfo_duration;
  const hasTitle = !!info.podcast_title;
  const hasCardContent = hasSeason && hasDuration && hasTitle;

  return (
    <div
      className={`relative group ${
        hasCardContent ? "cursor-pointer" : "cursor-default"
      }`}
    >
      {hasCardContent && (
        <div className="absolute -inset-4 rounded-2xl bg-gray-50 opacity-0 group-hover:opacity-100 transition-all duration-300 z-0" />
      )}

      <div className="relative z-10 rounded-xl">
        <div
          className={`${
            hasCardContent ? "shadow-xl" : ""
          } relative overflow-hidden rounded-xl transition duration-300`}
        >
          <Image
            src={info.card_image?.filename}
            alt="podcast"
            height={200}
            width={200}
            className={`w-full aspect-square object-cover transition duration-300 ${
              hasCardContent ? "group-hover:brightness-75" : ""
            }`}
          />

          {hasCardContent && (
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <div className="flex items-center justify-center">
                <Image
                  src={info.play_hover?.filename}
                  alt="Play"
                  className="w-25 h-25"
                   height={100}
            width={100}
                />
              </div>
            </div>
          )}
        </div>

        <div className="space-y-4 mt-4">
          <div className="flex items-center gap-2 text-aircall-grey-300 text-sm font-semibold uppercase h-5">
            {hasSeason ? (
              <span>{info.releasedInfo_season}</span>
            ) : (
              <div className="w-[50%] my-2 h-7 bg-[#F1F3F8] rounded-[5px]" />
            )}
            {hasSeason && hasDuration && (
              <>
                <div className="w-1 h-1 bg-aircall-grey-300 rounded-full" />
                <span>{info.releasedInfo_duration}</span>
              </>
            )}
          </div>

          {hasTitle ? (
            <h3 className="text-xl text-left font-semibold text-aircall-grey-900 leading-tight min-h-[28px]">
              {info.podcast_title}
            </h3>
          ) : (
            <div className="h-7 bg-[#F1F3F8] rounded-[5px] w-[90%]" />
          )}

          {hasTitle && (
            <button className="flex items-center gap-2 text-black mt-2 cursor-pointer">
              <div className="w-6 h-6 bg-aircall-green/15 rounded-full flex items-center justify-center">
                <Image src={info.playButton?.filename} alt="Play"  height={20}
            width={20}/>
              </div>
              <span className="font-medium">Listen Now</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
