import { Box, Divider, Stack, Typography } from "@mui/material";
import { useEffect, useMemo, useRef, useState } from "react";
import _ from "lodash";

import { experiences } from "../lib/constants";
import { millisecondsToYears } from "../lib/helpers";
import { Skill } from "../lib/types";

const firstExperience = experiences[0];
const lastExperience = experiences[experiences.length - 1];
const endTimestamp = lastExperience.endDate
  ? lastExperience.endDate.getTime()
  : Date.now();
const yearsInMS = endTimestamp - firstExperience.startDate.getTime();
const totalYears = millisecondsToYears(yearsInMS);

const YEAR_WIDTH_IN_PIXELS = 65;

const skillsInExperiences = _.uniq(
  experiences.reduce((acc, e) => {
    acc.push(...e.skills);
    return acc;
  }, [] as Skill[]),
);

// TODO: Make width of chart dynamic and depend on how much space is available.
// TODO: Make graph resize-proof
// TODO: Use solid blocks for graph.

const SkillRow = ({ skill }: { skill: Skill }) => {
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
      <Typography variant="caption" sx={{ width: 200 }} className="skill-label">
        {skill}
      </Typography>
      {barPieces}
    </Stack>
  );
};

export default function YearsBySkillGraph() {
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
    <>
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
        <Typography variant="h5" sx={{ color: "#99CCFF" }}>
          Years of Experience by Skill
        </Typography>
        <Stack spacing={0.2} ref={skillGraphRef}>
          {legend}
          {skillsInExperiences.map((s) => (
            <SkillRow skill={s} key={s} />
          ))}
        </Stack>
      </Stack>
      {calculatedGrid}
    </>
  );
}
