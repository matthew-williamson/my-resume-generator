/* eslint-disable react/no-unescaped-entities */
import { Stack, Typography } from "@mui/material";
import Highlight from "./shared/Highlight";
import { THEME } from "../lib/theme";

export default function AboutMe() {
  return (
    <Stack
      spacing={2}
      sx={{
        color: THEME.WHITE,
        borderRadius: 2,
        backgroundColor: THEME.BLACK,
        p: 2,
        border: "1px solid rgba(129, 212, 250, 0.2)",
        background: `linear-gradient(135deg, ${THEME.BLACK} 0%, rgba(129, 212, 250, 0.15) 100%)`,
      }}
    >
      <Typography variant="body2">
        Welcome to my <Highlight text="living resume" />! I'm{" "}
        <Highlight text="Matthew Williamson" />, and I've spent the last{" "}
        <Highlight text="8+ years" /> building software that people actually
        use. <Highlight text="SaaS web apps" /> serving thousands of users, the{" "}
        <Highlight text="GitKraken desktop app" /> used by developers worldwide,
        internal tools that keep businesses running. You name it.
      </Typography>
      <Typography variant="body2">
        I'm a <Highlight text="Technical Lead" /> who cares a lot about{" "}
        <Highlight text="clean code" /> and <Highlight text="testing" />. But
        what really gets me going is <Highlight text="solving hard problems" />{" "}
        and <Highlight text="helping people grow" />. Watching someone level up
        after a good code review or pairing session is the best part of my job.
      </Typography>
      <Typography variant="body2">
        My next step is moving into <Highlight text="engineering leadership" />.
        Whether that's <Highlight text="Team Lead" />,{" "}
        <Highlight text="Principal Engineer" />, or{" "}
        <Highlight text="Engineering Manager" />, I want to be somewhere I can
        make an impact both technically and by helping the people around me get
        better.
      </Typography>
      <Typography variant="body2">
        Tech wise, I'm a <Highlight text="problem solver" /> before anything
        else. Not really attached to any specific stack. My usual tools are{" "}
        <Highlight text="TypeScript" />, <Highlight text="React" />,{" "}
        <Highlight text="Node.js" />, <Highlight text="AWS or Azure" />, and
        whatever database fits the problem (<Highlight text="SQL or NoSQL" />
        ). I can work across the full stack but I do lean more frontend.
      </Typography>
      <Typography variant="body2">
        I built this site from scratch with{" "}
        <Highlight text="Next.js, TypeScript, React, MUI, and Victory Charts" />
        . Figured if I'm going to have a resume, might as well make it
        interesting.
      </Typography>
    </Stack>
  );
}
