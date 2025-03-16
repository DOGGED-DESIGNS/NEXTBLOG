import React from "react";
import { Button } from "./ui/button";
import { ChevronDown, Menu } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="hidden max-sm:flex  items-center  py-2 ">
        <div className=" flex items-center mr-auto gap-2">
          <div className="">
            <p className=" font-bold">mage </p>
          </div>
          <p>doggedInsight</p>
        </div>

        <Button variant={"default"} size={"icon"}>
          <Menu />
        </Button>
      </nav>

      <nav className=" py-18 flex items-center justify-center  ">
        <div className=" flex items-center mr-auto gap-2">
          <div className="">
            <p className=" font-bold">mage </p>
          </div>
          <p>doggedInsight</p>
        </div>

        {/* all the links */}

        <div className=" m-auto  gap-60   flex  ">
          <Link
            href={"#"}
            className="  font-semibold font-popins 
           text-15
          "
          >
            {" "}
            Home{" "}
          </Link>
          <Link
            className="  font-semibold font-popins 
           text-15
          "
            href={"#"}
          >
            {" "}
            Tech{" "}
          </Link>
          <Link
            className="  font-semibold font-popins 
           text-15
          "
            href={"#"}
          >
            {" "}
            Engineering{" "}
          </Link>
          <Link
            className="flex font-semibold font-popins text-15 gap-2 items-center "
            href={"#"}
          >
            {" "}
            Solution <ChevronDown className=" font-semibold" />{" "}
          </Link>
        </div>

        <div className=" flex items-center gap-2">
          <Button variant={"outline"} size={"default"}>
            Get started
          </Button>

          <div className="h-10 w-10 bg-muted-foreground rounded-full "></div>
        </div>
      </nav>
    </>
  );
}
