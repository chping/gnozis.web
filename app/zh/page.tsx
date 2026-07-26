import type { Metadata } from "next";
import LandingPage from "../landing-page";

export const metadata: Metadata = {
  title: "格知算存 | AI 驱动的 SRAM DTCO 工作台",
  description:
    "构建 SRAM DTCO 的智能层，以 AI 加速 SRAM 创新，将仿真、硅后数据与智能分析连接为统一的工程工作流。",
  applicationName: "格知算存",
  alternates: {
    canonical: "/zh/",
    languages: {
      en: "/",
      "zh-CN": "/zh/",
    },
  },
  openGraph: {
    type: "website",
    url: "/zh/",
    title: "格知算存 | AI 驱动的 SRAM DTCO 工作台",
    description:
      "构建 SRAM DTCO 的智能层，以 AI 加速 SRAM 创新，将仿真、硅后数据与智能分析连接为统一的工程工作流。",
    siteName: "格知算存",
  },
  twitter: {
    card: "summary_large_image",
    title: "格知算存 | AI 驱动的 SRAM DTCO 工作台",
    description:
      "构建 SRAM DTCO 的智能层，以 AI 加速 SRAM 创新，将仿真、硅后数据与智能分析连接为统一的工程工作流。",
  },
};

export default function ChineseHome() {
  return <LandingPage locale="zh" />;
}
