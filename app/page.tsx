"use client";

import { LinearProgress, Stack } from "@mui/material";

import "./globals.scss";

import Header from "./ui/Header";
import OccupationHistory from "./ui/OccupationHistory";
import AboutMe from "./ui/AboutMe";
import useWindowSize from "./ui/hooks/useWindowSize";
import PersonalityScores from "./ui/PersonalityScores";
import { useEffect, useState } from "react";
import BugInvaders from "./ui/games/BugInvaders";
import SkillGraph from "./ui/SkillGraph";
import { ChartType } from "./lib/types";
import RoleIdeals from "./ui/RoleIdeals";

export default function Page() {
  const windowSize = useWindowSize();
  const [initialWindowSize, setInitialWindowSize] = useState(0);
  useEffect(() => {
    setInitialWindowSize(window.innerWidth);
  }, []);
  const width = windowSize.width ?? initialWindowSize;

  if (!width) {
    return <LinearProgress />;
  }

  return (
    <Stack
      gap={2}
      p={2}
      sx={{ maxWidth: 1200, mx: "auto", position: "relative" }}
    >
      <Header />
      <AboutMe />
      <RoleIdeals />
      <BugInvaders />
      <SkillGraph type={ChartType.FrontEnd} label="Front End x Years" />
      <SkillGraph type={ChartType.BackEnd} label="Back End x Years" />
      <SkillGraph type={ChartType.General} label="General x Years" />
      <SkillGraph type={ChartType.Soft} label="Soft x Years" />
      <OccupationHistory />
    </Stack>
  );
}
