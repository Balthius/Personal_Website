"use client";
import styles from "./skills.module.css";
import GridItem from "../../components/cards/skillitems/skillitem";

import { useState } from "react";

//   @* https://devicon.dev *@

const skills = [
  {
    name: "Android",
    icon: "devicon-android-plain",
    rank: "novice"
  },
  {
    name: "ASP.NET Core",
    icon: "devicon-dotnetcore-plain",
    rank: "adept"
  },
  {
    name: "Azure",
    icon: "devicon-azure-plain",
    rank: "novice"
  },
  {
    name: "Anaconda",
    icon: "devicon-anaconda-original",
    rank: "adept"
  },
  {
    name: "Bash",
    icon: "devicon-bash-plain",
    rank: "novice"
  },
  {
    name: "Bootstrap",
    icon: "devicon-bootstrap-plain",
    rank: "comfortable"
  },
  {
    name: "C",
    icon: "devicon-c-plain",
    rank: "comfortable"
  },
  {
    name: "C#",
    icon: "devicon-csharp-plain",
    rank: "adept"
  },
  {
    name: "C++",
    icon: "devicon-cplusplus-plain",
    rank: "comfortable"
  },
  {
    name: "Caliburn Micro",
    icon: "",
    rank: "novice"
  },
  {
    name: "Chrome Dev Tools",
    icon: "devicon-chrome-plain",
    rank: "comfortable"
  },
  {
    name: "Codepen",
    icon: "devicon-codepen-plain",
    rank: "novice"
  },
  {
    name: "CSS3",
    icon: "devicon-css3-plain",
    rank: "adept"
  },
  {
    name: "Docker",
    icon: "devicon-docker-plain",
    rank: "novice"
  },
  {
    name: ".NET",
    icon: "devicon-dot-net-plain",
    rank: "adept"
  },
  {
    name: "Firefox Dev Tools",
    icon: "devicon-firefox-plain",
    rank: "comfortable"
  },
  {
    name: "Flask",
    icon: "devicon-flask-original",
    rank: "adept"
  },
  {
    name: "GIMP",
    icon: "devicon-gimp-plain",
    rank: "comfortable"
  },
  {
    name: "Git",
    icon: "devicon-git-plain",
    rank: "novice"
  },
  {
    name: "Github",
    icon: "devicon-github-plain",
    rank: "comfortable"
  },
  {
    name: "GitHub Actions",
    icon: "devicon-githubactions-plain",
    rank: "novice"
  },
  {
    name: "Google",
    icon: "devicon-google-plain",
    rank: "expert"
  },
  {
    name: "HTML5",
    icon: "devicon-html5-plain",
    rank: "adept"
  },
  {
    name: "javascript",
    icon: "devicon-javascript-plain",
    rank: "comfortable"
  },
  {
    name: "Jupyter Notebooks",
    icon: "devicon-jupyter-plain",
    rank: "adept"
  },
  {
    name: "Jupyter Labs",
    icon: "devicon-jupyter-plain-wordmark",
    rank: "adept"
  },
  {
    name: "MongoDB",
    icon: "devicon-mongodb-plain",
    rank: "novice"
  },
  {
    name: "Microsoft Office",
    icon: "",
    rank: "adept"
  },
  {
    name: "Microsoft Excel",
    icon: "",
    rank: "adept"
  },
  {
    name: "MSSQL",
    icon: "devicon-microsoftsqlserver-plain",
    rank: "adept"
  },
  {
    name: "MySQL",
    icon: "devicon-mysql-plain",
    rank: "comfortable"
  },
  {
    name: "Node.js",
    icon: "devicon-nodejs-plain",
    rank: "comfortable"
  },
  {
    name: "npm",
    icon: "devicon-npm-original-wordmark",
    rank: "comfortable"
  },
  {
    name: "Nuget",
    icon: "devicon-nuget-original",
    rank: "comfortable"
  },
  {
    name: "Numpy",
    icon: "devicon-numpy-plain",
    rank: "comfortable"
  },
  {
    name: "PowerBI",
    icon: "",
    rank: "comfortable"
  },
  {
    name: "Postgres",
    icon: "devicon-postgresql-plain",
    rank: "comfortable"
  },
  {
    name: "Adobe Photoshop",
    icon: "devicon-photoshop-plain",
    rank: "comfortable"
  },
  {
    name: "Python3",
    icon: "devicon-python-plain",
    rank: "adept"
  },
  {
    name: "R Studio",
    icon: "devicon-rstudio-plain",
    rank: "comfortable"
  },
  {
    name: "React",
    icon: "devicon-react-original",
    rank: "novice"
  },
  {
    name: "Slack",
    icon: "devicon-slack-plain",
    rank: "adept"
  },
  {
    name: "Next.js",
    icon: "devicon-nextjs-original-wordmark",
    rank: "comfortable"
    // devicon-nextjs-plain
  },
  {
    name: "Tailwind",
    icon: "devicon-tailwindcss-original",
    rank: "novice"
  },
  {
    name: "SourceTree",
    icon: "devicon-sourcetree-plain",
    rank: "novice"
  },
  {
    name: "Trello",
    icon: "devicon-trello-plain",
    rank: "adept"
  },
  {
    name: "Tableau",
    icon: "",
    rank: "comfortable"
  },
  {
    name: "Typescript",
    icon: "devicon-typescript-plain",
    rank: "novice"
  },
  {
    name: "Visual Studio",
    icon: "devicon-visualstudio-plain",
    rank: "adept"
  },
  {
    name: "Visual Studio Code",
    icon: "devicon-vscode-plain",
    rank: "adept"
    // devicon-vscode-plain-wordmark
  },
  {
    name: "Unity",
    icon: "devicon-unity-plain",
    rank: "adept"
  }
  // {
  //     name:"",
  //     icon:"",
  // rank: "novice",
  // },
  // {
  //     name:"",
  //     icon:"",
  // rank: "novice",
  // },

  // TEST
  // {
  //   name: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, quia? Corrupti facere ratione dolor ut? Officiis vero sint et quis nulla! Dolores non dicta sapiente, adipisci officiis tenetur reiciendis voluptatem.",
  //   icon: "devicon-android-plain "
  // },
];

