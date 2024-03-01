import { Box, Divider, Stack, Typography } from "@mui/material";
import { Edit } from "@mui/icons-material";

export default function Notes() {
  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{
        backgroundColor: "#1A1A1A",
        borderRadius: 2,
        p: 2,
      }}
    >
      <Stack spacing={1}>
        <Stack
          direction="row"
          spacing={1}
          sx={{ alignItems: "center", color: "#99CCFF" }}
        >
          <Edit />
          <Typography variant="h5">Purpose</Typography>
        </Stack>
        <Typography
          variant="caption"
          sx={{ color: "#99CCFF" }}
        >
          This UI was purpose-built from scratch by me using React, TypeScript,
          Next.js, MUI, Victory Charts, HTML, and CSS as a way for me to
          demonstrate my ability.
        </Typography>
        <Typography variant="caption">
          As I gain more experiences and skills, I find it increasingly
          difficult to write a succinct traditional resume that conveys the
          depth and breadth of my abilities. I also find it helpful to visualize
          skills with context rather than just raw text. This online resume is a
          way for me to not only TELL about my skills, but also SHOW them. Hope
          you enjoy!
        </Typography>
        <Divider sx={{ backgroundColor: '#99CCFF' }} />
        <Typography variant="caption">
          The things I look for in my place of work:
        </Typography>
        <Stack direction="row" spacing={1} sx={{ position: "relative" }}>
          <Box sx={{ position: "absolute", top: -3, color: "#99CCFF" }}>○</Box>
          <Typography variant="caption" sx={{ pl: 1 }}>
            Collaborative environment.
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1} sx={{ position: "relative" }}>
          <Box sx={{ position: "absolute", top: -3, color: "#99CCFF" }}>○</Box>
          <Typography variant="caption" sx={{ pl: 1 }}>
            Ability to mentor junior developers.
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1} sx={{ position: "relative" }}>
          <Box sx={{ position: "absolute", top: -3, color: "#99CCFF" }}>○</Box>
          <Typography variant="caption" sx={{ pl: 1 }}>
            License to explore and learn about alternative technologies and solutions.
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1} sx={{ position: "relative" }}>
          <Box sx={{ position: "absolute", top: -3, color: "#99CCFF" }}>○</Box>
          <Typography variant="caption" sx={{ pl: 1 }}>
            Ideally a faster paced environment.
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1} sx={{ position: "relative" }}>
          <Box sx={{ position: "absolute", top: -3, color: "#99CCFF" }}>○</Box>
          <Typography variant="caption" sx={{ pl: 1 }}>
            Knowing what I am working on is business critical or customer critical.
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1} sx={{ position: "relative" }}>
          <Box sx={{ position: "absolute", top: -3, color: "#99CCFF" }}>○</Box>
          <Typography variant="caption" sx={{ pl: 1 }}>
            Fun!
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
