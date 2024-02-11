import type { Metadata } from "next";
import JobfairContainer from "@/containers/jobfair-page";
import { getAllPublishedEvents } from "@/libs/clients/ebursa-api.client";

export const metadata: Metadata = {
  title: "Semua jobfair yang tersedia",
  description: "lorem ipsum dolor sit amet.",
};

const JobfairPage = async () => {
  const res = await getAllPublishedEvents()
  return (
    <>
      <JobfairContainer res={res.data}/>
    </>
  );
}

export default JobfairPage
