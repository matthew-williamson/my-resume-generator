"use client";

import { Avatar, Box, Card, Divider, Stack, Typography } from "@mui/material";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryStack,
  VictoryLabel,
} from "victory";
import { ReactElement, useEffect, useMemo, useRef, useState } from "react";
import _ from "lodash";

import "./globals.scss";

import { experiences } from "./lib/constants";
import { Skill } from "./lib/types";
import { millisecondsToYears } from "./lib/helpers";

// TODO: Make width of chart dynamic and depend on how much space is available.
// TODO: Make graph resize-proof
// TODO: Use solid blocks for graph.
const YEAR_WIDTH_IN_PIXELS = 65;

const skillsInExperiences = _.uniq(
  experiences.reduce((acc, e) => {
    acc.push(...e.skills);
    return acc;
  }, [] as Skill[]),
);

const firstExperience = experiences[0];
const lastExperience = experiences[experiences.length - 1];
const endTimestamp = lastExperience.endDate
  ? lastExperience.endDate.getTime()
  : Date.now();
const yearsInMS = endTimestamp - firstExperience.startDate.getTime();
const totalYears = millisecondsToYears(yearsInMS);

const skillRows = skillsInExperiences
  .toSorted((a, b) => (a > b ? 1 : -1))
  .map((skill) => {
    const experiencesWithSkill = experiences.filter((e) =>
      e.skills.includes(skill),
    );

    const barPieces = experiencesWithSkill.map((experience) => {
      const endTimestamp = experience.endDate
        ? experience.endDate.getTime()
        : Date.now();
      const yearsInMS = endTimestamp - experience.startDate.getTime();
      const years = millisecondsToYears(yearsInMS);
      const width = years * YEAR_WIDTH_IN_PIXELS;
      return (
        <Box
          sx={{
            minWidth: `${width}px !important`,
            height: 12,
            backgroundColor: experience.color,
            zIndex: 999,
            cursor: "pointer",
            ":hover": {
              opacity: 0.9,
            },
          }}
          key={`${experience.company.name}-${experience.color}-${skill}-box`}
        />
      );
    });

    return (
      <Stack direction="row" key={`${skill}-row`}>
        <Typography
          variant="caption"
          sx={{ width: 200 }}
          className="skill-label"
        >
          {skill}
        </Typography>
        {barPieces}
      </Stack>
    );
  });

const experienceCards = experiences.toReversed().map((e) => {
  return (
    <Card key={`${e.company.name}-experience-card-${e.color}`} sx={{ p: 2 }}>
      <Stack>
        <Typography>
          {e.company.name}
        </Typography>
        <Typography variant='caption'>
          {e.title}
        </Typography>
        <Typography variant='caption'>
          {e.startDisplay} - {e.endDisplay ?? 'Current'}
        </Typography>
      </Stack>
    </Card>
  )
});

export default function Page() {
  const legend = useMemo(() => {
    const yearSegments = [];
    for (let i = 0; i < totalYears; i += 1) {
      yearSegments.push(
        <Stack
          key={`${i}-year`}
          direction="row"
          spacing={1}
          sx={{ alignItems: "center" }}
          className="year-label"
        >
          <Typography variant="caption" sx={{ width: YEAR_WIDTH_IN_PIXELS }}>
            {i} Year{i !== 1 ? "s" : ""}
          </Typography>
        </Stack>,
      );
    }

    return (
      <Stack direction="row" sx={{ mt: 2 }}>
        <Box sx={{ width: 200, display: "flex", height: 1 }} />
        {yearSegments}
      </Stack>
    );
  }, [totalYears]);

  const skillGraphRef = useRef<HTMLDivElement>(null);
  const [calculateGrid, setCalculateGrid] = useState(false);
  useEffect(() => {
    setCalculateGrid(true);
  }, [skillGraphRef.current]);

  const calculatedGrid = useMemo(() => {
    if (!skillGraphRef.current) {
      return;
    }

    try {
      const dividers = [];
      const skillGraphBounds = skillGraphRef?.current?.getBoundingClientRect();
      const yearLabels = Array.from(
        document.getElementsByClassName("year-label"),
      );
      for (const label of yearLabels) {
        const labelBounds = label.getBoundingClientRect();
        dividers.push(
          <Divider
            key={`${label.innerHTML}`}
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.16)",
              position: "absolute",
              left: labelBounds.left,
              marginTop: `${labelBounds.height}px`,
              top: `${skillGraphBounds.top}px`,
              height: `calc(${skillGraphBounds.height}px - ${labelBounds.height}px - 8px)`,
              width: "1px",
            }}
          />,
        );
      }
      return dividers;
    } catch (error) {
      console.error(error);
      return null;
    }
  }, [calculateGrid]);

  return (
    <Stack gap={2}>
      <Stack
        direction="row"
        spacing={1}
        sx={{
          alignItems: "center",
          backgroundColor: "#1A1A1A",
          borderRadius: 2,
          p: 2
        }}
      >
        <Avatar sx={{ width: 100, height: 100 }}>
          <img src="./matt_williamson.jpg" width={100} alt="matt headshot" />
        </Avatar>
        <Stack>
          <Typography variant="h5">Matthew Williamson</Typography>
          <Typography variant="caption">Senior Software Engineer</Typography>
          <Typography variant="caption">Scottsdale, AZ</Typography>
        </Stack>
      </Stack>
      <Stack direction="row" sx={{ justifyContent: "space-between" }}>
        <Stack
          sx={{
            backgroundColor: "#1A1A1A",
            width: "100%",
            borderRadius: 2,
            p: 2,
            mr: 2,
          }}
          spacing={2}
        >
          {experienceCards}
        </Stack>
        <Stack
          spacing={2}
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.16)",
            color: "white",
            p: 2,
            borderRadius: 2,
          }}
        >
          <Stack
            sx={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography>Experience Level by Skill Graph</Typography>
          </Stack>
          <Stack spacing={0.2} ref={skillGraphRef}>
            {legend}
            {skillRows}
          </Stack>
        </Stack>
        {calculatedGrid}
      </Stack>
    </Stack>
  );
}
