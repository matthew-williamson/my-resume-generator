"use client";

import {
  Box,
  Divider,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Tooltip,
  Typography,
} from "@mui/material";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import _ from "lodash";

import { experiences } from "../lib/constants";
import { millisecondsToYears } from "../lib/helpers";
import { Skill } from "../lib/types";
import useWindowSize from "./hooks/useWindowSize";
import useWindowScroll from "./hooks/useWindowScroll";
import { CalendarMonth, ShowChart, SortByAlpha } from "@mui/icons-material";
import { VictoryChart } from "victory-chart";
import { VictoryAxis } from "victory-axis";
import { VictoryStack } from "victory-stack";
import { VictoryBar } from "victory-bar";
import { VictoryLabel, VictoryTheme } from "victory-core";

const firstExperience = experiences[0];
const lastExperience = experiences[experiences.length - 1];
const endTimestamp = lastExperience.endDate
  ? lastExperience.endDate.getTime()
  : Date.now();
const yearsInMS = endTimestamp - firstExperience.startDate.getTime();
const totalYears = millisecondsToYears(yearsInMS);

const skillsInExperiences = _.uniq(
  experiences.reduce((acc, e) => {
    acc.push(...e.skills);
    return acc;
  }, [] as Skill[]),
);

const alphaSort = (a: Skill, b: Skill) => a > b ? 1 : -1;

const timeSort = (a: Skill, b: Skill) => timeBySkill[a] < timeBySkill[b] ? 1 : -1;

const timeBySkill = experiences.reduce(
  (acc, experience) => {
    const endTimestamp = experience.endDate
      ? experience.endDate.getTime()
      : Date.now();
    const yearsInMS = endTimestamp - experience.startDate.getTime();
    experience.skills.forEach((skill) => {
      if (!acc[skill]) {
        acc[skill] = 0;
      }
      acc[skill] += yearsInMS;
    });
    return acc;
  },
  {} as Record<string, number>,
);


export default function YearsBySkillGraph() {
  const windowSize = useWindowSize();
  const [initialWindowSize, setInitialWindowSize] = useState(0);
  useEffect(() => {
    setInitialWindowSize(window.innerWidth);
  }, []);
  const width = windowSize.width ?? initialWindowSize;

  const [sort, setSort] = useState("years");
  const handleSortChange = useCallback(
    (event: React.MouseEvent, newSort: string) => {
      if (newSort) {
        setSort(newSort);
      }
    },
    [],
  );

  let skillBars = [...skillsInExperiences].sort(sort === 'alpha' ? alphaSort : timeSort).map((skill) => {
    return (
      <VictoryBar
        key={`${skill}-bar`}
        style={{ data: { fill: "#99CCFF", width: 8 } }}
        data={[{ x: skill, y: millisecondsToYears(timeBySkill[skill]) }]}
      />
    )
  });

  if (width < 1000) {
    skillBars = skillBars.reverse();
  }

  return (
    <Stack
      spacing={2}
      sx={{
        backgroundColor: "#1A1A1A",
        color: "white",
        height: "fit-content",
        p: 2,
        borderRadius: 2,
      }}
    >
      <Stack
        direction="row"
        sx={{ alignItems: "center", justifyContent: "space-between" }}
      >
        <Stack
          direction="row"
          spacing={1}
          sx={{ alignItems: "center", color: "#99CCFF" }}
        >
          <ShowChart />
          <Typography variant="h5">Skills x Years</Typography>
        </Stack>
        <ToggleButtonGroup
          value={sort}
          exclusive
          onChange={handleSortChange}
          sx={{ height: 28 }}
        >
          <ToggleButton
            value="alpha"
            sx={{ backgroundColor: "white", ":hover": { opacity: 0.9 } }}
          >
            <SortByAlpha />
          </ToggleButton>
          <ToggleButton value="years" sx={{ backgroundColor: "white" }}>
            <CalendarMonth />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
      <Stack>
      <VictoryChart
    horizontal={width > 1000 ? false : true}
    padding={{ top: 50, bottom: width > 1000 ? 200 : 50, left: width > 1000 ? 50 : 200, right: 50 }}
    colorScale={"blue"}
    height={width > 1000 ? 500 : 1000}
    width={1000}

  >
    <VictoryAxis dependentAxis tickFormat={(tick) => `${tick}`} style={{ tickLabels: { fill:"#99CCFF"} }} />
    <VictoryAxis tickLabelComponent={<VictoryLabel verticalAnchor="middle" textAnchor="end" />} style={{ tickLabels: { fill:"#99CCFF", angle: width > 1000 ? -80 : 0,  } }} />
      {skillBars}
  </VictoryChart>
  </Stack>
    </Stack>
  );
}
