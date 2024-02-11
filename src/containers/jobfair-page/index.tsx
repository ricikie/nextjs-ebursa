import React from "react";
import JobfairCard from "@/components/card/jobfair-card";

const JobfairContainer = async (props: any) => {
  return (
    <div className="items-center mx-auto max-w-screen-xl pt-4">
      <div className="text-2xl mb-4">Halaman Jobfair</div>
    {props.res.data.map((jobfair: any) => {
      return (
        <JobfairCard key={jobfair.id} data={ jobfair }/>
      );
    })}
  </div>
  );
};

export default JobfairContainer;
