"use client";

import { Stack, Typography } from "@mui/material";

import "./globals.scss";

import Header from "./ui/Header";
import Experiences from "./ui/Experiences";
import AboutMe from "./ui/AboutMe";
import BugInvaders from "./ui/games/BugInvaders";
import WhatDrivesMe from "./ui/WhatDrivesMe";
import SkillRadar from "./ui/SkillRadar";
import { THEME } from "./lib/theme";

const SectionHeader = ({ text }: { text: string }) => (
  <Stack
    direction="row"
    spacing={2}
    sx={{
      alignItems: "center",
      width: "100%",
      py: 2,
    }}
  >
    <Stack
      sx={{
        flex: 1,
        height: "1px",
        backgroundColor: THEME.SECONDARY,
        opacity: 0.2,
      }}
    />
    <Typography
      variant="h5"
      sx={{
        color: THEME.SECONDARY,
        textAlign: "center",
        fontWeight: 300,
        letterSpacing: 1,
      }}
    >
      {text}
    </Typography>
    <Stack
      sx={{
        flex: 1,
        height: "1px",
        backgroundColor: THEME.SECONDARY,
        opacity: 0.2,
      }}
    />
  </Stack>
);

export default function Page() {
  return (
    <Stack
      gap={4}
      p={4}
      sx={{ maxWidth: 1200, mx: "auto", position: "relative" }}
    >
      <Header />
      <SectionHeader text="About Me" />
      <Stack
        gap={4}
        sx={{ width: "100%", flexDirection: { xs: "column", md: "row" } }}
      >
        <AboutMe />
        <SkillRadar />
      </Stack>
      <SectionHeader text="What I'm Looking For" />
      <WhatDrivesMe />
      <SectionHeader text="Bug Invaders React Game" />
      <BugInvaders />
      <SectionHeader text="Experiences" />
      <Experiences />
    </Stack>
  );
}
