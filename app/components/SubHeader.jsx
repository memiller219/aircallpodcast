// "use client";

// import { ChevronDown, Search } from "lucide-react";
// import Link from "next/link";
// import { useState } from "react";

// export default function SubHeader({ blok }) {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="bg-aircall-grey-100">
//       <div className="max-w-[311px] mx-auto py-12 md:max-w-[700px] lg:max-w-[960px] xl:max-w-[1140px]">
//         <div className="hidden lg:flex lg:justify-between items-center space-x-10">
//           <div className=" max-w-[311px] mx-auto md:max-w-[700px] lg:max-w-[960px] xl:max-w-[1140px] hidden lg:flex justify-center items-center space-x-10 text-aircall-grey-500">
//             {blok.nav_item.map((item) =>
//               item.type === "link" ? (
//                 <Link
//                   key={item._uid}
//                   href={item.url}
//                   className="hover:text-emerald-500"
//                 >
//                   {item.label}
//                 </Link>
//               ) : (
//                 <div key={item._uid} className="relative group cursor-pointer">
//                   <span className="hover:text-emerald-500 flex items-center gap-1">
//                     {item.label}
//                     {item.type[0] !== "link" && (
//                       <ChevronDown className="w-3 h-3 opacity-50" />
//                     )}
//                   </span>
//                 </div>
//               )
//             )}
//           </div>
//           <div className="flex lg:hidden justify-between items-center">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-aircall-grey-500 font-regular"
//             >
//               Rechercher
//             </button>

//             <Search className="w-6 h-6 text-aircall-green cursor-pointer mr-8" />
//           </div>
//           {isOpen && (
//             <div className="mt-4 space-y-2 md:hidden text-aircall-grey-500">
//               {blok.nav_item.map((item) => {
//                 const isActive =
//                   item.url === "/podcast" && currentPath.startsWith("/podcast");

//                 return item.type === "link" ? (
//                   <Link
//                     key={item._uid}
//                     href={item.url}
//                     className={`block hover:text-emerald-500 ${
//                       isActive ? "font-bold text-black" : ""
//                     }`}
//                   >
//                     {item.title}
//                   </Link>
//                 ) : (
//                   <div key={item._uid} className="cursor-pointer">
//                     {item.title}
//                   </div>
//                 );
//               })}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { ChevronDown, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function SubHeader({ blok }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // ✅ App Router method

  return (
    <div className="bg-aircall-grey-100">
      <div className="max-w-[311px] mx-auto py-12 md:max-w-[700px] lg:max-w-[960px] xl:max-w-[1140px]">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:justify-between items-center space-x-10">
          <div className="max-w-[311px] mx-auto md:max-w-[700px] lg:max-w-[960px] xl:max-w-[1140px] flex justify-center items-center space-x-10 text-aircall-grey-500">
            {blok.nav_item.map((item) => {
              const isActive = pathname.startsWith(item.url);

              return item.type === "link" ? (
                <Link
                  key={item._uid}
                  href={item.url}
                  className={`hover:text-emerald-500 ${
                    isActive ? "font-bold text-black" : ""
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <div key={item._uid} className="relative group cursor-pointer">
                  <span className="hover:text-emerald-500 flex items-center gap-1">
                    {item.label}
                    <ChevronDown className="w-3 h-3 opacity-50" />
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Toggle Button */}
        <div className="flex lg:hidden justify-between items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-aircall-grey-500 font-regular"
          >
            Rechercher
          </button>
          <Search className="w-6 h-6 text-aircall-green cursor-pointer mr-8" />
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="mt-4 space-y-2 md:hidden text-aircall-grey-500">
            {blok.nav_item.map((item) => {
              const isActive = pathname.startsWith(item.url);

              return item.type === "link" ? (
                <Link
                  key={item._uid}
                  href={item.url}
                  className={`block hover:text-emerald-500 ${
                    isActive ? "font-bold text-black" : ""
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <div key={item._uid} className="cursor-pointer">
                  {item.label}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
