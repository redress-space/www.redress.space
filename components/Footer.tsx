import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="md:absolute bottom-0  w-full flex justify-between z-150 py-3 px-4">
        {/* <div className="">
          <a
            className="font-medium text-black hover:text-gray-600  dark:hover:text-gray-200 hover:underline"
            href="mailto:info@redress.space"
          >
            Contact Us
          </a>

          <div>
              <a
                href="https://alpha.redress.space"
                className="font-medium text-black hover:text-gray-600  dark:hover:text-gray-200 hover:underline"
                target="_blank"
              >
                Demo
              </a>
            </div>

        </div> */}
        <div className="flex gap-x-6">
          <a
            className="font-medium text-black hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
            href="mailto:info@redress.space"
          >
            Contact Us
          </a>
          <a
            href="https://alpha.redress.space"
            className="font-medium text-black hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
          </a>
        </div>

        <div className="flex text-sm ">

          <div className="flex gap-x-6">
              <a
                className="group"
                aria-label="Redress on X"
                href="https://x.com/redress_ai_"
              >
                <svg
                  className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.3174 10.7749L19.1457 4H17.7646L12.7039 9.88256L8.66193 4H4L10.1122 12.8955L4 20H5.38119L10.7254 13.7878L14.994 20H19.656L13.3171 10.7749H13.3174ZM11.4257 12.9738L10.8064 12.0881L5.87886 5.03974H8.00029L11.9769 10.728L12.5962 11.6137L17.7652 19.0075H15.6438L11.4257 12.9742V12.9738Z"></path>
                </svg>
              </a>
              <a
                className="group"
                aria-label="Redress on LinkedIn"
                href="https://www.linkedin.com/company/redressspace/"
              >
                <svg
                  className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 20h-2.5v-10h2.5v10zm-1.25-11.25c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.25 11.25h-2.5v-5.5c0-1.38-1.12-2.5-2.5-2.5s-2.5 1.12-2.5 2.5v5.5h-2.5v-10h2.5v1.5c.69-1.19 2.09-2 3.5-2 2.21 0 4 1.79 4 4v6.5z"></path>
                </svg>
              </a>
            </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
