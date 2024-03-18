import { Expand, ExpandLess, ExpandMore } from "@mui/icons-material";
import { Box, Divider, IconButton, Stack } from "@mui/material";
import { useState } from "react";

interface CollapsibleSectionProps {
  header: any;
  children: any;
}
export default function CollapsibleSection({
  header,
  children,
}: CollapsibleSectionProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <Stack
      sx={{
        backgroundColor: "#1A1A1A",
        borderRadius: 2,
        border: "1px solid rgba(255, 255, 255, 0.12)",
        flex: 1,
      }}
    >
      <Stack
        direction="row"
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
          cursor: "pointer",
          p: 2,
        }}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {header}
        <IconButton
          sx={{
            color: "#99CCFF",
            p: 0.25,
            ":hover": { color: "rgba(190, 253, 200, 0.6)" },
            height: 32,
          }}
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? (
            <ExpandMore sx={{ fontSize: 32 }} />
          ) : (
            <ExpandLess sx={{ fontSize: 32 }} />
          )}
        </IconButton>
      </Stack>
      {isCollapsed ? null : (
        <>
          <Divider sx={{ backgroundColor: "rgba(255, 255, 255, 0.12)" }} />
          <Box sx={{ p: 2 }}>{children}</Box>
        </>
      )}
    </Stack>
  );
}
