import { Box, Stack, Typography } from "@mui/material";
import {
  VictoryChart,
  VictoryPolarAxis,
  VictoryTheme,
  VictoryArea,
  VictoryLabel,
} from "victory";
import { bigFivePersonalityScores } from "../lib/constants";

export default function PersonalityScores() {
  return (
    <VictoryChart
      polar
      animate={{ easing: "linear" }}
      theme={VictoryTheme.material}
    >
      {bigFivePersonalityScores.map((dataPoint, index) => (
        <VictoryPolarAxis
          key={dataPoint.attribute}
          dependentAxis
          style={{
            axisLabel: {
              padding: 13,
              fontSize: 12,
              fill: "rgba(0, 100, 120, 1)",
            },
            axis: { stroke: "none" },
            grid: { stroke: "grey", strokeWidth: 0.25, opacity: 0.5 },
          }}
          tickLabelComponent={<VictoryLabel labelPlacement="vertical" />}
          labelPlacement="perpendicular"
          axisValue={index + 1}
          label={dataPoint.attribute}
          tickFormat={() => ""}
        />
      ))}
      <VictoryPolarAxis tickFormat={() => ""} />
      <VictoryArea
        data={bigFivePersonalityScores.map((d) => ({
          x: d.attribute,
          y: d.rating,
        }))}
        style={{ data: { fill: "rgba(80, 220, 120, 0.2)" } }}
      />
    </VictoryChart>
  );
}
