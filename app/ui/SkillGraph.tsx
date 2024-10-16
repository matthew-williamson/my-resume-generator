"use client";

import {
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import React, { useCallback, useMemo, useState } from "react";
import _ from "lodash";

import {
  backEndSkillsInExperiences,
  backEndTimeBySkill,
  frontEndSkillsInExperiences,
  frontEndTimeBySkill,
  generalTechnicalSkillsInExperiences,
  generalTechnicalTimeBySkill,
  softSkillsInExperiences,
  softTimeBySkill,
} from "../lib/constants";
import { alphaSort, timeSort } from "../lib/helpers";
import { ChartType, Skill } from "../lib/types";
import { CalendarMonth, SortByAlpha } from "@mui/icons-material";
import { VictoryChart } from "victory-chart";
import { VictoryAxis } from "victory-axis";
import { VictoryBar } from "victory-bar";
import { VictoryLabel } from "victory-core";
import { VictoryTooltip } from "victory";
import CollapsibleSection from "./shared/CollapsibleSection";
import { THEME } from "../lib/theme";

const Chart = ({
  type,
  sort,
}: {
  type: ChartType;
  sort: "alpha" | "years";
}) => {
  const skillBars = useMemo(() => {
    let skillsInExperiences: Skill[] = [];
    let timeBySkill: Record<string, number> = {};
    switch (type) {
      case ChartType.FrontEnd: {
        skillsInExperiences = frontEndSkillsInExperiences;
        timeBySkill = frontEndTimeBySkill;
        break;
      }
      case ChartType.BackEnd: {
        skillsInExperiences = backEndSkillsInExperiences;
        timeBySkill = backEndTimeBySkill;
        break;
      }
      case ChartType.General: {
        skillsInExperiences = generalTechnicalSkillsInExperiences;
        timeBySkill = generalTechnicalTimeBySkill;
        break;
      }
      case ChartType.Soft: {
        skillsInExperiences = softSkillsInExperiences;
        timeBySkill = softTimeBySkill;
        break;
      }
      default: {
        break;
      }
    }

    if (!skillsInExperiences || !timeBySkill) {
      return null;
    }

    const barWidth = 1000 / skillsInExperiences.length - 15;

    let skillBars = [...skillsInExperiences]
      .sort(
        sort === "alpha" ? alphaSort : (a, b) => timeSort(a, b, timeBySkill),
      )
      .map((skill) => {
        return (
          <VictoryBar
            key={`${skill}-bar`}
            barWidth={barWidth}
            style={{ data: { fill: THEME.PRIMARY } }}
            data={[{ x: skill, y: timeBySkill[skill] }]}
            labelComponent={
              <VictoryTooltip
                flyoutStyle={{
                  stroke: THEME.WHITE,
                  fill: THEME.SECONDARY,
                }}
                style={{
                  stroke: THEME.WHITE,
                }}
              />
            }
            labels={({ datum }) => `${parseFloat(datum.y.toFixed(1))} years`}
          />
        );
      });

    return skillBars;
  }, [sort, type]);

  return (
    <Stack sx={{ alignItems: "center" }} spacing={1}>
      <VictoryChart
        padding={{
          top: 50,
          bottom: 200,
          left: 50,
          right: 50,
        }}
        domainPadding={{ x: 40 }}
        height={500}
        width={1000}
        animate={{ easing: "linear" }}
      >
        <VictoryAxis
          dependentAxis
          tickFormat={(tick) => `${tick}`}
          style={{
            tickLabels: { fill: THEME.SECONDARY },
            axis: { stroke: THEME.SECONDARY },
            grid: { stroke: THEME.SECONDARY, strokeWidth: 1.5 },
          }}
        />
        <VictoryAxis
          tickLabelComponent={
            <VictoryLabel verticalAnchor="middle" textAnchor="end" />
          }
          style={{
            tickLabels: { fill: THEME.SECONDARY, angle: -80 },
            axis: { stroke: THEME.SECONDARY },
          }}
        />
        {skillBars}
      </VictoryChart>
    </Stack>
  );
};

export default function SkillGraph({
  label,
  type,
}: {
  label: string;
  type: ChartType;
}) {
  const [sort, setSort] = useState<"alpha" | "years">("years");
  const handleSortChange = useCallback(
    (event: React.MouseEvent, newSort: "alpha" | "years") => {
      if (newSort) {
        setSort(newSort);
      }
    },
    [],
  );

  return (
    <CollapsibleSection
      header={
        <Typography variant="h5" sx={{ color: THEME.WHITE }}>
          {label}
        </Typography>
      }
    >
      <Stack
        spacing={2}
        sx={{
          height: "fit-content",
        }}
      >
        <Stack
          direction="row"
          sx={{
            justifyContent: "end",
            pr: 2,
            pt: 2,
          }}
        >
          <ToggleButtonGroup
            value={sort}
            exclusive
            onChange={handleSortChange}
            sx={{ height: 28 }}
          >
            <ToggleButton
              value="alpha"
              sx={{ backgroundColor: THEME.PRIMARY_LIGHT }}
            >
              <SortByAlpha />
            </ToggleButton>
            <ToggleButton
              value="years"
              sx={{ backgroundColor: THEME.PRIMARY_LIGHT }}
            >
              <CalendarMonth />
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
        <Chart type={type} sort={sort} />
      </Stack>
    </CollapsibleSection>
  );
}
