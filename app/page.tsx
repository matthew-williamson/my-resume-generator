"use client";

import { Avatar, Box, Divider, Stack, Typography } from "@mui/material";
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
const YEAR_WIDTH_IN_PIXELS = 80;

const skillsInExperiences = _.uniq(
  experiences.reduce((acc, e) => {
    acc.push(...e.skills);
    return acc;
  }, [] as Skill[]),
);

const firstExperience = experiences[experiences.length - 1];
const lastExperience = experiences[0];
const endTimestamp = lastExperience.endDate
  ? lastExperience.endDate.getTime()
  : Date.now();
const yearsInMS = endTimestamp - firstExperience.startDate.getTime();
const totalYears = millisecondsToYears(yearsInMS);

const skillRows = skillsInExperiences.map((skill) => {
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
          zIndex: 999
        }}
        key={`${experience.company.name}-${experience.color}-${skill}-box`}
      />
    );
  });

  return (
    <Stack direction="row" key={`${skill}-row`}>
      <Typography variant="caption" sx={{ width: 200 }} className='skill-label'>
        {skill}
      </Typography>
      {barPieces}
    </Stack>
  );
});

export default function Page() {
  const legend = useMemo(() => {
    const yearSegments = [];
    for (let i = 0; i < totalYears; i += 1) {
      yearSegments.push(
        <Stack key={`${i}-year`} direction='row' spacing={1} sx={{ alignItems: 'center' }} className='year-label'>
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
      const yearLabels = Array.from(document.getElementsByClassName('year-label'));
      for (const label of yearLabels) {
        const labelBounds = label.getBoundingClientRect();
        dividers.push(
          <Divider
            key={`${label.innerHTML}`}
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              position: 'absolute',
              left: labelBounds.left,
              marginTop: `${labelBounds.height}px`,
              height: `calc(${skillGraphBounds.height}px - ${labelBounds.height}px - 8px)`,
              width: '1px',
            }}
          />
        )
      }
      return dividers;
    } catch (error) {
      console.error(error);
      return null;
    }
  }, [calculateGrid]);

  return (
    <Stack direction="row" sx={{ justifyContent: "space-between" }}>
      <Stack
        sx={{
          backgroundColor: "rgba(11, 11, 11, 0.5)",
          width: "100%",
          p: 2,
          mr: 2,
        }}
      >
        <Stack direction='row' spacing={1} sx={{ alignItems: 'center' }}>
        <Avatar>

    </Avatar>
<Typography variant="h5">Matthew Williamson</Typography>
        </Stack>
        <Typography variant="caption">Senior Software Engineer at Imagine Learning</Typography>
        <Typography variant="caption">Senior Software Engineer at Savvy Trader</Typography>
      </Stack>
      <Stack spacing={0.2} ref={skillGraphRef}>
        {legend}
        {skillRows}
      </Stack>
      {calculatedGrid}
    </Stack>
  );
}
