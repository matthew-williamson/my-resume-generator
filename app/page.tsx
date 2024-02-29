"use client";

import { Stack } from "@mui/material";

import "./globals.scss";

import Header from "./ui/Header";
import OccupationHistory from "./ui/OccupationHistory";
import YearsBySkillGraph from "./ui/YearsBySkillGraph";

export default function Page() {
  return (
    <Stack gap={2} p={2}>
      <Header />
      <Stack direction="row" sx={{ justifyContent: "space-between" }}>
        <OccupationHistory />
        <YearsBySkillGraph />
      </Stack>
    </Stack>
  );
}
