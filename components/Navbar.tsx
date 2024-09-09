import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="container py-2 pb-8 px-28 pl-0 md:flex justify-between px-0">
      <h5 className="text-xl">Matching shoppers with clothes they need</h5>
      <div>
        {/* <h2 className="font-2xl text-bold">
          <Link href={"/about"}>About</Link>
        </h2> */}
      </div>
    </div>
  );

};

export default Navbar;
