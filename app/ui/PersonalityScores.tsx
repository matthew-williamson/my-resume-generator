import { Psychology } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
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
    <Stack
      spacing={2}
      sx={{
        backgroundColor: "#1A1A1A",
        color: "white",
        height: "fit-content",
        minWidth: "40%",
        p: 2,
        borderRadius: 2,
      }}
    >
      <Stack
        direction="row"
        spacing={1}
        sx={{ alignItems: "center", color: "#99CCFF" }}
      >
        <Psychology />
        <Typography variant="h5">Big 5 Personality Scores</Typography>
      </Stack>
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
              axisLabel: { padding: 13, fontSize: 12, fill: "#99CCFF" },
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
          style={{ data: { fill: "rgba(153, 204, 255, 0.5)" } }}
        />
      </VictoryChart>
    </Stack>
  );
}
