import { Stack, Typography } from "@mui/material";
import { Psychology } from "@mui/icons-material";

export default function Notes() {
  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{
        alignItems: "center",
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
          <Psychology />
          <Typography variant="h5">Purpose</Typography>
        </Stack>
        <Typography variant="caption">
          As I gain more experiences and skills, I find it increasingly
          difficult to write a succinct traditional resume that conveys the
          depth and breadth of my abilities. I also find it helpful to visualize
          skills in terms of time, percentages, etc rather than just raw text.
          This online resume is a way for me to not only TELL about my skills,
          but also show them. Hope you enjoy!
        </Typography>
        <Typography
          variant="caption"
          fontWeight={700}
          sx={{ color: "#99CCFF" }}
        >
          This UI was built from scratch using React, TypeScript, Next.js, MUI,
          HTML, and CSS
        </Typography>
        {/* <Link variant='caption' sx={{ color: '#99CCFF', cursor: 'pointer' }}>https://www.linkedin.com/in/matthew-williamson-a63a88121/</Link> */}
      </Stack>
    </Stack>
  );
}
