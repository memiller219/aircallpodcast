"use client";
import { ChevronDown } from "lucide-react";

export default function TopNav({ blok }) {

  return (
    <div className="bg-white border-b border-gray-100 hidden lg:block">
      <div className="max-w-[960px] mx-auto pb-1 -mt-3 xl:max-w-[1140px] flex items-center justify-end text-sm text-gray-600">
        <div className="flex gap-8">
          <span>{blok.phone_number}</span>
          <span>{blok.contact_us}</span>
        </div>
        <div className="pl-6 flex items-center gap-2">
          <button className="border border-aircall-green text-aircall-green px-4 py-1 rounded font-semibold">
            {blok.login_text}
          </button>
          <button className="flex items-center gap-2 border border-gray-300 px-3 py-1 rounded">
            {blok.language_code} <ChevronDown className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
}
