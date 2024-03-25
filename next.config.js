/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/Personal_Website",
  output: "export", // <=== enables static exports
  reactStrictMode: true,
  async rewrites() {
    return [
      { source: "/project_1", destination: "/projects/Project_1_movies.html" },
      { source: "/project_2", destination: "/projects/Project_2_dunedin.html" },
      { source: "/project_3", destination: "/projects/Project_3_mtg.html" },
      {
        source: "/project_4",
        destination: "/projects/Project_4_Stroop.html"
      },
      { source: "/project_5", destination: "/projects/Project_5_Enron.html" }
    ];
  }
};

export default nextConfig;
