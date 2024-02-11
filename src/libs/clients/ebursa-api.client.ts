import { PublishedEvent } from "../shared/types/Published-event";

export const getAllPublishedEvents = async () => {
  let data: PublishedEvent[] | undefined = undefined;
  let isError = false;
  let error = "";
  
  try {
      const res = await fetch(
          `${process.env.NEXT_PUBLIC_DEV_API}/published-events`,
          {
            headers: {
              method: 'GET',
              Accept: 'application/json'
            }
          }
      );
      if (res) {
        data = await res.json();
        // console.log(data);
      }
  } catch (err) {
      // console.log(err);
  }

  return { data, isError, error };
};


export const getPublishedEvent = async (props: string) => {
  const id = props.slice(-36);
  
  let data: PublishedEvent | undefined = undefined;
  let isError = false;
  let error = "";

  try {
      const res = await fetch(
          `${process.env.NEXT_PUBLIC_DEV_API}/published-events/${id}`,
          {
            headers: {
              method: 'GET',
              Accept: 'application/json'
            }
          }
      );
      if (res) {
        data = await res.json();
        // console.log(data);
      }
  } catch (err) {
      // console.log(err);
  }

  return { data, isError, error };
};