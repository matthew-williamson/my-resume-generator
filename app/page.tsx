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

const SectionHeader = ({
  text,
  color = "cyan",
}: {
  text: string;
  color?: "cyan" | "amber";
}) => {
  const lineColor = color === "cyan" ? THEME.SECONDARY : THEME.PRIMARY_FULL;
  const glowColor =
    color === "cyan" ? "rgba(129, 212, 250, 0.3)" : "rgba(255, 183, 77, 0.3)";

  return (
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
          background: `linear-gradient(to right, transparent, ${lineColor})`,
          opacity: 0.3,
        }}
      />
      <Typography
        variant="h5"
        sx={{
          color: lineColor,
          textAlign: "center",
          fontWeight: 300,
          letterSpacing: 1,
          textShadow: `0 0 20px ${glowColor}`,
        }}
      >
        {text}
      </Typography>
      <Stack
        sx={{
          flex: 1,
          height: "1px",
          background: `linear-gradient(to left, transparent, ${lineColor})`,
          opacity: 0.3,
        }}
      />
    </Stack>
  );
};

export default function Page() {
  return (
    <Stack
      gap={4}
      px={2}
      py={4}
      sx={{ maxWidth: 1200, mx: "auto", position: "relative" }}
    >
      <Header />
      <SectionHeader text="About Me" color="cyan" />
      <Stack
        gap={4}
        sx={{ width: "100%", flexDirection: { xs: "column", md: "row" } }}
      >
        <AboutMe />
        <SkillRadar />
      </Stack>
      <SectionHeader text="What I'm Looking For" color="amber" />
      <WhatDrivesMe />
      <SectionHeader text="Bug Invaders React Game" color="cyan" />
      <BugInvaders />
      <SectionHeader text="Experiences" color="amber" />
      <Experiences />
    </Stack>
  );
}
