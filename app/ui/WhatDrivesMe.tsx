/* eslint-disable react/no-unescaped-entities */
import { Stack, Typography } from "@mui/material";
import Highlight from "./shared/Highlight";
import { THEME } from "../lib/theme";

export default function WhatDrivesMe() {
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
        I want to work somewhere <Highlight text="collaborative" />. I can't
        level up or help others grow without good teamwork. A place where{" "}
        <Highlight text="mentoring" /> is valued and people actually want to{" "}
        <Highlight text="learn from each other" />.
      </Typography>
      <Typography variant="body2">
        I like <Highlight text="fast-paced environments" />. I've got a startup
        mindset and I do my best work when things are moving. Give me room to{" "}
        <Highlight text="explore new tech" /> and try different solutions
        instead of just doing things the way they've always been done.
      </Typography>
      <Typography variant="body2">
        I need to know the work matters. Whether it's{" "}
        <Highlight text="business critical" /> or{" "}
        <Highlight text="customer facing" />, I want to build things that
        actually make a difference.
      </Typography>
      <Typography variant="body2">
        Most importantly, I want <Highlight text="teammates who care" />. People
        who care about the work, about each other, and about what we're building{" "}
        <Highlight text="together" />. And yeah, it should be{" "}
        <Highlight text="fun" /> too.
      </Typography>
    </Stack>
  );
}
