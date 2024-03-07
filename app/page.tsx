"use client";

import { LinearProgress, Stack } from "@mui/material";

import "./globals.scss";

import Header from "./ui/Header";
import OccupationHistory from "./ui/OccupationHistory";
import Notes from "./ui/Notes";
import useWindowSize from "./ui/hooks/useWindowSize";
import PersonalityScores from "./ui/PersonalityScores";
import { useEffect, useState } from "react";
import BugInvaders from "./ui/games/BugInvaders";
import SkillGraph from "./ui/SkillGraph";
import { ChartType } from "./lib/types";

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
    <Stack gap={2} p={2} sx={{ maxWidth: 1200, mx: "auto" }}>
      <Header />
      <Stack
        sx={{ justifyContent: "space-between" }}
        direction={width < 1000 ? "column" : "row"}
        gap={2}
      >
        <Notes />
        <PersonalityScores />
      </Stack>
      <BugInvaders />
      <SkillGraph type={ChartType.FrontEnd} label="Front End x Years" />
      <SkillGraph type={ChartType.BackEnd} label="Back End x Years" />
      <SkillGraph type={ChartType.General} label="General x Years" />
      <SkillGraph type={ChartType.Soft} label="Soft x Years" />
      <OccupationHistory />
    </Stack>
  );
}
