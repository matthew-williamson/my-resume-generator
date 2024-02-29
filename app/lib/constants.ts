import { Company, Experience, Skill } from "./types";

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

export const experiences: Experience[] = [
  {
    startDate: new Date("10/1/2023"),
    startDisplay: "10/2023",
    title: "Senior Software Engineer",
    company: ImagineLearning,
    achievements: [
      "Improved developer and QA quality of life and efficiency by adding Prettier, ESLint, Storybook, CI/CD test automation, and fostering improved code review culture",
      "Researched and implemented a reusable React component printing system for our critical customer facing reports using third party libraries",
      "Integrate new React reports into a Micro Frontend host app",
      "Mentor and oversee a team of offshore developers",
      "Provide best practice guidance and advocate for concise, clean, robust code (especially in React/TypeScript)",
      "Work closely with product, design, and management stakeholders to turn Figma mocks into reality",
      "Hydrate our frontend with our GraphQL APIs and REST APIs",
      "Oversee the development and delivery, from planning to production, of two business critical products",
      "Perform frequent code reviews and give meaningful feedback",
    ],
    skills: [
      Skill.React,
      Skill.TypeScript,
      Skill.JavaScript,
      Skill.CSharp,
      Skill.SQL,
      Skill.EventDrivenArchitecture,
      Skill.EndToEndTesting,
      Skill.Cypress,
      Skill.Jest,
      Skill.UnitTesting,
      Skill.Redux,
      Skill.TailwindCSS,
      Skill.HTML,
      Skill.CSS,
      Skill.SASS,
      Skill.Git,
      Skill.Mentorship,
      Skill.Leadership,
      Skill.LargeScaleSystems,
      Skill.APIDevelopment,
      Skill.APIIntegration,
      Skill.REST,
      Skill.GraphQL,
      Skill.CICD,
      Skill.TeamworkandCollaboration,
      Skill.CodeReviews,
      Skill.WebAppDevelopment,
      Skill.AgileScrum,
      Skill.FrontEnd,
      Skill.Webpack,
      Skill.Storybook,
      Skill.Figma,
      Skill.Jira,
      Skill.BackEnd,
    ],
  },
  {
    startDate: new Date("12/1/2022"),
    startDisplay: "12/2022",
    title: "Senior Software Engineer",
    company: SavvyTrader,
    achievements: [
      "Implemented our standout chart events, reactions, links, and many more features which help us be a differentiator from competitors and drive growth",
      "Thriving in a fast paced start up environment, working directly with the CEO, product, and design to turn our vision into reality",
      'Architected an event driven automated system using AWS EventBridge that mines 13F filing data from some of the world\'s most notable investors and integrates the data into our portfolio "trackers" for them',
      "Architected one of the first 50 ChatGPT plugins, integrating our Node JS backend with ChatGPT using OpenAPI specifications",
      "Conceptualized and delivered our AI analyzer feature model using OpenAI, the last surviving in-app AI feature",
      "Built our sitemap generator using AWS EventBridge to help us stay on top of our SEO (we have so many URLs that fluctuate, we needed a system to automatically generate our sitemap daily)",
      "Participate in extremely high level discussions about company direction, products, and features",
      "Built our Discover page, which included creating simplified versions of our performance charts using Victory for aesthetics and simplicity instead of Highcharts",
    ],
    skills: [
      Skill.React,
      Skill.TypeScript,
      Skill.JavaScript,
      Skill.SQL,
      Skill.DynamoDB,
      Skill.AWS,
      Skill.EventDrivenArchitecture,
      Skill.EndToEndTesting,
      Skill.Jest,
      Skill.UnitTesting,
      Skill.Redux,
      Skill.HTML,
      Skill.CSS,
      Skill.SASS,
      Skill.Git,
      Skill.Leadership,
      Skill.LargeScaleSystems,
      Skill.APIDevelopment,
      Skill.APIIntegration,
      Skill.REST,
      Skill.StartupEnvironment,
      Skill.AI,
      Skill.ChatGPTFeatures,
      Skill.MUI,
      Skill.CICD,
      Skill.TeamworkandCollaboration,
      Skill.CodeReviews,
      Skill.WebAppDevelopment,
      Skill.MobileAppDevelopment,
      Skill.CapacitorJS,
      Skill.NodeJS,
      Skill.FrontEnd,
      Skill.BackEnd,
      Skill.Webpack,
      Skill.Storybook,
    ],
  },
  {
    startDate: new Date("03/1/2022"),
    startDisplay: "03/2022",
    endDate: new Date("12/1/2022"),
    endDisplay: "12/2022",
    title: "Senior Software Engineer",
    company: ImagineLearning,
    achievements: [
      "Mentored three junior developers into valuable and highly effective contributors",
      "Introduced the team to GitKraken, which improves developer efficiency and understanding of git",
      'Improved code review culture immensely (when I joined, 90+% of all reviews had a simple "looks good to me" comment with 0 feedback)',
      "Worked closely with fellow senior level engineers to explore using Webpack module federation to make dependencies run-time instead of build-time",
      "Discovered and fixed a slew of bugs related to hard coded dates across three of our repos",
      "Helped oversee the refactor of our repos from Angular to React",
      "Worked closely with design, product, and management to help turn visions and Figma docs into reality",
      "During tenure, I was the most productive developer on the team from a metrics perspective: most tickets closed, most lines of code modified, etc",
      "Designed and implemented our API that integrated with dotCMS",
    ],
    skills: [
      Skill.React,
      Skill.TypeScript,
      Skill.JavaScript,
      Skill.CSharp,
      Skill.SQL,
      Skill.EventDrivenArchitecture,
      Skill.EndToEndTesting,
      Skill.Cypress,
      Skill.Jest,
      Skill.UnitTesting,
      Skill.Redux,
      Skill.TailwindCSS,
      Skill.HTML,
      Skill.CSS,
      Skill.SASS,
      Skill.Git,
      Skill.Mentorship,
      Skill.Leadership,
      Skill.LargeScaleSystems,
      Skill.APIDevelopment,
      Skill.APIIntegration,
      Skill.REST,
      Skill.GraphQL,
      Skill.CICD,
      Skill.TeamworkandCollaboration,
      Skill.CodeReviews,
      Skill.WebAppDevelopment,
      Skill.AgileScrum,
      Skill.FrontEnd,
      Skill.Webpack,
      Skill.Storybook,
      Skill.Figma,
      Skill.Jira,
      Skill.BackEnd,
    ],
  },
  {
    startDate: new Date("8/1/2019"),
    startDisplay: "08/2019",
    endDate: new Date("03/1/2022"),
    endDisplay: "03/2022",
    title: "Software Engineer II",
    company: GitKraken,
    achievements: [
      "Built and maintained a world class Git GUI that I still love and use to this day",
      "Integrated with many third party APIs while building features including: Jira, Jira Cloud, GitHub, GitHub Enterprise, Trello, GitLab, GitLab Self-Managed, BitBucket, BitBucket Server, and Azure DevOps",
      "Designed and implemented a network request coordinator that ensured all of our incoming and outgoing network traffic had proper headers and formatting in a render vs main process world using channel/emitter patterns",
      "Developed on and maintained an extremely extensive Redux/Redux Saga state system across the main and render processes in Electron",
      "Spearheaded our refactor from thunks to sagas",
      "Mentored numerous interns, most of which received full time offers from the company",
      "Left as one of the top 3 all time contributors to the flagship product",
    ],
    skills: [
      Skill.React,
      Skill.TypeScript,
      Skill.JavaScript,
      Skill.MongoDB,
      Skill.EventDrivenArchitecture,
      Skill.EndToEndTesting,
      Skill.Cypress,
      Skill.AWS,
      Skill.Jest,
      Skill.UnitTesting,
      Skill.Redux,
      Skill.ReduxSaga,
      Skill.Mentorship,
      Skill.Leadership,
      Skill.HTML,
      Skill.CSS,
      Skill.SASS,
      Skill.Git,
      Skill.APIDevelopment,
      Skill.APIIntegration,
      Skill.StartupEnvironment,
      Skill.REST,
      Skill.GraphQL,
      Skill.CICD,
      Skill.TeamworkandCollaboration,
      Skill.CodeReviews,
      Skill.NodeJS,
      Skill.DesktopAppDevelopment,
      Skill.AgileScrum,
      Skill.FrontEnd,
      Skill.BackEnd,
      Skill.Webpack,
      Skill.Electron,
      Skill.MongoDB,
      Skill.Figma,
    ],
  },
  {
    startDate: new Date("03/1/2018"),
    startDisplay: "03/2018",
    endDate: new Date("08/1/2019"),
    endDisplay: "08/2019",
    title: "Software Engineer",
    company: SandhillsPublishing,
    achievements: [
      "Architected a Chrome Extension for a fleet of data miners to use to automate their business critical tasks, increasing efficiency by 90+%",
      "Mentored and oversaw onboarding of numerous junior developers and interns",
      "Worked closely with our data teams to process and manage business critical data stores",
      "Helped foster an improved workplace environment (team lunches, games, etc)",
      "Top contributor on the team from a metrics perspective (tickets closed, etc)",
    ],
    skills: [
      Skill.JavaScript,
      Skill.CSharp,
      Skill.VBNET,
      Skill.ASPNET,
      Skill.MVC,
      Skill.SQL,
      Skill.HTML,
      Skill.CSS,
      Skill.Mentorship,
      Skill.LargeScaleSystems,
      Skill.APIIntegration,
      Skill.APIDevelopment,
      Skill.REST,
      Skill.TeamworkandCollaboration,
      Skill.CodeReviews,
      Skill.WebAppDevelopment,
      Skill.StoredProcedures,
      Skill.AgileScrum,
      Skill.FrontEnd,
      Skill.BackEnd,
    ],
  },
  {
    startDate: new Date("01/1/2017"),
    startDisplay: "01/2017",
    endDate: new Date("03/1/2018"),
    endDisplay: "03/2018",
    title: "Software Engineer",
    company: CRC,
    achievements: [
      "Maintained VB6 legacy code",
      "Fixed numerous bugs and implemented numerous improvements on our printing system applications",
      "Kept customer systems up to date manually by remote desktop controlling their environments and updating their applications",
      "Ensured constant inter-team and intra-team communication, as none of the legacy codebase was properly source controlled",
      "Worked closely with the entire company",
    ],
    skills: [
      Skill.VB6,
      Skill.VBNET,
      Skill.ASPNET,
      Skill.SQL,
      Skill.HTML,
      Skill.CSS,
      Skill.TeamworkandCollaboration,
      Skill.CodeReviews,
      Skill.StoredProcedures,
      Skill.FrontEnd,
      Skill.StartupEnvironment,
    ],
  },
];
