"use client";

export default function Footer({ blok }) {
  const columns = blok.columns || [];

  return (
    <>
      <div className="pt-40 border-b border-gray-200" />
      <div className="max-w-[311px] mx-auto flex items-center py-8 lg:max-w-[960px] xl:max-w-[1140px]">
        <img
          src={blok.logo?.filename}
          alt="Footer Logo"
          className="w-8 h-8 mr-5"
        />
        <p className="text-sm text-left text-aircall-grey-800">
          {blok.description}
        </p>
      </div>
      <footer className="bg-aircall-grey-100 py-8 text-aircall-grey-900">
        <div className="max-w-[311px] mx-auto lg:max-w-[960px] xl:max-w-[1140px] lg:flex lg:justify-between">
          {columns.map((column, idx) => (
            <div key={idx} className="col-span-4 md:col-span-2">
              <h4 className="font-semibold text-left text-gray-300 text-sm uppercase my-5">
                {column.title}
              </h4>
              <ul className="text-left text-aircall-grey-300 font-light space-y-2 text-sm border-b border-gray-200 lg:border-none pb-6">
                {column.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.url}
                      className="text-aircall-grey-500 hover:text-aircall-green transition"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t lg:justify-between justify-around border-gray-200 mt-16 lg:pt-4 max-w-[311px] lg:max-w-[960px] xl:max-w-[1140px] mx-auto flex flex-wrap gap-4 md:flex-row items-center font-thin text-sm text-gray-400">
          <div className="flex gap-4">
            &copy; Aircall
            <span className="flex gap-4 md:mt-0">
              {blok.footer_links.map((item, i) => (
                <a key={i} href={item.url} className="hover:text-aircall-green">
                  {item.label}
                </a>
              ))}
            </span>
          </div>

          <div className="flex item-center gap-2  ">
            <button className="w-6 h-6 bg-gray-200 rounded-[8px] flex items-center justify-center">
              <svg
                className="w-3 h-3 text-aircall-grey-900 opacity-40"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.23 5.924a8.212 8.212 0 01-2.357.646 4.115 4.115 0 001.804-2.27 8.221 8.221 0 01-2.606.996 4.103 4.103 0 00-6.991 3.742 11.647 11.647 0 01-8.457-4.287 4.103 4.103 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84c7.547 0 11.675-6.252 11.675-11.675 0-.178-.004-.355-.012-.53A8.348 8.348 0 0024 5.924z" />
              </svg>
            </button>
            <button className="w-6 h-6 bg-gray-200  rounded-[8px] flex items-center justify-center">
              <svg
                className="w-3 h-3 text-aircall-grey-900 opacity-40"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </button>
            <button className="w-6 h-6 bg-gray-200 rounded-[8px] flex items-center justify-center">
              <svg
                className="w-3 h-3 text-aircall-grey-900 opacity-40"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}
