import exp from "constants";
import { calculateTimeBySkill, millisecondsToYears } from "./helpers";
import { Company, Experience, Skill } from "./types";
import _ from "lodash";

const Scottsdale = "Scottsdale, AZ";

export const ImagineLearning: Company = {
  name: "Imagine Learning",
  location: Scottsdale,
};

export const SavvyTrader: Company = {
  name: "Savvy Trader",
  location: Scottsdale,
};

export const GitKraken: Company = {
  name: "GitKraken",
  location: Scottsdale,
};

export const SandhillsPublishing: Company = {
  name: "Sandhills Publishing",
  location: Scottsdale,
};

export const CRC: Company = {
  name: "CRC Information Systems",
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
    startDate: new Date("10/1/2023"),
    startDisplay: "10/2023",
    title: "Senior Software Engineer",
    company: ImagineLearning,
    id: 1,
    achievements: [
      "Build and maintain education SaaS web applications with React and TypeScript",
      "Improved code quality by introducing team to Storybook, Prettier, Cypress, and more",
      "Develop and maintain micro front-ends",
      "Provide best practice guidance on Git, React, and TypeScript",
      "Turn loose requirements and Figma mocks into reality",
      "Integrate with GraphQL APIs and REST APIs",
      "Create highly reusable, robust, scalable, testable code",
      "Improve PR culture with thoughtful feedback and fostering a space for continued learning and growth",
      "Mentor junior developers",
      "Participate in high level architectural discussions about direction of engineering",
      "Assist QA teams by guiding Cypress test automation development",
      "Collaborate with product, management, and teammates to navigate new solutions and deadlines",
    ],
    frontEndSkills: [
      Skill.React,
      Skill.TypeScript,
      Skill.JavaScript,
      Skill.Jest,
      Skill.Cypress,
      Skill.Redux,
      Skill.TailwindCSS,
      Skill.HTML,
      Skill.CSS,
      Skill.SASS,
      Skill.APIIntegration,
      Skill.WebAppDevelopment,
      Skill.Storybook,
      Skill.UnitTesting,
      Skill.Figma,
      Skill.SaaS,
    ],
    backEndSkills: [
      Skill.CSharp,
      Skill.SQL,
      Skill.EventDrivenArchitecture,
      Skill.APIDevelopment,
      Skill.MicroserviceArchitecture,
      Skill.REST,
      Skill.GraphQL,
    ],
    generalTechnicalSkills: [
      Skill.Webpack,
      Skill.CodeReviews,
      Skill.Git,
      Skill.LargeScaleSystems,
      Skill.CICD,
      Skill.AgileScrum,
      Skill.Jira,
    ],
    softSkills: [
      Skill.Mentorship,
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
    title: "Senior Software Engineer",
    company: SavvyTrader,
    id: 2,
    achievements: [
      "Design, build, and maintain a greenfield portfolio sharing platform SaaS web application with React and TypeScript",
      "Build and deploy mobile app versions with Capacitor JS",
      "Build and maintain TypeScript and Node.js BE using Dynamo and SQL databases",
      "BE is 100% microservice architecture",
      "Infrastructure is 100% AWS cloud solution based (Lambda, API Gateway, CloudWatch, RDS, DynamoDB, S3, EventBridge, etc)",
      "Architected multiple differentiator AI features using OpenAI/OpenAPI",
      "Created one of the first 50 ChatGPT Plugins",
      "Integrate with both internal and external APIs",
      "Create highly reusable, robust, scalable, testable code",
      "Data visualization and manipulation using Highcharts, Victory Charts",
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
    title: "Senior Software Engineer",
    company: ImagineLearning,
    id: 3,
    achievements: [
      "Build and maintain education SaaS web applications with React and TypeScript",
      "Improved code quality by introducing team to Storybook, Prettier, Cypress, and more",
      "Develop and maintain micro front-ends",
      "Provide best practice guidance on Git, React, and TypeScript",
      "Turn loose requirements and Figma mocks into reality",
      "Integrate with GraphQL APIs and REST APIs",
      "Create highly reusable, robust, scalable, testable code",
      "Improve PR culture with thoughtful feedback and fostering a space for continued learning and growth",
      "Mentor junior developers",
      "Participate in high level architectural discussions about direction of engineering",
      "Assist QA in Cypress automation development",
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
    id: 4,
    achievements: [
      "Built and maintained a world class Git GUI (desktop app) using React, JavaScript + Flow, Node.js, Electron, and TypeScript",
      "Integrated with numerous Git provider APIs",
      "Supported all 3 major OS (I had a dual boot Mac + Windows machine and a Linux machine)",
      "Developed and maintained an extensive, multi-process spanning Redux system",
      "Spearheaded refactor from async actions to Redux Saga",
      "Contributed to design and development of a large scale rearchitecture from single main + single render process to single main + many render processes",
      "Improved complex git tree traversal algorithm to improve efficiency by 25%",
      "Mentored junior developers and interns",
      "Left as one of the top 3 all time contributors",
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
    id: 5,
    achievements: [
      "Built and maintained SaaS web app and internal solutions with JavaScript, VB.NET, C#.NET, SQL, and MVC architectures",
      "Mentored and onboarded multiple engineers",
      "Developed an internal efficiency boosting Chrome Extension using JavaScript",
      "Improved code review culture, office culture, and team bonding",
      "Improved long running C# data manipulation service efficiency by 50%",
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
    id: 6,
    achievements: [
      "Built and maintained code in C#.NET, SQL, and VB6",
      "Customer facing updates and support",
      "Fixed numerous field and internal bugs",
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
  }, [] as Skill[])
);

export const backEndSkillsInExperiences = _.uniq(
  experiences.reduce((acc, e) => {
    acc.push(...e.backEndSkills);
    return acc;
  }, [] as Skill[])
);

export const generalTechnicalSkillsInExperiences = _.uniq(
  experiences.reduce((acc, e) => {
    acc.push(...e.generalTechnicalSkills);
    return acc;
  }, [] as Skill[])
);

export const softSkillsInExperiences = _.uniq(
  experiences.reduce((acc, e) => {
    acc.push(...e.softSkills);
    return acc;
  }, [] as Skill[])
);

export const frontEndTimeBySkill: Record<Skill, number> = calculateTimeBySkill(
  experiences,
  "frontEndSkills"
);

export const backEndTimeBySkill: Record<Skill, number> = calculateTimeBySkill(
  experiences,
  "backEndSkills"
);

export const generalTechnicalTimeBySkill: Record<Skill, number> =
  calculateTimeBySkill(experiences, "generalTechnicalSkills");

export const softTimeBySkill: Record<Skill, number> = calculateTimeBySkill(
  experiences,
  "softSkills"
);
