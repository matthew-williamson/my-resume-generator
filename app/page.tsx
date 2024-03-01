"use client";

import { Stack } from "@mui/material";

import "./globals.scss";

import Header from "./ui/Header";
import OccupationHistory from "./ui/OccupationHistory";
import YearsBySkillGraph from "./ui/YearsBySkillGraph";
import Notes from "./ui/Notes";
import useWindowSize from "./ui/hooks/useWindowSize";
import PersonalityScores from "./ui/PersonalityScores";

export default function Page() {
  const windowSize = useWindowSize();
  return (
    <Stack gap={2} p={2}>
      <Header />
      <Notes />
      <Stack
        spacing={2}
        direction={!windowSize.width || windowSize.width > 1000 ? "row" : "column"}
        sx={{ justifyContent: "space-between" }}
      >
        <OccupationHistory />
        <Stack spacing={2}>
          <PersonalityScores />
          <YearsBySkillGraph />
        </Stack>
      </Stack>
    </Stack>
  );
}
