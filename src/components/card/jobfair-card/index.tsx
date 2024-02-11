import React from "react";
import Link from "next/link";

export default function JobfairCard(props: any) {
  const slugPath = `./jobfair/${props.data.title.replace(/\s+/g, "-").toLowerCase()}-${props.data.id.replace(/\s+/g, "-").toLowerCase()}`;
  return (
    <>
      <Link
        href={slugPath}
        className="block p-6 bg-white border border-gray-300 rounded-lg hover:border-teal-500 mb-4"
      >
        <div className="text-lg">{props.data.title}</div>
        <div
          className="text-sm"
          dangerouslySetInnerHTML={{ __html: props.data.description }}
        />
      </Link>
    </>
  );
}
