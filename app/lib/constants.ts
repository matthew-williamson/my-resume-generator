import { calculateTimeBySkill } from "./helpers";
import { Company, Experience, Skill } from "./types";
import _ from "lodash";

const Scottsdale = "Scottsdale, AZ";
const Tempe = "Tempe, AZ";

export const Caring: Company = {
  name: "Caring",
  location: Scottsdale,
  logo: "https://logo.clearbit.com/caring.com",
};

export const Carvana: Company = {
  name: "Carvana",
  location: Tempe,
  logo: "https://logo.clearbit.com/carvana.com",
};

export const ImagineLearning: Company = {
  name: "Imagine Learning",
  location: Scottsdale,
  logo: "https://logo.clearbit.com/imaginelearning.com",
};

export const SavvyTrader: Company = {
  name: "Savvy Trader",
  location: Scottsdale,
  logo: "https://logo.clearbit.com/savvytrader.com",
};

export const GitKraken: Company = {
  name: "GitKraken",
  location: Scottsdale,
  logo: "https://logo.clearbit.com/gitkraken.com",
};

export const SandhillsPublishing: Company = {
  name: "Sandhills Publishing",
  location: Scottsdale,
  logo: "https://logo.clearbit.com/sandhills.com",
};

export const CRC: Company = {
  name: "CRC Info Sys",
  location: Scottsdale,
};

export const bigFivePersonalityScores = [
  { attribute: "Openness", rating: 79 },
  { attribute: "Conscientiousness", rating: 60 },
  { attribute: "Extroversion", rating: 75 },
  { attribute: "Agreeableness", rating: 65 },
  { attribute: "Neuroticism", rating: 40 },
];

