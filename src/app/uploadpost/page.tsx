import MaxwidthWrapper from "@/components/MaxwidthWrapper";
import React from "react";

export default function page() {
  return (
    <>
      <MaxwidthWrapper>
        <h2 className=" lg:text-36 md:text-24 sm:text-18  font-bold font-popins text-zinc-900 text-center mt-107">
          Make a posts
        </h2>

        {/* this is the form area */}

        <div className=" mt-60">
          {/* this is the tags */}
          <div className=" border m-auto max-w-sm">
            <h2 className=" mb-20"> Tags </h2>
            <div className=" flex gap-3">
              <button className=" p-3 rounded-lg border-1 border-purple-800 text-purple-800 font-popins ">
                {" "}
                Technologies{" "}
              </button>
              <button className=" p-3 rounded-lg border-1 border-purple-800 text-purple-800 font-popins ">
                {" "}
                Engineering{" "}
              </button>
              <button className=" p-3 rounded-lg border-1 border-purple-800 text-purple-800 font-popins ">
                {" "}
                Solutions{" "}
              </button>
            </div>
          </div>
        </div>
      </MaxwidthWrapper>
    </>
  );
}
