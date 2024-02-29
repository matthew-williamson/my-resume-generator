import { Avatar, Stack, Typography } from "@mui/material";

export default function Header() {
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
      <Avatar sx={{ width: 100, height: 100 }}>
        <img src="./matt_williamson.jpg" width={100} alt="matt headshot" />
      </Avatar>
      <Stack>
        <Typography variant="h5">Matthew Williamson</Typography>
        <Typography variant="caption">Senior Software Engineer</Typography>
        <Typography variant="caption">Scottsdale, AZ</Typography>
      </Stack>
    </Stack>
  );
}
