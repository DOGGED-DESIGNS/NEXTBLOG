import React from "react";

async function getHalve(id: number) {
  const res = await fetch("http://local:400", {
    next: {
      revalidate: 60,
    },
  });

  return res.json;
}

interface paramspage {
  params: { id: number };
}

export default async function page({ params }: paramspage) {
  return <div> {params.id} </div>;
}
