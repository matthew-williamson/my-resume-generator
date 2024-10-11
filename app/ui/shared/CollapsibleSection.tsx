import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Box, Divider, IconButton, Stack } from "@mui/material";
import { useState } from "react";

interface CollapsibleSectionProps {
  open?: boolean;
  header: any;
  children: any;
}
export default function CollapsibleSection({
  open = false,
  header,
  children,
}: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(open);
  return (
    <Stack
      sx={{
        backgroundColor: "#1A1A1A",
        borderRadius: 2,
        border: "1px solid rgba(255, 255, 255, 0.12)",
        flex: 1
      }}
    >
      <Stack
        direction="row"
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
          cursor: "pointer",
          p: 2,
          ':hover': {
            opacity: 0.8
          }
        }}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
      >
        {header}
        <IconButton
          sx={{
            color: "#99CCFF",
            p: 0.25,
            ":hover": { color: "rgba(190, 253, 200, 0.6)" },
            height: 32,
          }}
        >
          {!isOpen ? (
            <ExpandMore sx={{ fontSize: 32 }} />
          ) : (
            <ExpandLess sx={{ fontSize: 32 }} />
          )}
        </IconButton>
      </Stack>
      {!isOpen ? null : (
        <>
          <Divider sx={{ backgroundColor: "rgba(255, 255, 255, 0.12)" }} />
          <Box sx={{ p: 2 }}>{children}</Box>
        </>
      )}
    </Stack>
  );
}
