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

export default function Page() {
  const windowSize = useWindowSize();
  const [initialWindowSize, setInitialWindowSize] = useState(0);
  useEffect(() => {
    setInitialWindowSize(window.innerWidth);
  }, []);
  const width = windowSize.width ?? initialWindowSize;

  return (
    <Stack gap={2} p={2}>
      <Header />
      <Notes />
      {!width ? (
        <LinearProgress />
      ): (
      <Stack
        spacing={2}
        direction={width > 1000 ? "row" : "column"}
        sx={{ justifyContent: "space-between" }}
      >
        <OccupationHistory />
        <Stack spacing={2}>
          <PersonalityScores />
          <YearsBySkillGraph />
        </Stack>
      </Stack>)}
    </Stack>
  );
}
