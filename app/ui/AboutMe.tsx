/* eslint-disable react/no-unescaped-entities */
import { Stack, Typography } from "@mui/material";
import CollapsibleSection from "./shared/CollapsibleSection";
import Highlight from "./shared/Highlight";

export default function AboutMe() {
  return (
    <CollapsibleSection
      open
      header={
        <Typography variant="h5" sx={{ color: "#99CCFF" }}>
          About
        </Typography>
      }
    >
      <Stack spacing={2}>
        <Typography variant="body2">
          Welcome to my <Highlight text="living resume" />!
        </Typography>
        <Typography variant="body2">
          My name is <Highlight text="Matthew Williamson" />.
        </Typography>
        <Typography variant="body2">
          I am an outgoing and energetic{" "}
          <Highlight text="Senior Full Stack Software Engineer" /> with{" "}
          <Highlight text="7 years of professional experience" /> building
          everything from <Highlight text="SaaS web apps" /> at scale, to world
          class <Highlight text="Git GUI desktop apps" />, to{" "}
          <Highlight text="internal only systems" />. I have a passion for{" "}
          <Highlight text="code quality" />, <Highlight text="testing" />, and{" "}
          <Highlight text="best practices" />.
        </Typography>
        <Typography variant="body2">
          My immediate goal is to become a{" "}
          <Highlight text="Software Engineering Manager" />. The most satisfied
          I feel from work is when I get to{" "}
          <Highlight text="help my teammates level up" />. I place a high value
          on <Highlight text="collaborative" /> environments.
        </Typography>
        <Typography variant="body2">
          I consider myself a professional <Highlight text="problem solver" />{" "}
          more than any specific type of engineer. My tech stack of choice to
          tackle problems and provide solutions would include{" "}
          <Highlight text="TypeScript and/or JavaScript, React, Node, Cloud Infrastructure like AWS or Azure, SQL and/or NoSQL, and Git" />
          .
        </Typography>
        <Typography variant="body2">
          I built this living resume from scratch using{" "}
          <Highlight text="React, Next.js, TypeScript, MUI, CSS, HTML, and Victory Charts" />
          .
        </Typography>
      </Stack>
    </CollapsibleSection>
  );
}
