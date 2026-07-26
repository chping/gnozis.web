import type { NextConfig } from "next";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "gnozis.web";
const repositoryOwner = process.env.GITHUB_REPOSITORY_OWNER;
const isUserSite = repositoryOwner
  ? repositoryName === `${repositoryOwner}.github.io`
  : false;
const pagesBasePath =
  process.env.NEXT_PUBLIC_BASE_PATH ?? (isUserSite ? "" : `/${repositoryName}`);
const buildForGitHubPages = process.env.BUILD_GITHUB_PAGES === "true";

const nextConfig: NextConfig = buildForGitHubPages
  ? {
      output: "export",
      trailingSlash: true,
      basePath: pagesBasePath,
      assetPrefix: pagesBasePath,
      images: {
        unoptimized: true,
      },
      typescript: {
        tsconfigPath: "tsconfig.pages.json",
      },
    }
  : {};

export default nextConfig;