export const experiences: Experience[] = [
  {
    startDate: new Date("01/13/2025"),
    startDisplay: "01/2025",
    title: "Technical Lead",
    company: Caring,
    id: 1,
    url: "https://caring.com/",
    achievements: [
      "Lead technical direction for Next.js web application development.",
      "Work directly with product to translate Figma designs into actionable Jira tickets.",
      "Guide engineering team through sprint planning and execution.",
      "Build features using React, TypeScript, and Next.js on the frontend.",
      "Contribute to Node.js backend services and API development.",
      "Mentor team members and conduct code reviews to maintain code quality.",
      "Collaborate cross-functionally to deliver customer-facing features.",
    ],
    frontEndSkills: [
      Skill.React,
      Skill.TypeScript,
      Skill.NextJS,
      Skill.ChakraUI,
      Skill.Playwright,
      Skill.EndToEndTesting,
      Skill.Figma,
    ],
    backEndSkills: [
      Skill.NodeJS,
      Skill.PostgreSQL,
      Skill.Snowflake,
      Skill.SegmentEvents,
      Skill.ABTesting,
    ],
    generalTechnicalSkills: [
      Skill.AWS,
      Skill.GitHub,
      Skill.Git,
      Skill.CICD,
      Skill.CodeReviews,
      Skill.SprintPlanning,
      Skill.Jira,
    ],
    softSkills: [
      Skill.Leadership,
      Skill.Mentorship,
      Skill.TeamworkandCollaboration,
      Skill.Communication,
      Skill.ProblemSolving,
      Skill.TimeManagement,
      Skill.Adaptability,
      Skill.ContinuousLearning,
    ],
  },
  {
    startDate: new Date("04/1/2024"),
    startDisplay: "04/2024",
    endDate: new Date("01/13/2025"),
    endDisplay: "01/2025",
    title: "Sr. Software Engineer",
    company: Carvana,
    id: 2,
    url: "https://carvana.com/",
    achievements: [
      "Lead development of SaaS apps using React/TypeScript, C#.NET microservices, and REST/GraphQL APIs.",
      "Integrate 3rd-party/internal APIs and streamline application functionality.",
      "Conduct code reviews to ensure high-quality, performant, and maintainable code.",
      "Mentor engineers and QA, fostering skill growth across the full stack.",
      "Collaborate with product teams to deliver features from wireframes to production.",
      "Manage Azure DevOps CI/CD pipelines, NX monorepo setup, and Git workflows.",
      "Implement automated tests (Playwright, Jest, MSW) for robust testing coverage.",
      "Designed and launched our team's first Microfrontend architecture.",
      "Optimize performance and resolve codebase inefficiencies.",
      "Present team progress and key outcomes to leadership bi-weekly.",
    ],
    frontEndSkills: [
      Skill.React,
      Skill.TypeScript,
      Skill.JavaScript,
      Skill.Jest,
      Skill.Cypress,
      Skill.Playwright,
      Skill.Redux,
      Skill.HTML,
      Skill.CSS,
      Skill.SASS,
      Skill.APIIntegration,
      Skill.MUI,
      Skill.WebAppDevelopment,
      Skill.SaaS,
      Skill.Storybook,
      Skill.UnitTesting,
    ],
    backEndSkills: [
      Skill.SQL,
      Skill.EventDrivenArchitecture,
      Skill.MicroserviceArchitecture,
      Skill.APIDevelopment,
      Skill.REST,
    ],
    generalTechnicalSkills: [
      Skill.Webpack,
      Skill.NX,
      Skill.Git,
      Skill.AzureDevops,
      Skill.LargeScaleSystems,
      Skill.AI,
      Skill.ChatGPTFeatures,
      Skill.CICD,
      Skill.CodeReviews,
      Skill.MobileAppDevelopment,
      Skill.AgileScrum,
    ],
    softSkills: [
      Skill.Leadership,
      Skill.TeamworkandCollaboration,
      Skill.Communication,
      Skill.PairProgramming,
      Skill.AttentionToDetail,
      Skill.Empathy,
      Skill.TimeManagement,
      Skill.ProblemSolving,
      Skill.Adaptability,
      Skill.ContinuousLearning,
    ],
  },
  {
    startDate: new Date("12/1/2022"),
    startDisplay: "12/2022",
    endDate: new Date("04/1/2024"),
    endDisplay: "04/2024",
    title: "Sr. Software Engineer",
    company: SavvyTrader,
    id: 3,
    url: "https://savvytrader.com/",
    achievements: [
      "Founding engineer, led the development of SaaS web/mobile apps using React/TypeScript and Node.js.",
      "Built and deployed mobile apps with Capacitor JS and responsive UIs across platforms.",
      "Developed and maintained Node.js microservices with DynamoDB/SQL databases and event-driven architecture.",
      "Architected AI-driven features using OpenAI/OpenAPI and created one of the first 50 ChatGPT Plugins.",
      "Managed AWS infrastructure (Lambda, API Gateway, DynamoDB, S3, etc.) to support scalable systems.",
      "Integrated 3rd-party FinTech APIs and internal APIs to enhance platform capabilities.",
      "Built reusable, scalable, and testable code for high-performance systems.",
      "Implemented real-time data visualization using Highcharts/Victory Charts, including a differentiating chart events system.",
      "Played a key role in shaping product direction and engineering strategy at a fast-paced startup.",
    ],
    frontEndSkills: [
      Skill.React,
      Skill.TypeScript,
      Skill.JavaScript,
      Skill.Jest,
      Skill.Redux,
      Skill.HTML,
      Skill.CSS,
      Skill.SASS,
      Skill.APIIntegration,
      Skill.MUI,
      Skill.WebAppDevelopment,
      Skill.SaaS,
      Skill.CapacitorJS,
      Skill.Storybook,
      Skill.UnitTesting,
    ],
    backEndSkills: [
      Skill.SQL,
      Skill.DynamoDB,
      Skill.AWS,
      Skill.EventDrivenArchitecture,
      Skill.MicroserviceArchitecture,
      Skill.APIDevelopment,
      Skill.REST,
      Skill.NodeJS,
    ],
    generalTechnicalSkills: [
      Skill.Webpack,
      Skill.Git,
      Skill.LargeScaleSystems,
      Skill.AI,
      Skill.NX,
      Skill.ChatGPTFeatures,
      Skill.CICD,
      Skill.CodeReviews,
      Skill.MobileAppDevelopment,
      Skill.AgileScrum,
    ],
    softSkills: [
      Skill.Leadership,
      Skill.StartupEnvironment,
      Skill.TeamworkandCollaboration,
      Skill.Communication,
      Skill.PairProgramming,
      Skill.AttentionToDetail,
      Skill.Empathy,
      Skill.TimeManagement,
      Skill.ProblemSolving,
      Skill.Adaptability,
      Skill.ContinuousLearning,
    ],
  },
  {
    startDate: new Date("03/1/2022"),
    startDisplay: "03/2022",
    endDate: new Date("12/1/2022"),
    endDisplay: "12/2022",
    title: "Sr. Software Engineer",
    company: ImagineLearning,
    id: 4,
    url: "https://www.imaginelearning.com/",
    achievements: [
      "Led development of education SaaS web applications using React/TypeScript and C#.NET REST/GraphQL APIs.",
      "Improved code quality by introducing Storybook, Prettier, Cypress, and establishing best practices.",
      "Built and maintained micro front-ends using single-spa and Webpack Module Federation.",
      "Mentored developers on Git, React, TypeScript, and fostered a learning-focused PR culture.",
      "Transformed loose Figma mocks and requirements into production-ready features.",
      "Integrated with both GraphQL and REST APIs to deliver robust application functionality.",
      "Guided offshore/nearshore engineers in developing reporting systems.",
      "Collaborated in architectural discussions to shape the technical direction.",
      "Assisted QA with Cypress automation, writing unit and integration tests to ensure code reliability.",
    ],
    frontEndSkills: [
      Skill.React,
      Skill.TypeScript,
      Skill.JavaScript,
      Skill.Jest,
      Skill.Cypress,
      Skill.EndToEndTesting,
      Skill.UnitTesting,
      Skill.Redux,
      Skill.TailwindCSS,
      Skill.HTML,
      Skill.CSS,
      Skill.SASS,
      Skill.APIIntegration,
      Skill.WebAppDevelopment,
      Skill.Storybook,
      Skill.Figma,
      Skill.SaaS,
    ],
    backEndSkills: [
      Skill.CSharp,
      Skill.SQL,
      Skill.EventDrivenArchitecture,
      Skill.APIDevelopment,
      Skill.REST,
      Skill.GraphQL,
      Skill.MicroserviceArchitecture,
    ],
    generalTechnicalSkills: [
      Skill.Webpack,
      Skill.Git,
      Skill.AgileScrum,
      Skill.LargeScaleSystems,
      Skill.CICD,
      Skill.CodeReviews,
      Skill.Jira,
    ],
    softSkills: [
      Skill.Mentorship,
      Skill.Leadership,
      Skill.Communication,
      Skill.TeamworkandCollaboration,
      Skill.PairProgramming,
      Skill.AttentionToDetail,
      Skill.Empathy,
      Skill.TimeManagement,
      Skill.ProblemSolving,
      Skill.Adaptability,
      Skill.ContinuousLearning,
    ],
  },
  {
    startDate: new Date("8/1/2019"),
    startDisplay: "08/2019",
    endDate: new Date("03/1/2022"),
    endDisplay: "03/2022",
    title: "Software Engineer II",
    company: GitKraken,
    id: 5,
    url: "https://www.gitkraken.com/",
    achievements: [
      "Built and maintained a cross-platform Git GUI desktop app using React, Node.js, Electron, and TypeScript.",
      "Integrated with multiple Git hosting service APIs.",
      "Led development of a multi-process Redux system and refactored async actions to Redux Saga.",
      "Contributed to a large-scale rearchitecture, optimizing from single to multi-render processes.",
      "Improved Git tree traversal efficiency by 25% through algorithm enhancements.",
      "Mentored and onboarded engineers from intern roles to full-time positions.",
      "Left as one of the top 3 all-time contributors by any metric (commits, lines added/removed, tickets closed, etc).",
    ],
    frontEndSkills: [
      Skill.React,
      Skill.TypeScript,
      Skill.JavaScript,
      Skill.EndToEndTesting,
      Skill.Cypress,
      Skill.Jest,
      Skill.UnitTesting,
      Skill.Redux,
      Skill.ReduxSaga,
      Skill.HTML,
      Skill.CSS,
      Skill.SASS,
      Skill.APIIntegration,
      Skill.Figma,
      Skill.Electron,
    ],
    backEndSkills: [
      Skill.EventDrivenArchitecture,
      Skill.APIDevelopment,
      Skill.REST,
      Skill.GraphQL,
      Skill.NodeJS,
      Skill.MongoDB,
      Skill.MicroserviceArchitecture,
    ],
    generalTechnicalSkills: [
      Skill.Webpack,
      Skill.AWS,
      Skill.Git,
      Skill.CICD,
      Skill.CodeReviews,
      Skill.DesktopAppDevelopment,
      Skill.AgileScrum,
      Skill.Docker,
      Skill.Kubernetes,
    ],
    softSkills: [
      Skill.Mentorship,
      Skill.Leadership,
      Skill.Communication,
      Skill.StartupEnvironment,
      Skill.TeamworkandCollaboration,
      Skill.PairProgramming,
      Skill.AttentionToDetail,
      Skill.Empathy,
      Skill.TimeManagement,
      Skill.ProblemSolving,
      Skill.Adaptability,
      Skill.ConflictResolution,
      Skill.ContinuousLearning,
    ],
  },
  {
    startDate: new Date("03/1/2018"),
    startDisplay: "03/2018",
    endDate: new Date("08/1/2019"),
    endDisplay: "08/2019",
    title: "Software Engineer",
    company: SandhillsPublishing,
    id: 6,
    url: "https://sandhills.com/",
    achievements: [
      "Developed and maintained SaaS web apps using JavaScript, VB.NET, C#.NET, SQL, and MVC architectures.",
      "Improved team efficiency with a custom Chrome extension, boosting productivity by over 80%.",
      "Mentored and onboarded engineers from intern roles to full-time positions.",
      "Enhanced a long-running asynchronous C# data manipulation service, increasing efficiency by 50%.",
      "Fostered improvements in code review practices, team culture, and collaboration.",
    ],
    frontEndSkills: [
      Skill.JavaScript,
      Skill.MVC,
      Skill.HTML,
      Skill.CSS,
      Skill.APIIntegration,
      Skill.WebAppDevelopment,
      Skill.VBNET,
    ],
    backEndSkills: [
      Skill.CSharp,
      Skill.ASPNET,
      Skill.SQL,
      Skill.APIDevelopment,
      Skill.REST,
      Skill.StoredProcedures,
    ],
    generalTechnicalSkills: [
      Skill.LargeScaleSystems,
      Skill.SaaS,
      Skill.CodeReviews,
      Skill.AgileScrum,
    ],
    softSkills: [
      Skill.Mentorship,
      Skill.TeamworkandCollaboration,
      Skill.Communication,
      Skill.Leadership,
      Skill.AttentionToDetail,
      Skill.Empathy,
      Skill.TimeManagement,
      Skill.ProblemSolving,
      Skill.Adaptability,
      Skill.ConflictResolution,
      Skill.ContinuousLearning,
    ],
  },
  {
    startDate: new Date("01/1/2017"),
    startDisplay: "01/2017",
    endDate: new Date("03/1/2018"),
    endDisplay: "03/2018",
    title: "Software Engineer",
    company: CRC,
    id: 7,
    achievements: [
      "Built, deployed, and maintained legacy VB6 desktop applications.",
      "Used RDC to manually update and troubleshoot customer systems in real time.",
      "Debugged and resolved numerous bugs in legacy software.",
      "Maintained SQL databases and ensured data integrity.",
      "Gained key insights into version control best practices with Git and TFS.",
    ],
    frontEndSkills: [Skill.VB6, Skill.HTML, Skill.CSS],
    backEndSkills: [Skill.ASPNET, Skill.SQL, Skill.StoredProcedures],
    generalTechnicalSkills: [Skill.CodeReviews],
    softSkills: [
      Skill.AttentionToDetail,
      Skill.Empathy,
      Skill.TimeManagement,
      Skill.ProblemSolving,
      Skill.Adaptability,
      Skill.TeamworkandCollaboration,
      Skill.Communication,
      Skill.StartupEnvironment,
      Skill.ContinuousLearning,
    ],
  },
].reverse();

