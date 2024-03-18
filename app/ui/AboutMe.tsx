/* eslint-disable react/no-unescaped-entities */
import { Stack, Typography } from "@mui/material";
import CollapsibleSection from "./shared/CollapsibleSection";
import Highlight from "./shared/Highlight";

export default function AboutMe() {
  return (
    <CollapsibleSection
      header={
        <Typography variant="h5" sx={{ color: "#99CCFF" }}>
          About
        </Typography>
      }
    >
      <Stack spacing={2}>
        <Typography variant="body2">
          My name is <Highlight text="Matthew Williamson" />, and welcome to my{" "}
          <Highlight text="living resume" />.
        </Typography>
        <Typography variant="body2">
          I am an outgoing and energetic{" "}
          <Highlight text="Senior Full Stack Software Engineer" /> with{" "}
          <Highlight text="7 years of professional experience" /> building
          everything from <Highlight text="SaaS web apps" /> at scale, to world
          class <Highlight text="desktop apps" />, to{" "}
          <Highlight text="internal only systems" />.
        </Typography>
        <Typography variant="body2">
          As a <Highlight text="team player" />, I place a high value on{" "}
          <Highlight text="collaborative" /> and{" "}
          <Highlight text="fast paced environments" />. My goal is to step into
          the "people" side of engineering and become a{" "}
          <Highlight text="manager" />. Nothing brings me more satisfaction than
          helping other engineers achieve their goals, and achieving goals
          collectively as a team. I consider myself a professional{" "}
          <Highlight text="problem solver" />.
        </Typography>
        <Typography variant="body2">
          My tech stack of choice to tackle problems and provide solutions would
          include{" "}
          <Highlight text="TypeScript and/or JavaScript, React, Cloud Infrastructure like AWS or Azure, SQL and/or NoSQL, and Node" />
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
