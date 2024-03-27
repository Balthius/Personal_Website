import styles from "./coverletter.module.css";

const Business_Inputs = [
  {
    name: "Business",
    content:
      "After reading through my resume you will notice I work for my current company as a Data Analyst; in addition to my written role, I have also been heavily cross-collaborative with their Tech team, where I have been involved in more standard development processes (Primarily in Next.js and Contentful). I consider this position to be a natural, and exciting opportunity for me to continue to grow."
  },
  {
    name: "Environmental",
    content:
      "After reading through my resume you will notice I have worked for a company who may be hunter focused, but are even more importantly conservation focused; That deliberate framing on sustainability and I see working for your team as an even more direct way to get into a position where I can help drive meaningful change, and even more importantly where I can gain a deeper understanding and appreciation of the challenges facing us both locally, and globally."
  },
  {
    name: "Game",
    content:
      "After reading through my resume you will notice I have a deent amount of game development, and other interest-driven details, including volunteer work and exploration of best practices and geenral coding concepts. I am a firm believer in casting a wide net, doing something that is either impactful to others, or interesting to myself, and just trying to gather as much knowledge as possible to continue to become a more valuable employee, and to learn what people find enjoyable."
  }
];

const Position_Inputs = [
  {
    name: "Analyst",
    content:
      "I understand how important it is that you find a person who is dedicated to providing accurate data, and actionable answers for the company to use; I have a proven record in both regards, and I look forward to developing my talents even further."
  },
  {
    name: "Developer",
    content:
      "I understand how important it is that you find a person who is dedicated to boosting customer confidence as well as creating clean, self-documenting, and expandable applications, which I consider to be very powerful features of any successful business, especially in the perpetualfight against technical debt."
  }
];

const GetPositionPrefix = (position: string) => {
  var result;

  result =
    position == "A" ||
    position == "E" ||
    position == "I" ||
    position == "O" ||
    position == "U";

  if (result) {
    return "an " + position;
  } else {
    return "a " + position;
  }
};

const CoverLetter = ({ props }: any) => {
  const position = props.position;
  const industry = props.industry;
  const company = props.company;
  const companypurpose = props.companytype;
  const positiontemplate = Position_Inputs[props.positiontemplate];
  const businesstemplate = Business_Inputs[props.businesstemplate];

  console.log("props company template ------------->", props.positiontemplate);

  console.log("saved company template ------------->", positiontemplate);

  return (
    <div className={styles.container}>
      <p>
        Your team is currently looking for {GetPositionPrefix(position)} and it
        is a pleasure to come forward as a candidate for the position.{" "}
        {industry} is a key industry and I would like to provide an edge for{" "}
        {company}. You surely have multiple candidates to consider, and I feel
        obligated to honor the importance of this search to your company by
        offering additional insights into my professional profile that will
        provide some context around my decision to apply.
      </p>
      <br />
      <p>{businesstemplate.content}</p>
      <br />
      <p>
        I am committed to bringing my best to {company} to help them achieve
        their goals and lead the pack as a top-tier {companypurpose} company.
        The skills I have I can wield with great effect for the good of the
        company, and I continue to learn and grow to make myself a more powerful
        employee.
      </p>
      <br />
      <p>{positiontemplate.content}</p>
      <br />
      <p>
        It’s also important that your team finds someone who will be a
        collaborative, analytical member of the team and that is certainly how
        others would characterize me. I hope that you have found this letter
        useful as you consider your pool of applicants and also sincerely hope
        that we’ll be afforded an opportunity to communicate further.
      </p>
      <br />
      Sincerely,
      <br />
      Josh Folsom
    </div>
  );
};

export default CoverLetter;

// Personal_Website/coverletter?position=Data Analyst&positiontemplate="B"&businesstemplate="A"&industry=Tech&company=GOHUNT&companypurpose=Hunting Maps Provider
