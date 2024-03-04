"use client";

import { LinearProgress, Skeleton, Stack } from "@mui/material";

import "./globals.scss";

import Header from "./ui/Header";
import OccupationHistory from "./ui/OccupationHistory";
import YearsBySkillGraph from "./ui/YearsBySkillGraph";
import Notes from "./ui/Notes";
import useWindowSize from "./ui/hooks/useWindowSize";
import PersonalityScores from "./ui/PersonalityScores";
import { useEffect, useState } from "react";
import BugInvaders from "./ui/games/BugInvaders";

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
      <YearsBySkillGraph />
      <OccupationHistory />
    </Stack>
  );
}
