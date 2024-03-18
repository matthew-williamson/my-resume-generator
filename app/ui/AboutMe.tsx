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
          class <Highlight text="desktop apps" />, to{" "}
          <Highlight text="internal only systems" />.
        </Typography>
        <Typography variant="body2">
          My goal is to become a{" "}
          <Highlight text="Software Engineering Manager" />. As a{" "}
          <Highlight text="team player" />, I feel the most satisfaction from my
          work by helping my teammates achieve their goals. I place a high value
          on <Highlight text="collaborative" /> environments. The most rewarding
          solutions are the ones built as a <Highlight text="team" />.
        </Typography>
        <Typography variant="body2">
          I consider myself a professional <Highlight text="problem solver" />.
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
