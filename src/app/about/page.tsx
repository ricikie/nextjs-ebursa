import type { Metadata } from "next";
import AboutContainer from "@/containers/about-page";

export const metadata: Metadata = {
  title: "About Page",
  description: "lorem ipsum dolor sit amet.",
};

export default function AboutPage() {
  return (
    <>
      <AboutContainer />
    </>
  );
}
