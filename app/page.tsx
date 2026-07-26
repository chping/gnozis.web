import type { Metadata } from "next";
import LandingPage from "./landing-page";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      "zh-CN": "/zh/",
    },
  },
};

export default function Home() {
  return <LandingPage locale="en" />;
}
