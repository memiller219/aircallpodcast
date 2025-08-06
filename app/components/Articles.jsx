"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import LatestArticles from "./LatestArticles";
export default function Articles({ blok }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className="py-[50px]"
    >
      <div className="mx-auto max-w-[311px] lg:max-w-[960px] xl:max-w-[1140px]">
        <div className="flex items-center justify-between pb-8 ">
          <h2 className="text-2xl font-semibold text-black">{blok.title}</h2>
        </div>
      </div>
      <LatestArticles blok={blok} />
    </motion.div>
  );
}
