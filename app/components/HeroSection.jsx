"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection({ blok }) {
  const { hero_title, sub_text, subscriptions = [], podcastImages = [] } = blok;

  const HeroImageCluster = ({ podcastImages }) => {
    return (
      <div className="grid grid-cols-12 lg:grid-cols-24 grid-rows-[repeat(50,minmax(0,20px))] lg:grid-rows-[repeat(24, minmax(0, 1fr))] max-w-[500px] h-[300px] lg:h-[500px] relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative lg:col-start-3 col-start-3 col-span-6 lg:h-[254px] lg:w-[254px] h-[168px] w-[168px] mx-auto bg-aircall-green rounded-xl overflow-hidden"
        >
          <Image
            src={podcastImages[1]?.podcast_image?.filename}
            alt={podcastImages[1]?.podcast_image?.alt}
            className=" h-full w-full rounded-[10px]"
            height={254}
            width={254}
          />
          <Image
            src={podcastImages[3]?.podcast_image?.filename}
            alt={podcastImages[3]?.podcast_image?.alt}
            className="mx-auto w-[150px] h-[130px] lg:h-[180px] lg:w-[200px] z-10 left-1/2 absolute top-1/2  -translate-x-1/2 -translate-y-1/2"
            height={180}
            width={200}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="col-start-1 col-span-3 z-10 lg:row-start-8 h-[100px] lg:col-end-3 w-[100px] lg:h-[150px] lg:w-[150px] mx-auto bg-aircall-green rounded-xl overflow-hidden -bottom-[80px] left-[-100px]"
          style={{ gridRowStart: "19" }}
        >
          <Image
            src={podcastImages[0]?.podcast_image?.filename}
            alt={podcastImages[0]?.podcast_image?.alt}
            className="h-full w-full rounded-[10px]"
            height={150}
            width={150}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="col-start-8 z-10 row-start-5 lg:col-start-8 h-[131px] w-[131px] lg:h-[200px] lg:w-[200px] mx-auto bg-aircall-green rounded-xl overflow-hidden -bottom-[60px] right-[-85px]"
          style={{ gridRowStart: "16" }}
        >
          <Image
            src={podcastImages[2]?.podcast_image?.filename}
            alt={podcastImages[2]?.podcast_image?.alt}
            className="w-full h-full"
            height={200}
            width={200}
          />
        </motion.div>
      </div>
    );
  };

  return (
    <section className="bg-gradient-to-b from-blue-50 to-transparent pt-[50px] lg:pt-[100px] px-6 ">
      <div className="mx-auto max-w-[310px] justify-between lg:max-w-[960px] xl:max-w-[1140px] lg:grid lg:grid-cols-2 gap-[1rem] items-center relative">
        <div className="lg:order-last order-first col-start-4 col-span-full">
          <HeroImageCluster podcastImages={podcastImages} />
        </div>

        <div className="mb-[50px] lg:mb-[200px] space-y-6 mx-auto text-left lg:w-[500px]">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl lg:text-5xl font-semibold text-black leading-tight"
          >
            {hero_title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <p className="text-md font-regular text-black">{sub_text}</p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-row justify-start"
            >
              {subscriptions.map((item, key) => (
                <div
                  key={key}
                  className="lg:p-3 lg:mr-0 mr-8 flex items-center gap-2 rounded-xl transition-all duration-200 hover:bg-aircall-grey-200 cursor-pointer"
                >
                  <img
                    src={item.icon?.filename}
                    alt={item.icon_name}
                    className="w-10 h-10 lg:w-8 lg:h-8"
                  />
                  <span className="lg:text-sm font-semibold text-aircall-grey-900 hidden lg:inline w-full">
                    {item.icon_name}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