export const frontEndSkillsInExperiences = _.uniq(
  experiences.reduce((acc, e) => {
    acc.push(...e.frontEndSkills);
    return acc;
  }, [] as Skill[]),
);

export const backEndSkillsInExperiences = _.uniq(
  experiences.reduce((acc, e) => {
    acc.push(...e.backEndSkills);
    return acc;
  }, [] as Skill[]),
);

export const generalTechnicalSkillsInExperiences = _.uniq(
  experiences.reduce((acc, e) => {
    acc.push(...e.generalTechnicalSkills);
    return acc;
  }, [] as Skill[]),
);

export const softSkillsInExperiences = _.uniq(
  experiences.reduce((acc, e) => {
    acc.push(...e.softSkills);
    return acc;
  }, [] as Skill[]),
);

export const frontEndTimeBySkill: Record<Skill, number> = calculateTimeBySkill(
  experiences,
  "frontEndSkills",
);

export const backEndTimeBySkill: Record<Skill, number> = calculateTimeBySkill(
  experiences,
  "backEndSkills",
);

export const generalTechnicalTimeBySkill: Record<Skill, number> =
  calculateTimeBySkill(experiences, "generalTechnicalSkills");

export const softTimeBySkill: Record<Skill, number> = calculateTimeBySkill(
  experiences,
  "softSkills",
);
