"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function LatestArticles({ blok }) {
  const card = blok.card || [];

  const categoryColors = {
    sales: "text-blue-500",
    product: "text-pink-500",
    marketing: "text-green-500",
    support: "text-purple-500",
    life: "text-green-500",
    engineering: "text-yellow-500",
    default: "text-aircall-grey-400",
  };

  return (
    <section className="bg-white py-18">
      <div className="text-left max-w-[311px] lg:max-w-[960px] lg:flex lg:items-center lg: justify-between mx-auto xl:flex xl:items-center xl:justify-between xl:max-w-[1140px] ">
        <div className="mx-auto max-w-[311px] lg:max-w-[960px] xl:max-w-[1140px] lg:grid lg:grid-cols-12 lg:gap-x-5">
          {card.map((article, index) => {
            const category = article.category?.toLowerCase();
            const categoryClass =
              categoryColors[category] || categoryColors.default;

            return (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="col-span-12 md:col-span-3 xl:col-span-3 flex flex-col gap-[14px]"
              >
                <Image
                  src={article.article_image?.filename}
                  alt={article.article_image?.alt || "Article Image"}
                  className="object-cover rounded-[5px]"
                  height={140}
                  width={280}
                />

                <div className="flex items-center gap-2 text-sm font-semibold uppercase">
                  <span className={categoryClass}>
                    {article.category_title}
                  </span>
                  {article.duration && (
                    <>
                      <div className="w-1 h-1 bg-aircall-grey-300 rounded-full" />
                      <span className="text-aircall-grey-300">
                        {article.duration}
                      </span>
                    </>
                  )}
                </div>

                <h3 className="text-xl text-left font-semibold text-aircall-grey-900 leading-[27px]">
                  {article.article_title}
                </h3>

                <p className="mb-10 text-left text-aircall-grey-500 text-medium leading-[24px]">
                  {article.article_description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
