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

const alphabeticalSortedSkills = [...skillsInExperiences].sort((a, b) =>
  a > b ? 1 : -1,
);

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

const timeSortedSkills = [...skillsInExperiences].sort((a, b) =>
  timeBySkill[a] < timeBySkill[b] ? 1 : -1,
);

const SkillRow = ({
  skill,
  yearWidthInPixels,
}: {
  skill: Skill;
  yearWidthInPixels: number;
}) => {
  const experiencesWithSkill = experiences.filter((e) =>
    e.skills.includes(skill),
  );

  const barPieces = experiencesWithSkill.map((experience) => {
    const endTimestamp = experience.endDate
      ? experience.endDate.getTime()
      : Date.now();
    const yearsInMS = endTimestamp - experience.startDate.getTime();
    const years = millisecondsToYears(yearsInMS);
    const width = years * yearWidthInPixels;
    return (
      <Tooltip
        key={`${experience.company.name}-${experience.color}-${skill}-tooltip`}
        title={`${skill} experience at ${experience.company.name} for ${years} year${years === 1 ? "" : "s"}`}
      >
        <Box
          sx={{
            minWidth: `${width}px`,
            height: 12,
            backgroundColor: experience.color,
            zIndex: 999,
            cursor: "pointer",
            ":hover": {
              opacity: 0.9,
            },
          }}
        />
      </Tooltip>
    );
  });

  return (
    <Stack direction="row" key={`${skill}-row`}>
      <Typography variant="caption" sx={{ width: 200, color: '#99CCFF' }} className="skill-label">
        {skill}
      </Typography>
      {barPieces}
    </Stack>
  );
};

export default function YearsBySkillGraph() {
  const skillGraphRef = useRef<HTMLDivElement>(null);
  const windowSize = useWindowSize();
  const scroll = useWindowScroll();
  const [skillGraphBounds, setSkillGraphBounds] = useState<DOMRect>();

  useEffect(() => {
    if (!skillGraphRef.current) {
      return;
    }

    setSkillGraphBounds(skillGraphRef.current.getBoundingClientRect());
  }, [skillGraphRef, windowSize.width, scroll]);

  const yearWidthInPixels = useMemo(() => {
    const width = windowSize.width;
    const widthAvailable = width > 1000 ? width * 0.6 - 400 : width - 400;
    return widthAvailable / totalYears;
  }, [windowSize]);

  const legend = useMemo(() => {
    const yearSegments = [];
    for (let i = 0; i < totalYears; i += 1) {
      yearSegments.push(
        <Stack
          key={`${i}-year-${yearWidthInPixels}`}
          direction="row"
          spacing={1}
          sx={{ alignItems: "center" }}
          className="year-label"
        >
          <Typography variant="caption" sx={{ width: yearWidthInPixels }}>
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
  }, [yearWidthInPixels]);

  const calculatedGrid = useMemo(() => {
    if (!skillGraphBounds) {
      return;
    }

    try {
      const dividers = [];
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
              left: `calc(${labelBounds.left}px - ${skillGraphBounds.left}px)`,
              marginTop: `${labelBounds.height}px`,
              top: `16px`,
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
  }, [skillGraphBounds]);

  const [sort, setSort] = useState("alpha");
  const handleSortChange = useCallback(
    (event: React.MouseEvent, newSort: string) => {
      if (newSort) {
        setSort(newSort);
      }
    },
    [],
  );

  const sortedSkills = useMemo(() => {
    if (sort === "alpha") {
      return alphabeticalSortedSkills;
    }

    return timeSortedSkills;
  }, [sort]);

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
      <Stack
        spacing={0.2}
        ref={skillGraphRef}
        sx={{ width: "100%", position: "relative" }}
      >
        {legend}
        {sortedSkills.map((s) => (
          <SkillRow skill={s} key={s} yearWidthInPixels={yearWidthInPixels} />
        ))}
        {calculatedGrid}
      </Stack>
    </Stack>
  );
}
