"use client";

import { Stack } from "@mui/material";

import "./globals.scss";

import Header from "./ui/Header";
import Experiences from "./ui/Experiences";
import AboutMe from "./ui/AboutMe";
import BugInvaders from "./ui/games/BugInvaders";
import SkillGraph from "./ui/SkillGraph";
import { ChartType } from "./lib/types";
import WorkplaceIdeals from "./ui/WorkplaceIdeals";

export default function Page() {
  return (
    <Stack
      gap={2}
      p={2}
      sx={{ maxWidth: 1200, mx: "auto", position: "relative" }}
    >
      <Header />
      <AboutMe />
      <WorkplaceIdeals />
      <Experiences />
      <SkillGraph type={ChartType.FrontEnd} label="Front End Skill Graph" />
      <SkillGraph type={ChartType.BackEnd} label="Back End Skill Graph" />
      <SkillGraph type={ChartType.General} label="General Skill Graph" />
      <SkillGraph type={ChartType.Soft} label="Soft Skill Graph" />
      <BugInvaders />
    </Stack>
  );
}
