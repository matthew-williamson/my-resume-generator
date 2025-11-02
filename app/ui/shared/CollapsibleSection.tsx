import { THEME } from "@/app/lib/theme";
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
        borderRadius: 2,
        border: `2px solid ${THEME.PRIMARY}`,
        flex: 1,
        backgroundColor: THEME.BACKGROUND,
      }}
    >
      <Stack
        direction="row"
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
          cursor: "pointer",
          p: 2,
          backgroundColor: THEME.PRIMARY,
          ":hover": {
            opacity: 0.8,
          },
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
            color: THEME.BACKGROUND,
            p: 0.25,
            ":hover": { color: THEME.PRIMARY },
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
          <Box sx={{ p: 2 }}>{children}</Box>
        </>
      )}
    </Stack>
  );
}
