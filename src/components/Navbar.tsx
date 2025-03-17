"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Variant, motion, AnimatePresence, easeInOut } from "framer-motion";
import { ChevronDown, Menu } from "lucide-react";
import Link from "next/link";
import Solutionhover from "./Solutionhover";

export default function Navbar() {
  const [hov, setHov] = useState<boolean>(false);
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
      {/* desktop nav */}
      <nav className=" max-sm:hidden  py-18 flex items-center justify-center  ">
        <div className=" flex items-center mr-auto gap-2">
          <div className="">
            <p className=" font-bold">mage </p>
          </div>
          <p>dogged Insight</p>
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
          <motion.div
            onHoverStart={() => {
              setHov(true);
            }}
            onHoverEnd={() => {
              setHov(false);
            }}
            className=" cursor-pointer flex relative font-semibold font-popins text-15 gap-2 items-center "
          >
            solutions{" "}
            <motion.div
              className="  "
              initial={{
                rotate: 0,
              }}
              transition={{
                bounceStiffness: 0,
                delay: 0.1,
              }}
              animate={
                hov
                  ? {
                      rotate: 180,
                    }
                  : {
                      rotate: 0,
                    }
              }
            >
              <ChevronDown className=" font-semibold" />
            </motion.div>
            <AnimatePresence>
              {hov && (
                <motion.div
                  initial={{
                    position: "absolute",
                    top: "-30px",
                    left: "0px",
                    opacity: 0,
                  }}
                  transition={{
                    delay: 0.3,
                    bounce: 0,
                    stiffness: 200,
                  }}
                  animate={{
                    top: "30px",
                    opacity: 1,
                  }}
                  exit={{
                    top: "-30px",
                    opacity: 0,
                  }}
                  className=" top-30 w-[300px] left-0 z-30 space-y-3 absolute bg-zinc-100 p-12 rounded-md border-2 border-zinc-400 "
                >
                  <Solutionhover />
                  <Solutionhover />
                  <Solutionhover />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
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
