"use client";

import { Stack, Typography } from "@mui/material";
import {
  VictoryChart,
  VictoryPolarAxis,
  VictoryArea,
  VictoryGroup,
} from "victory";
import { THEME } from "../lib/theme";

const skillData = [
  { skill: "React", level: 9 },
  { skill: "TypeScript", level: 9 },
  { skill: "JavaScript", level: 9 },
  { skill: "Node.js", level: 9 },
  { skill: "Testing", level: 9 },
  { skill: "Leadership", level: 7 },
  { skill: "Cloud (AWS/Azure)", level: 5 },
  { skill: "C#/.NET", level: 7 },
  { skill: "HTML", level: 9 },
  { skill: "CSS", level: 7 },
  { skill: "Git", level: 8 },
];

export default function SkillRadar() {
  const data = skillData.map((item) => ({
    x: item.skill,
    y: item.level,
  }));

  return (
    <Stack
      spacing={2}
      sx={{
        color: THEME.WHITE,
        borderRadius: 2,
        backgroundColor: THEME.BLACK,
        minWidth: 320,
        p: 2,
        border: "1px solid rgba(255, 183, 77, 0.2)",
        background: `linear-gradient(135deg, ${THEME.BLACK} 0%, rgba(255, 183, 77, 0.15) 100%)`,
      }}
    >
      <Stack sx={{ alignItems: "center", width: "100%" }}>
        <VictoryChart
          polar
          height={400}
          width={400}
          padding={{ top: 60, bottom: 60, left: 60, right: 60 }}
          animate={{ easing: "linear" }}
        >
          <VictoryGroup
            colorScale={[THEME.PRIMARY]}
            style={{
              data: { fillOpacity: 0.3, strokeWidth: 2 },
            }}
          >
            <VictoryArea
              data={data}
              style={{
                data: {
                  fill: THEME.PRIMARY,
                  stroke: THEME.PRIMARY_FULL,
                  strokeWidth: 2,
                },
              }}
            />
          </VictoryGroup>
          {skillData.map((item, i) => (
            <VictoryPolarAxis
              key={i}
              dependentAxis
              style={{
                axisLabel: { padding: 10, fill: THEME.WHITE, fontSize: 12 },
                axis: { stroke: THEME.SECONDARY, strokeWidth: 0.5 },
                grid: {
                  stroke: THEME.SECONDARY,
                  strokeWidth: 0.5,
                  opacity: 0.5,
                },
                tickLabels: { fill: "transparent" },
              }}
              tickLabelComponent={<></>}
              tickValues={[2, 4, 6, 8, 10]}
              labelPlacement="perpendicular"
              axisValue={i + 1}
            />
          ))}
          <VictoryPolarAxis
            labelPlacement="parallel"
            tickValues={skillData.map((_, i) => i + 1)}
            tickFormat={skillData.map((item) => item.skill)}
            style={{
              axis: { stroke: "none" },
              grid: { stroke: THEME.SECONDARY, strokeWidth: 0.5, opacity: 0.3 },
              tickLabels: {
                fill: THEME.WHITE,
                fontSize: 11,
                fontWeight: 600,
              },
            }}
          />
        </VictoryChart>
        <Typography
          variant="caption"
          sx={{ color: THEME.WHITE, opacity: 0.7, mt: 1, textAlign: "center" }}
        >
          Proficiency levels (1-10 scale)
        </Typography>
      </Stack>
    </Stack>
  );
}
