import styles from "./projects.module.css";
import ProjectCard from "../../components/cards/projects/ProjectCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  openGraph: {
    type: "website",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/privacy`
    // images: [
    //   {
    //     url: process.env.NEXT_PUBLIC_DEFAULT_IMAGE_URL || "",
    //     width: 1200,
    //     height: 600,
    //     alt: "JOSH_FOLSOM"
    //   }
    //]
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/privacy`
  }
};

const ProjectsPage = () => {
  const projects = [
    {
      title: "Movie Ratings Exploration in Jupyter",
      path: "/project_1",
      image: "/projects/Project_1_screenshot.png",
      description:
        "By taking a dataset of movies, can I discover a meaninful shift in average popularity, as the years of release changes. As a bonus question: what factors have the greatest impact on popularity?"
    },
    {
      title: "Dunedin New Zealand Exploration in Jupyter",
      path: "/project_2",
      image: "/projects/Project_2_screenshot.png",
      description:
        "By taking some open-source map data about new zealand, what general exploration, and sanitation can I perform? What can I observe based on the data? Is there any suggestions I can make to improve the usability of the data in it's raw form?"
    },
    {
      title: "Magic the gathering Exploration in RStudio",
      path: "/project_3",
      image: "/projects/Project_3_screenshot.png",
      description:
        "What Univariate, Bivariate, and Multivariate exploration can I perform on a dataset of ~40,000 Magic: The Gathering cards? Can I show the average viewer some visualizations that are able to convey a message, or prove a point?"
    },
    {
      title: "Stroop Effect Exploration in RStudio",
      path: "/project_4",
      image: "/projects/Project_4_screenshot.png",
      description:
        "In a Stroop task, participants are presented with a list of words, with each word displayed in a color of ink. The participant’s task is to say out loud the color of the ink in which the word is printed. The task has two conditions: a congruent words condition, and an incongruent words condition. In the congruent words condition, the words being displayed are color words whose names match the colors in which they are printed: for example RED, BLUE. In the incongruent words condition, the words displayed are color words whose names do not match the colors in which they are printed: for example PURPLE, ORANGE. In each case, we measure the time it takes to name the ink colors in equally-sized lists. Each participant will go through and record a time from each condition. Given the data provided, Can I answer the 5 questions provided?"
    },
    {
      title: "Enron Fraud machine Learning in Jupyter",
      path: "/project_5",
      image: "/projects/Project_5_screenshot.png",
      description:
        'Can I use machine learning in order to find "people of interest"; i.e. given what was already established as someone engaged in fraud, can I train my code to recognize, and flag, other potential high-risk individuals?'
    },
    {
      title: "Barista Bots",
      path: "https://baristabots.wixsite.com/game",
      image: "/projects/barista_bots_image.png",
      description:
        "This was a student project that I joined as a volunteer developer."
    },
    {
      title: "Block Runner",
      path: "https://balthius.itch.io/block-runner",
      image: "/projects/block_runner_image.png",
      description:
        "Game created in Unity to showcase fundamental understanding without leaning on any tutorials."
    }
  ];

  return (
    <div className={`${styles.container} ${styles.links} `}>
      {projects.map((project) => (
        <ProjectCard key={project.title} item={project}></ProjectCard>
      ))}
    </div>
  );
};

export default ProjectsPage;