// Add filtering to ranks
const SkillsPage = () => {
  const [skillList, setSkillList] = useState(skills);

  return (
    <div className={styles.container} id="skills">
      <div className={styles.skillLegend}>
        <ul>
          <li className={styles.novice}>
            <button
              className={styles.skillbutton}
              onClick={() =>
                setSkillList(skills.filter((skill) => skill.rank == "novice"))
              }
            >
              Novice
            </button>
          </li>
          <li className={styles.comfortable}>
            <button
              className={styles.skillbutton}
              onClick={() =>
                setSkillList(
                  skills.filter((skill) => skill.rank == "comfortable")
                )
              }
            >
              Comfortable
            </button>
          </li>
          <li className={styles.adept}>
            <button
              className={styles.skillbutton}
              onClick={() =>
                setSkillList(skills.filter((skill) => skill.rank == "adept"))
              }
            >
              Adept
            </button>
          </li>
          <li className={styles.expert}>
            <button
              className={styles.skillbutton}
              onClick={() =>
                setSkillList(skills.filter((skill) => skill.rank == "expert"))
              }
            >
              Expert
            </button>
          </li>
          <li className={styles.master}>
            <button
              className={styles.skillbutton}
              onClick={() =>
                setSkillList(skills.filter((skill) => skill.rank == "master"))
              }
            >
              Master
            </button>
          </li>
          <li>
            <button
              className={styles.skillbutton}
              onClick={() => setSkillList(skills)}
            >
              All
            </button>
          </li>
        </ul>
      </div>
      <div className={styles.gridcontainer}>
        {skillList.map((skill) => (
          <GridItem key={skill.name} item={skill}></GridItem>
        ))}
      </div>
    </div>
  );
};
export default SkillsPage;
