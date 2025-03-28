import { ArrowUp } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function SpreadCard({
  name,
  date,
}: {
  name: string;
  date: string;
}) {
  return (
    <>
      <div className="flex h-auto   max-sm:mt-20 flex-row gap-2 max-sm:block">
        <Link
          href={"#"}
          className=" block  shrink-0 overflow-hidden  h-auto w-[300px] max-sm:w-full    "
        >
          <img
            src="/pexels-polina-tankilevitch-4440572.jpg"
            alt="blogimg"
            className=" h-full w-full object-cover  "
          />
        </Link>
        <div className=" h-auto">
          <p className="  text-muted-foreground font-popins max-sm:mt-20 text-xs font-bold  ">
            {name}. {date}{" "}
          </p>
          <div className=" gap-4   items-center flex flex-row">
            <Link
              href={"#"}
              className=" block line-clamp-1 lg:line-clamp-2 max-sm:mt-12 md:mt-12 md:text-15 text-18 font-bold font-popins"
            >
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              nemo dignissimos recusandae.{" "}
            </Link>

            <ArrowUp className=" rotate-45 shrink-0  ml-auto" />
          </div>

          <p className=" line-clamp-4  mt-12 text-sm font-montserrat ">
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
            quam rerum inventore officiis volupt Lorem ipsum dolor sit amet
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
            deserunt! Animi cupiditate, quasi sequi voluptatibus quod modi esse
            voluptate nostrum.
          </p>
          <div className=" flex flex-row  mt-12 gap-2">
            <div className=" text-sm font-bold  capitalize p-2 border-2 border-zinc-800 rounded-full">
              engineering
            </div>
            <div className=" border-2 text-sm  font-bold capitalize border-1 border-zinc-800 p-2 rounded-full">
              tech
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
