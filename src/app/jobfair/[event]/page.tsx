import type { Metadata } from "next";
import { getPublishedEvent } from "@/libs/clients/ebursa-api.client";

export async function generateMetadata({
  params,
}: {
  params: { event: string };
}): Promise<Metadata> {
  const event = await getPublishedEvent(params.event);
  return {
    title: event?.data?.data?.title,
    description: event?.data?.data?.description,
  };
}

const JobfairDetailPage = async ({ params }: { params: { event: string } }) => {
  const res = await getPublishedEvent(params.event);

  return (
    <>
      <div className="items-center mx-auto max-w-screen-xl pt-4">
        Halaman Detail
        <p>{res.data?.data.title}</p>
      </div>
    </>
  );
};

export default JobfairDetailPage;
